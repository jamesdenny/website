'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const honeypot = formData.get('website') as string;

  // Honeypot check for bot protection
  if (honeypot) {
    return { success: false, error: 'Bot detected' };
  }

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required' };
  }

  try {
    await resend.emails.send({
      from: 'contact@jdenny.co.uk',
      to: 'james@jdenny.co.uk',
      subject: `Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send message' };
  }
}
