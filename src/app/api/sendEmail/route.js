import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  ///host: "smtp.gmail.com",
  //port: 465,
  //secure: true, // Use `true` for port 465, `false` for all other ports
  service: "gmail",
  auth: {
    user: "franzduran.fd@gmail.com",
    pass: "vujh noub dcor yaso",
  },
});

export async function POST(req) {
  try {
    const { name, message, email } = await req.json();

    const filePath = path.resolve(process.cwd(), "public/email-templates/email-template.html");

    // Leer el contenido del archivo HTML
    const htmlTemplate = fs.readFileSync(filePath, "utf8");

    // Reemplazar los marcadores de posición con los datos del formulario
    const htmlContent = htmlTemplate
      .replace("{{name}}", name)
      .replace("{{message}}", message)
      .replace("{{email}}", email);

    const mailOptions = {
      from: "franzduran.fd@gmail.com",
      to: email,
      subject: "Contacto del Portafolio",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Correo enviado", success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Error enviando el correo",
      success: false,
    });
  }
}
