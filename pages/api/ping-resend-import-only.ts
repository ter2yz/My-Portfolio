import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    res.status(200).json({ ok: true, resendType: typeof resend, ResendType: typeof Resend });
  } catch (err) {
    res.status(200).json({
      ok: false,
      message: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    });
  }
}
