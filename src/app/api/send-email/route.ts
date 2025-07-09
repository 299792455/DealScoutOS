import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { LRUCache } from 'lru-cache';

const rateLimiter = new LRUCache<string, number>({
  max: 500,
  ttl: 1000 * 60, // 1 minute
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, honeypot } = await req.json();

    if (honeypot) {
      return NextResponse.json(
        { error: 'Bot détecté (honeypot)' },
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    const ip = req.headers.get('x-forwarded-for') || 'inconnue';
    const key = `ip:${ip}`;

    if (rateLimiter.has(key)) {
      return NextResponse.json(
        { error: 'Trop de messages. Attendez une minute.' },
        { status: 429 }
      );
    }

    rateLimiter.set(key, Date.now());

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"DealScout Contact" <${process.env.EMAIL_USER}>`,
      to: 'xyweb.services@gmail.com',
      subject: `Suggestion DealScout - ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Erreur d’envoi :', err);
    return NextResponse.json(
      { error: 'Erreur serveur. Merci de réessayer.' },
      { status: 500 }
    );
  }
}
