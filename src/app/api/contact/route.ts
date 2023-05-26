import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "lawrence.raydesign@gmail.com",
    from: "noel@squadcomms.com",
    subject: `Customer Contact: ${data.firstName} ${data.lastName}`,
    text: "and easy to do anywhere, even with Node.js",
    html: `
    <p>First Name: ${data.firstName}</p>
    <p>Last Name: ${data.lastName}</p>
    <p>Phone: ${data.phone}</p>
    <p>Message:</p>
    ${data.message}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
  return NextResponse.json({ msg: "Hello" });
}
