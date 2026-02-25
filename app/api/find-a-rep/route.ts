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
  const fallback = process.env.CONTACT_TO_EMAIL ?? 'info@cosasco.com'

  try {
    const body = await req.json()
    const { firstName, lastName, company, country, industry, inquiry, details, email, region, routedTo, repName } = body

    if (!firstName || !country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const toEmail = routedTo ?? fallback
    const repLabel = repName ? ` [Routed to: ${repName}]` : ''
    const regionLabel = region ? ` - ${region}` : ''

    await resend.emails.send({
      from: 'Cosasco Website <noreply@cosasco.com>',
      to: toEmail,
      cc: routedTo ? fallback : undefined,
      replyTo: email ?? undefined,
      subject: `Find a Rep Request - ${country}${regionLabel}${repLabel} - ${firstName} ${lastName ?? ''}`,
      html: `
        <h2>New Find a Rep Inquiry</h2>
        ${repName ? `<p style="background:#fff3cd;padding:10px 14px;border-radius:6px;margin-bottom:14px;font-size:14px;"><strong>Automatically routed to:</strong> ${repName} - ${region ?? 'Unknown Region'}</p>` : ''}
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px;border:1px solid #e0e0e0;">${firstName} ${lastName ?? ''}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;border:1px solid #e0e0e0;">${company ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;border:1px solid #e0e0e0;">${email ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Country / Region</td><td style="padding:8px;border:1px solid #e0e0e0;">${country}${region ? ` (${region})` : ''}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Industry</td><td style="padding:8px;border:1px solid #e0e0e0;">${industry ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Inquiry Type</td><td style="padding:8px;border:1px solid #e0e0e0;">${inquiry ?? '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Details</td><td style="padding:8px;border:1px solid #e0e0e0;">${details ?? '-'}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[find-a-rep-api]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
