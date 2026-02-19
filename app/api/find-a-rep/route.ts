import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_TO_EMAIL ?? 'info@cosasco.com'

  try {
    const body = await req.json()
    const { firstName, lastName, company, country, industry, inquiry, details, email } = body

    if (!firstName || !country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Cosasco Website <noreply@cosasco.com>',
      to,
      replyTo: email ?? undefined,
      subject: `Find a Rep Request — ${country} — ${firstName} ${lastName ?? ''}`,
      html: `
        <h2>New Find a Rep Inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px;border:1px solid #e0e0e0;">${firstName} ${lastName ?? ''}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;border:1px solid #e0e0e0;">${company ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;border:1px solid #e0e0e0;">${email ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Country / Region</td><td style="padding:8px;border:1px solid #e0e0e0;">${country}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Industry</td><td style="padding:8px;border:1px solid #e0e0e0;">${industry ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Inquiry Type</td><td style="padding:8px;border:1px solid #e0e0e0;">${inquiry ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Details</td><td style="padding:8px;border:1px solid #e0e0e0;">${details ?? '—'}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[find-a-rep-api]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
