'use server'

import { Resend } from 'resend';

const App = () => {
  const send = async () => {
    'use server'

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });
 
    console.log(data)
  }

  return (
    <form action={send}>
      <button type="submit">Send email</button>
    </form>
  )
}

export default App;