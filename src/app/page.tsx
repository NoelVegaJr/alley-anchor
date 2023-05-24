import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "auto",
});

function Logo() {
  return (
    <div className="h-32 w-32 relative">
      <Image src="/logo.png" fill={true} alt="Alley Anchor Logo" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-peach h-screen flex flex-col">
      <nav className="flex justify-between items-center pt-10 px-32">
        <Logo />
        <ul
          className={`flex gap-12 text-white text-3xl font-semibold ${garamond.className}`}
        >
          <li>
            <Link href="/" className="underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">Menu</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center items-center flex-1">
        <div className="max-w-fit w-full text-center -mt-24">
          <div
            className={`text-6xl font-semibold flex flex-col gap-4 px-12 tracking-widest ${garamond.className}`}
          >
            <p className="">Do you Enjoy flavors</p>
            <p>from south of the border?</p>
          </div>
          <div className="flex items-center ">
            <div className="border-2 w-full" />
            <div className="mx-8">
              <div className="h-12 w-12 relative">
                <Image src="/anchor.png" fill={true} alt="Alley Anchor Logo" />
              </div>
            </div>
            <div className="border-2 w-full" />
          </div>
          <div className="text-3xl">
            <p>Try our authentic Mexican street food </p>
            <p>the next time you eat out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
