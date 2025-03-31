import nodemailer from 'nodemailer';

export async function POST (req) {
  const {name, email, location, budget, subject, message} = await req.json ();

  const transporter = nodemailer.createTransport ({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log (process.env.EMAIL_USER);

  const emailTemplate = `
        <html>
        <body>
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #333;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p style="text-align: center; color: #777;">Thank you for reaching out!</p>
            </div>
        </body>
        </html>
    `;

  try {
    await transporter.sendMail ({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Message from ${name}`,
      html: emailTemplate,
    });

    return new Response (
      JSON.stringify ({success: true, message: 'Email sent successfully!'}),
      {status: 200}
    );
  } catch (error) {
    console.log (error.message);
    return new Response (
      JSON.stringify ({
        success: false,
        message: 'Email sending failed!',
        error: error.message,
      }),
      {status: 500}
    );
  }
}
