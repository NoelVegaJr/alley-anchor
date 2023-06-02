"use client";
import Stack from "@/components/Stack";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Page() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return signIn("email", {
      email: "noelvegacodes@gmail.com",
      redirect: false,
    });
  };
  return (
    <div className="h-full w-full flex ">
      <div className="w-1/2 h-full relative flex items-center ">
        {/* <Logo className="h-32 w-32 fixed top-0 left-0"></Logo> */}
        <p className="h-32 w-32 fixed top-0 left-0 font-semibold text-xl pl-8 pt-8">
          Urbrink
        </p>
        <div className="mx-auto ">
          <div className="text-4xl font-bold tracking-wide mb-2">
            Create an account
          </div>
          <p className="text-gray-400 mb-6">Gain exclusive access today!</p>
          <form onSubmit={handleSubmit} className="max-w-md mb-2">
            <Stack>
              <label className="mb-1">Email address</label>
              <input
                type="email"
                className="py-1 px-2 rounded border mb-4"
                placeholder="John@gmail.com"
              />
              <button
                type="submit"
                className="py-1 bg-slate-900 rounded text-white font-semibold"
              >
                Sign up
              </button>
            </Stack>
          </form>
          <div className="flex justify-between text-sm ">
            <p className="text-gray-400">Already have an account?</p>
            <Link href="/signin" className="underline text-blue-800">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-500 h-full rounded-l-3xl "></div>
    </div>
  );
}
