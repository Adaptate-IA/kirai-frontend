import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, name, budget } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email requerido" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Kirai Waitlist <onboarding@resend.dev>",
    to: process.env.RESEND_TO_EMAIL!,
    subject: `Nuevo registro en waitlist: ${email}`,
    html: `
      <h2>Nuevo registro en la lista de espera de Kirai</h2>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Nombre:</strong> ${name || "—"}</li>
        <li><strong>Gasto mensual en ads:</strong> ${budget || "—"}</li>
      </ul>
    `,
  });

  return NextResponse.json({ ok: true });
}
