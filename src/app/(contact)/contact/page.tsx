"use client";

import Frame from "@/components/Frame";
import Spacer from "@/components/Spacer";
import Stack from "@/components/Stack";

export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <div className=" flex h-full">
        <Stack gap=" max-w-2xl w-full px-8 py-12 gap-12">
          <form onSubmit={handleSubmit} className="w-full">
            <Stack gap="gap-4">
              <p className="text-2xl font-semibold">Contact us</p>

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

              <div className="flex flex-col mb-4">
                <label htmlFor="">Message</label>
                <input type="text" className="border rounded w-full" />
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
        <div className="h-full flex-1 bg-blue-500 grid place-content-center">
          Map
        </div>
      </div>
    </>
  );
}
