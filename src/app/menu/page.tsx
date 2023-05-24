import { garamond } from "@/components/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronCircleDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/components/Logo";

function Header() {
  return (
    <div
      className={`text-3xl md:text-5xl font-semibold  gap-4 tracking-widest text-center ${garamond.className}`}
    >
      <p>Menu</p>
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
      <Link
        href="https://www.facebook.com/alleyanchortacos"
        target="_blank"
        className="hover:-translate-y-2 transition-all duration-100"
      >
        <FontAwesomeIcon icon={faFacebook} className="w-10 h-10" />
      </Link>
      <Link
        href="/"
        className="hover:-translate-y-2 transition-all duration-100"
      >
        <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
      </Link>
      <Link
        href="/"
        className="hover:-translate-y-2 transition-all duration-100"
      >
        <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
      </Link>
    </div>
  );
}



function MenuItem({
  description,
  index,
}: {
  description: string;
  index: number;
}) {
  const IS_EVEN = index % 2 == 0;
  return (
    <article>
      <div className={` ${!IS_EVEN && "ml-auto"} w-1/2`}>
        <div
          className={`mb-6 h-52 w-52 ${
            !IS_EVEN && "ml-auto"
          } bg-blue-500 grid place-content-center font-bold`}
        >
          Image Here
        </div>
        <h3
          className={`${
            !IS_EVEN && "text-right"
          } uppercase font-extrabold text-2xl text-[#0f0303] mb-4`}
        >
          Fiesta Bowl
        </h3>
        <div className="text-[#0F0303] font-semibold text-lg">
          {description}
        </div>
      </div>
    </article>
  );
}

const menuItems = [
  {
    id: 1,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
  },
  {
    id: 2,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
  },
 {
    id: 3,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
  },
  {
    id: 4,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-peach h-screen flex flex-col">
        {/* Landing Background */}
        <div className="h-screen absolute top-0 left-0 w-full">
          <div className="h-full w-full absolute z-10">
            <div className="h-full w-full relative">
              <Image
                src="/street-tacos.jpg"
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

        <div className="flex flex-col h-full mt-20 md:mt-8 mx-auto justify-center px-4 items-center z-20 max-w-5xl w-full text-gray-200">
          <Header />
          <AnchorBreak />
          <p className={`${garamond.className} uppercase text-2xl mb-24`}>
            Mouth watering decesions
          </p>

          <button className="border-2 animate-pulse border-white rounded-full  w-16 h-16 grid place-content-center">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-8 h-8 text-white animate-pulse"
            />
          </button>
        </div>
      </section>

      <section
        className={`bg-peach flex flex-col items-center w-full gap-4 ${garamond.className} py-20 px-4`}
      >
        <div className="flex flex-col max-w-7xl">
          {menuItems.map((item, index) => {
            return <MenuItem index={index} description={item.description} />;
          })}
        </div>
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
