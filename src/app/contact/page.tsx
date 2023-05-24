"use client";

import Spacer from "@/components/Spacer";

export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="h-full flex justify-center border-8">
      <div className="bg-white flex h-full max-w-2xl w-full flex-col  p-12 pl-20">
        <p className="text-3xl font-semibold">Contact us</p>
        <Spacer margin="mb-2" />
        <div>Our friendly team would love to hear from you!</div>
        <Spacer margin="mb-2" />
        <form onSubmit={handleSubmit} className="max-w-xl">
          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="">First Name</label>
              <input type="text" className="border rounded p-1" />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="">Last Name</label>
              <input type="text" className="border rounded p-1" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="text" className="border rounded w-full p-1" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Phone Number</label>
            <input type="text" className="border rounded w-full p-1" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Message</label>
            <input type="text" className="border rounded w-full" />
          </div>

          <Spacer margin="mb-4" />
          <button
            type="submit"
            className="bg-peach py-2 w-full rounded font-semibold text-white"
          >
            Send Message
          </button>
        </form>
        <Spacer margin="mb-10" />

        <div>Phone Number: 555-555-5555</div>

        <Spacer margin="mb-4" />
        <div>
          <p>Buisness Hours:</p>
          <ul>
            <li>Monday - Thursday 10am - 2am</li>
            <li>Friday - Saturday 10am - 2am</li>
            <li>Sunday 10am - 10pm</li>
          </ul>
        </div>
        <Spacer margin="mb-10" />
        <button className="w-fit py-1 px-6 rounded bg-darkPeach text-white">
          Join our newsletter
        </button>
      </div>
      <div className="h-full w-full  bg-blue-500 border-8"></div>
    </div>
  );
}
