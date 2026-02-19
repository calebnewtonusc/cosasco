import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function generateRmaNumber(): string {
  const year = new Date().getFullYear()
  const num = Math.floor(1000 + Math.random() * 9000)
  return `RMA-${year}-${num}`
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_TO_EMAIL ?? 'rma@cosasco.com'

  try {
    const body = await req.json()
    const {
      fullName, company, email, phone, poNumber, orderDate,
      productName, serialNumber, quantity, returnReason,
      issueDescription, hazmat, notes,
    } = body

    if (!fullName || !email || !productName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const rmaNumber = generateRmaNumber()

    await resend.emails.send({
      from: 'Cosasco RMA System <noreply@cosasco.com>',
      to,
      replyTo: email,
      subject: `New RMA Request ${rmaNumber} — ${productName} (${fullName})`,
      html: `
        <h2>New RMA Request: ${rmaNumber}</h2>
        <h3>Customer Information</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Full Name</td><td style="padding:8px;border:1px solid #e0e0e0;">${fullName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;border:1px solid #e0e0e0;">${company ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;border:1px solid #e0e0e0;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Phone</td><td style="padding:8px;border:1px solid #e0e0e0;">${phone ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Original PO</td><td style="padding:8px;border:1px solid #e0e0e0;">${poNumber ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Order Date</td><td style="padding:8px;border:1px solid #e0e0e0;">${orderDate ?? '—'}</td></tr>
        </table>
        <h3>Product Information</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Product Name/Model</td><td style="padding:8px;border:1px solid #e0e0e0;">${productName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Serial Number</td><td style="padding:8px;border:1px solid #e0e0e0;">${serialNumber ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Quantity</td><td style="padding:8px;border:1px solid #e0e0e0;">${quantity ?? '1'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Return Reason</td><td style="padding:8px;border:1px solid #e0e0e0;">${returnReason ?? '—'}</td></tr>
        </table>
        <h3>Issue Details</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Description</td><td style="padding:8px;border:1px solid #e0e0e0;">${issueDescription ?? '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Hazardous Materials</td><td style="padding:8px;border:1px solid #e0e0e0;">${hazmat ? 'YES — Exposed to hazardous materials' : 'No'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e0e0e0;font-weight:bold;background:#f5f5f5;">Additional Notes</td><td style="padding:8px;border:1px solid #e0e0e0;">${notes ?? '—'}</td></tr>
        </table>
      `,
    })

    // Confirmation to customer
    await resend.emails.send({
      from: 'Cosasco Support <noreply@cosasco.com>',
      to: email,
      subject: `RMA Request Received: ${rmaNumber}`,
      html: `
        <p>Dear ${fullName},</p>
        <p>Thank you for submitting your RMA request. We will process it within 2 business days.</p>
        <p><strong>Your RMA Number: ${rmaNumber}</strong></p>
        <p>Please reference this number in all future correspondence. Once approved, you will receive shipping instructions.</p>
        <p>Questions? Email <a href="mailto:support@cosasco.com">support@cosasco.com</a> or call +1 (562) 949-0123.</p>
        <p>Best regards,<br>Cosasco Support Team</p>
      `,
    })

    return NextResponse.json({ success: true, rmaNumber })
  } catch (err) {
    console.error('[rma-api]', err)
    return NextResponse.json({ error: 'Failed to submit RMA' }, { status: 500 })
  }
}
