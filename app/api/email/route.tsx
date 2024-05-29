import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  console.log("dealing with request");
  const formData = await req.formData();
  const name = formData.get("name") as string | null;
  const company = formData.get("company") as string | null;
  const position = formData.get("position") as string | null;
  const phone = formData.get("phone") as string | null;
  const email = formData.get("email") as string | null;
  const place = formData.get("place") as string | null;
  const square = formData.get("square") as string | null;
  const culture = formData.get("culture") as string | null;

  if (
    !name ||
    !company ||
    !position ||
    !phone ||
    !email ||
    !place ||
    !square ||
    !culture
  ) {
    return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      priority: "high",
      from: myEmail,
      to: myEmail,
      subject: `Новая заявка от ${name}`,
      html: `<h2 style="margin-bottom: 20px;">Заявка на агроконсультацию</h2>
      <ul style="display:flex; padding: 0; margin: 0; justify-content: center; list-style: none;">
      <li style="margin: 0;"><strong>ФИО:</strong> ${name}</li>
      <li><strong>Компания:</strong> ${email}</li>
      <li><strong>Должность:</strong> ${position}</li>
      <li><strong>Телефон:</strong> ${phone}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Место нахождения:</strong> ${place}</li>
      <li><strong>Площадь, га:</strong> ${square}</li>
      <li><strong>Культура:</strong> ${culture}</li>
      </ul>`,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
