import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1'
  const { allowed, resetIn } = rateLimit(ip, 5, 60_000)

  if (!allowed) {
    return Response.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(resetIn / 1000)) } },
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_TO_EMAIL ?? 'support@cosasco.com'

  try {
    const body = await req.json()
    const { name, company, email, phone, category, serial, subject, description, priority } = body

    if (!name || !email || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Cosasco Support Form <noreply@cosasco.com>',
      to,
      replyTo: email,
      subject: `[${priority ?? 'Normal'}] Support Request: ${subject ?? category ?? 'General'} — ${name}`,
      html: `
        <h2>New Support Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px;border:1px solid #e0e0e0;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;border:1px solid #e0e0e0;">${company ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;border:1px solid #e0e0e0;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Phone</td><td style="padding:8px;border:1px solid #e0e0e0;">${phone ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Category</td><td style="padding:8px;border:1px solid #e0e0e0;">${category ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Product/Serial</td><td style="padding:8px;border:1px solid #e0e0e0;">${serial ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Priority</td><td style="padding:8px;border:1px solid #e0e0e0;">${priority ?? 'Normal'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Subject</td><td style="padding:8px;border:1px solid #e0e0e0;">${subject ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Description</td><td style="padding:8px;border:1px solid #e0e0e0;">${description}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[support-api]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
