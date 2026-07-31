import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CJX_ADDRESS = "cjx@terryzstudio.com";
const CJX_FORWARD_TO = "cjxian0304@gmail.com";
const DEFAULT_FORWARD_TO = "zhengterry2012@gmail.com";
const FORWARD_FROM = "TerryZ Studio Inbox <thanks@terryzstudio.com>";

function resolveForwardTo(to: string[]): string {
  const isCjx = to.some((address) => address.toLowerCase() === CJX_ADDRESS);
  return isCjx ? CJX_FORWARD_TO : DEFAULT_FORWARD_TO;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readRawBody(req: NextApiRequest): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const payload = await readRawBody(req);

  let event;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: (req.headers["svix-id"] as string) ?? "",
        timestamp: (req.headers["svix-timestamp"] as string) ?? "",
        signature: (req.headers["svix-signature"] as string) ?? "",
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET!,
    });
  } catch (err) {
    console.error("Invalid inbound email webhook signature:", err);
    res.status(401).json({ error: "Invalid signature" });
    return;
  }

  if (event.type !== "email.received") {
    res.status(200).json({});
    return;
  }

  const { data: email, error: getError } = await resend.emails.receiving.get(
    event.data.email_id
  );
  if (getError || !email) {
    console.error("Failed to fetch received email:", getError);
    res.status(200).json({});
    return;
  }

  const attachments = (
    await Promise.all(
      email.attachments.map(async (attachment) => {
        const { data, error } = await resend.emails.receiving.attachments.get({
          emailId: email.id,
          id: attachment.id,
        });
        if (error || !data) {
          console.error("Failed to fetch inbound attachment:", error);
          return null;
        }
        return {
          filename: data.filename,
          contentType: data.content_type,
          contentId: data.content_id,
          path: data.download_url,
        };
      })
    )
  ).filter((attachment): attachment is NonNullable<typeof attachment> => attachment !== null);

  const { error: sendError } = await resend.emails.send({
    from: FORWARD_FROM,
    to: resolveForwardTo(email.to),
    replyTo: email.from,
    subject: `[terryzstudio.com] ${email.subject}`,
    html: email.html ?? undefined,
    text: email.text ?? "(This email had no plain text content.)",
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (sendError) {
    console.error("Failed to forward inbound email:", sendError);
  }

  res.status(200).json({});
}
