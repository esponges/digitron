'use server';

import nodemailer from 'nodemailer';

// gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

// export default async function submit(state: { formData: FormData; }) {
export default async function submit() {
  console.log('submitting');

  try {
    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });

    return { message: 'Gracias por tu mensaje!' };
  } catch (e) {
    console.error('oh no');
    console.error(e);
    return { error: 'Hubo un error al enviar tu mensaje' };
  }
}
