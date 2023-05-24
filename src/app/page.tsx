import { garamond } from "@/components/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "@/components/Logo";

function Header() {
  return (
    <div
      className={`text-3xl md:text-5xl font-semibold  gap-4 tracking-widest text-center ${garamond.className}`}
    >
      <p>Do you enjoy flavors</p>
      <p>from south of the border?</p>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="text-xl md:text-2xl text-center tracking-wide">
      <p>Try our authentic Mexican street food the next time you eat out</p>
    </div>
  );
}

function LandingCallToActionBtn({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`w-full uppercase  md:text-xl bg-sea/90 text-gray-200  tracking-wider text-xl
      hover:text-gray-100 hover:bg-peach/90 rounded py-2 text-center drop-shadow-2xl  font-extrabold transition-all duration-300 ${garamond.className}`}
    >
      {children}
    </Link>
  );
}

function Line() {
  return <div className="border-2 w-full rounded-md border-gray-100" />;
}

function Anchor() {
  return (
    <div className="h-16 w-16 md:h-24 md:w-24 relative">
      <Image src="/anchor-orange.png" fill={true} alt="Alley Anchor Logo" />
    </div>
  );
}

function AnchorBlack() {
  return (
    <div className="absolute w-fit h-fit bottom-0 -right-6 sm:bottom-4 sm:right-10">
      <div className=" h-32 w-32 md:h-44 md:w-44 relative">
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
    <div className="w-full flex justify-center items-center my-2 max-w-2xl ">
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
          <Logo className="h-20 w-20 md:h-44 md:w-44" />
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
      <section className="bg-peach h-screen flex flex-col">
        {/* Landing Background */}
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
            <div className="absolute top-0 left-0 bg-black/80 h-full w-full" />
            <div className="absolute bottom-0 left-0 h-2 sm:h-6 bg-gradient-to-t from-peach to-transparent w-full " />
          </div>
        </div>
        {/* End of Landing Background */}

        <div className="flex flex-col h-full mt-20 md:mt-8 mx-auto justify-center px-4 items-center z-20 max-w-fit w-full text-gray-200">
          <Header />
          <div className="flex justify-center my-4 w-full">
            <AnchorBreak />
          </div>
          <SubHeading />

          <div className="flex flex-col md:flex-row w-full gap-6 items-center justify-center px-6  mt-10">
            <LandingCallToActionBtn href={"/menu"}>
              Our Menu
            </LandingCallToActionBtn>
            <LandingCallToActionBtn href={"https://www.doordash.com"}>
              Deliver
            </LandingCallToActionBtn>
          </div>
        </div>
      </section>

      <section
        className={`bg-peach flex flex-col items-center w-full gap-4 ${garamond.className} py-20 px-4`}
      >
        <p className="text-3xl text-darkPeach font-bold text-center">
          Are you looking for a great Mexican restaurant?
        </p>
        <p className="max-w-xl text-center font-semibold text-xl">
          Alley Anchor is proud to serve authentic Mexican street food in Port
          Clinton, and Marblehead areas, with a fun environment that&apos;s open
          late, we&apos;re the perfect spot for your next late night out or get
          together.
        </p>

        <AnchorRedBreak />

        <p className="text-2xl text-darkPeach font-bold text-center max-w-3xl ">
          Whether you’re headed for a night out with friends, or you’re trying
          to feed the whole family, you’ll want to stop by Alley Anchor.
        </p>
      </section>
      <footer className="bg-sea py-8 px-4 relative overflow-hidden">
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
