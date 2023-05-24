import { garamond } from "@/components/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCar,
  faTruckFast,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/components/Logo";

function Header() {
  return (
    <div
      className={`text-6xl font-semibold  gap-4 px-12 tracking-widest text-center ${garamond.className}`}
    >
      <p>Do you enjoy flavors</p>
      <p>from south of the border?</p>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="text-3xl text-center tracking-wide">
      <p>Try our authentic Mexican street food </p>
      <p>the next time you eat out</p>
    </div>
  );
}

function MenuButton() {
  return (
    <Link
      href="/menu"
      className={`uppercase flex items-center gap-2 border-peach tracking-wide text-xl text-peach hover:text-gray-100 hover:bg-peach/90 rounded py-2 px-8 border-2  font-extrabold bg-red-500/10 hover:border-2  transition-all duration-300 ${garamond.className}`}
    >
      Our Menu
    </Link>
  );
}

function DoorDash() {
  return (
    <Link
      href="https://www.doordash.com/"
      target="_blank"
      className={`uppercase flex items-center gap-2 border-peach tracking-wide text-xl text-peach hover:text-gray-100 hover:bg-peach/90 rounded py-2 px-8 border-2  font-extrabold bg-red-500/10 hover:border-2  transition-all duration-300 ${garamond.className}`}
    >
      Order Now
    </Link>
  );
}

function Line() {
  return <div className="border-2 w-full rounded-md border-gray-100" />;
}

function Anchor() {
  return (
    <div className="h-12 w-12 relative">
      <Image src="/anchor-orange.png" fill={true} alt="Alley Anchor Logo" />
    </div>
  );
}

function AnchorBlack() {
  return (
    <div className="absolute w-fit h-fit bottom-4 right-16">
      <div className=" h-64 w-64 relative">
        <Image src="/anchor-black.png" fill={true} alt="Alley Anchor Logo" />
      </div>
    </div>
  );
}

function AnchorRed() {
  return (
    <div className=" w-fit h-fit  z-50">
      <div className=" h-16 w-16 relative">
        <Image src="/anchor.png" fill={true} alt="Alley Anchor Logo" />
      </div>
    </div>
  );
}

function AnchorBreak() {
  return (
    <div className="w-full flex items-center my-2 max-w-2xl ">
      <Line />
      <div className="mx-8">
        <Anchor />
      </div>
      <Line />
    </div>
  );
}

function AnchorRedBreak() {
  return (
    <div className="w-full flex items-center my-16 max-w-2xl relative">
      <Line />
      <div className="mx-8">
        <Link href="/">
          <AnchorRed />
        </Link>
      </div>
      <Line />
    </div>
  );
}

function LogoBreak() {
  return (
    <div className="w-full flex items-center my-2 max-w-2xl">
      <Line />
      <div className="mx-8">
        <Link href="/">
          <Logo className="h-20 w-20" />
        </Link>
      </div>
      <Line />
    </div>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-4 text-[#720F0F]">
      <Link href="https://www.facebook.com/alleyanchortacos" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="w-10 h-10" />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
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

        <div className="flex justify-center items-center flex-1 text-white z-20">
          <div className="max-w-fit w-full -mt-60">
            <Header />
            <AnchorBreak />
            <SubHeading />

            <div className="flex items-center justify-center gap-12 mt-16">
              <MenuButton />
              <DoorDash />
            </div>
          </div>
        </div>
      </div>

      <section
        className={`bg-peach flex flex-col items-center w-full gap-4 ${garamond.className} -mt-20 py-20`}
      >
        <p className="text-3xl text-darkPeach font-bold text-center">
          Are you looking for a great Mexican restaurant?
        </p>
        <p className="max-w-xl text-center font-semibold text-xl">
          Alley Anchor is proud to serve authentic Mexican street food in Port
          Clinton, and Marblehead areas, with a fun environment that's open
          late, we’re the perfect spot for your next late night out or get
          together.
        </p>

        <AnchorRedBreak />

        <p className="text-3xl text-darkPeach font-bold text-center max-w-3xl ">
          Whether you’re headed for a night out with friends, or you’re trying
          to feed the whole family, you’ll want to stop by Alley Anchor.
        </p>
      </section>
      <footer className="bg-sea py-8 relative">
        <div className="justify-center items-center flex flex-col ">
          <LogoBreak />
          <Socials />
          <p className="uppercase text-[#720F0F] font-semibold my-6">
            Powered by: Create Edge
          </p>
        </div>
        <AnchorBlack />
      </footer>
    </>
  );
}
