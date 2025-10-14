import { EmailTemplate } from "@/components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { to, subject, firstName } = await req.json()

    const { data, error } = await resend.emails.send({
      from: "EU TE AMO <ligia@enzoribeiroz.com.br>",
      to,
      subject,
      react: await EmailTemplate({ firstName }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    console.error("Email send error:", error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}
