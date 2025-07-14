import { Resend } from 'resend';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_APIKEY);
    const { data, error } = await resend.emails.send({
      from: 'no-reply@pristinetechsolutions.com.ng',
      to: 'admin@pristinetechsolutions.com.ng',
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `<h2>Contact Form Submission</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message || 'Failed to send email.' }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error.' }), { status: 500 });
  }
}
