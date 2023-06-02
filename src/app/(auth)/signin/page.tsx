import { Logo } from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Stack from "@/components/Stack";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full w-full flex ">
      <div className="w-1/2 h-full relative flex items-center ">
        {/* <Logo className="h-32 w-32 fixed top-0 left-0"></Logo> */}
        <p className="h-32 w-32 fixed top-0 left-0 font-semibold text-xl pl-8 pt-8">
          Urbrink
        </p>
        <div className="mx-auto ">
          <div className="text-4xl font-bold tracking-wide mb-2">
            Welcome Back!
          </div>

          <form className="max-w-md mb-2">
            <Stack>
              <label className="mb-1">Email address</label>
              <input
                type="email"
                className="py-1 px-2 rounded border mb-4"
                placeholder="John@gmail.com"
              />
              <button className="py-1 bg-slate-900 rounded text-white font-semibold">
                Sign in
              </button>
            </Stack>
          </form>
          <div className="flex justify-between text-sm ">
            <p className="text-gray-400">Don&apos;t have an account?</p>
            <Link href="/signup" className="underline text-blue-800">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-500 h-full rounded-l-3xl "></div>
    </div>
  );
}
