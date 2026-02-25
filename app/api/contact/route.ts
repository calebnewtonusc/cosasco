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
  const to = process.env.CONTACT_TO_EMAIL ?? 'info@cosasco.com'

  try {
    const body = await req.json()
    const { firstName, lastName, company, email, phone, industry, subject, message } = body

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Cosasco Website <noreply@cosasco.com>',
      to,
      replyTo: email,
      subject: `Contact Form: ${subject ?? 'General Inquiry'} - ${firstName} ${lastName ?? ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px;border:1px solid #e0e0e0;">${firstName} ${lastName ?? ''}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;border:1px solid #e0e0e0;">${company ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;border:1px solid #e0e0e0;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Phone</td><td style="padding:8px;border:1px solid #e0e0e0;">${phone ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Industry</td><td style="padding:8px;border:1px solid #e0e0e0;">${industry ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Subject</td><td style="padding:8px;border:1px solid #e0e0e0;">${subject ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Message</td><td style="padding:8px;border:1px solid #e0e0e0;">${message}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact-api]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
