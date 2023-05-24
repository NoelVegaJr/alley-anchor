import { Logo } from "@/components/Logo";
import NavBar from "@/components/NavBar";
import { garamond } from "@/components/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div
      className={`text-6xl font-semibold flex flex-col gap-4 px-12 tracking-widest ${garamond.className}`}
    >
      <p className="">Do you Enjoy flavors</p>
      <p>from south of the border?</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-peach h-screen flex flex-col">
      <div className="h-screen absolute top-0 left-0 w-full">
        <div className="h-full w-full absolute z-10">
          <div className="h-full w-full relative">
            <Image
              src="/tacos.jpg"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="Alley Anchor Logo"
            />
          </div>
          <div className="absolute top-0 left-0 bg-black/70 h-full w-full" />
          <div className="absolute bottom-0 left-0 h-32 bg-gradient-to-t from-peach to-transparent w-full " />
          {/* bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 */}
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 text-white z-50">
        <div className="max-w-fit w-full text-center -mt-60">
          <Header />
          <div className="flex items-center my-4">
            <div className="border-2 w-full rounded-md" />
            <div className="mx-8">
              <div className="h-12 w-12 relative">
                <Image
                  src="/anchor-orange.png"
                  fill={true}
                  alt="Alley Anchor Logo"
                />
              </div>
            </div>
            <div className="text-3xl">
              <p className="text-red-600 font-extrabold">
                Try our authentic Mexican street food{" "}
              </p>
              <p>the next time you eat out</p>
            </div>
            <div>
              <Link
                href="/menu"
                className="bg-white text-peach rounded py-1 px-4"
              >
                Our Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
