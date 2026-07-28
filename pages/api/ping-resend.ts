import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true,
    hasApiKey: Boolean(process.env.RESEND_API_KEY),
    hasWebhookSecret: Boolean(process.env.RESEND_WEBHOOK_SECRET),
    resendType: typeof resend,
  });
}
