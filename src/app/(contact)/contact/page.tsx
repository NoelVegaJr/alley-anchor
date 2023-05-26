"use client";
import Stack from "@/components/Stack";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const MAX_CHAR = 300;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = { firstName, lastName, email, phone, message };
    console.log(data);
    fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {}, [message]);

  return (
    <>
      <div className=" flex h-full">
        <Stack gap=" max-w-2xl w-full px-8 py-12 gap-12">
          <form onSubmit={handleSubmit} className="w-full">
            <Stack gap="gap-4">
              <p className="text-2xl font-semibold">Reach Out!</p>
              <p>
                Got a question about Alley anchor? Are you interested in
                partnering with us? Have some suggestions or just want to say
                hi? Contact us:
              </p>

              <div className="flex gap-4">
                <div className="flex flex-col flex-1">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onInput={(e) => setFirstName(e.currentTarget.value)}
                    className="border rounded p-1"
                    placeholder="Jane"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onInput={(e) => setLastName(e.currentTarget.value)}
                    className="border rounded p-1"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={email}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  className="border rounded w-full p-1"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onInput={(e) => setPhone(e.currentTarget.value)}
                  className="border rounded p-1"
                  placeholder="555-555-5555"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="">Message</label>
                <TextareaAutosize
                  minRows={5}
                  value={message}
                  onInput={(e) => {
                    const msg = e.currentTarget.value;
                    if (msg.length > MAX_CHAR) {
                      return;
                    }
                    setMessage(e.currentTarget.value);
                  }}
                  className="border rounded w-full resize-none p-1 mb-2"
                  placeholder="Your message here..."
                />
                <p className="text-sm">{message.length} / 300</p>
              </div>

              <button
                type="submit"
                className="bg-peach py-2 w-full rounded font-semibold text-white"
              >
                Send Message
              </button>
            </Stack>
          </form>

          {/* <div>
            <div>Phone Number: 555-555-5555</div>

            <div>
              <p>Buisness Hours:</p>
              <ul>
                <li>Monday - Thursday 10am - 2am</li>
                <li>Friday - Saturday 10am - 2am</li>
                <li>Sunday 10am - 10pm</li>
              </ul>
            </div>
          </div> */}

          <button className="w-fit py-1 px-6 rounded bg-darkPeach text-white">
            Join our newsletter
          </button>
        </Stack>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5975.334051843514!2d-82.939505!3d41.51149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883bb2fb2b6d776b%3A0x7e1eb726bf5d7492!2s210%20Jefferson%20St%2C%20Port%20Clinton%2C%20OH%2043452!5e0!3m2!1sen!2sus!4v1685049924680!5m2!1sen!2sus"
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </>
  );
}
