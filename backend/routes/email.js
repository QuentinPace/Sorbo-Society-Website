import express from "express";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const emailRouter = express.Router();
const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

emailRouter.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // check if exists
    const existing = await prisma.email
      .findUnique({
        where: { email },
      })
      .catch(() => null);

    if (existing) {
      return res.status(200).json({ message: "Already subscribed" });
    }

    // save email
    const newEmail = await prisma.email.create({
      data: { email },
    });

    // send confirmation email (non-blocking)
    resend.emails
      .send({
        from: "Sorbo Society <quentin@sorbosociety.com>", // must match your domain
        to: email,
        subject: "You're in 🍻",
        html: `
<div style="background:#0e0e0e;padding:40px 20px;font-family:Inter,Arial,sans-serif;color:#ffffff;">
  <div style="max-width:520px;margin:0 auto;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:32px;">
<div style="text-align:center;margin-bottom:24px;">
  <img src="https://cdn.sorbosociety.com/SORBO.png" alt="Sorbo Society Logo" style="height:300px;">
</div>

<div style="height:2px;width:60px;margin:0 auto 24px auto;background:#74dff6;border-radius:999px;"></div>

<h2 style="text-align:center;font-size:22px;font-weight:700;margin-bottom:16px;">
  You're in.
</h2>

<p style="text-align:center;color:#cfcfcf;font-size:15px;line-height:1.6;margin-bottom:24px;">
  Seriously, glad you’re here.
  <br/><br/>
  You just got early access to <span style="color:#74dff6;font-weight:600;">Sorbo Society</span>. I’m putting together a lineup of energy drinks you won’t see at your local store. Stuff that’s hard to find, imported, or just different.
</p>

<div style="border-top:1px solid rgba(255,255,255,0.08);margin:24px 0;"></div>

<p style="font-size:14px;color:#cfcfcf;line-height:1.6;margin-bottom:16px;">
  Hey, it’s Quentin.
</p>

<p style="font-size:14px;color:#cfcfcf;line-height:1.6;margin-bottom:20px;">
  I started this because I was bored of seeing the same drinks everywhere. There’s way more out there, and most people never get the chance to try it.
  <br/><br/>
  This is my way of changing that.
</p>

<div style="text-align:center;margin:28px 0;">
  <span style="display:inline-block;padding:10px 18px;border-radius:999px;border:1px solid rgba(116,223,246,0.4);color:#74dff6;font-weight:600;font-size:13px;">
    First drop coming soon
  </span>
</div>

<p style="text-align:center;font-size:14px;color:#cfcfcf;line-height:1.6;">
  Quick question for you:
  <br/>
  <strong style="color:#ffffff;">What are you drinking right now?</strong>
</p>

<p style="text-align:center;font-size:13px;color:#888;margin-top:12px;">
  Just hit reply and let me know. I actually read these.
</p>

<div style="margin-top:32px;text-align:center;font-size:12px;color:#666;">
  Sorbo Society<br/>
  Discovery. Exclusivity. Energy.
</div>
  </div>
</div>

`,
      })
      .catch(console.error);

    return res.status(201).json({
      message: "Subscribed successfully",
      data: newEmail,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default emailRouter;
