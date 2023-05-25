"use client";
import { garamond } from "@/components/fonts/fonts";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import FancyDivider from "@/components/LineBreak";
import Anchor from "@/components/Anchor";
import Spacer from "@/components/Spacer";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LineBreak from "@/components/LineBreak";
import Stack from "@/components/Stack";

function Frame({
  className,
  contentClassName,
  id,
  children,
  img,
}: {
  className?: string;
  contentClassName?: string;
  id?: string;
  img?: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      {img && <Image src={img.src} fill alt={img?.alt} />}

      <div className="absolute top-0 left-0 h-full w-full ">
        <div id={id} className={`relative h-full w-full ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <Stack gap="gap-4 absolute top-52">
      <header className="text-center text-5xl tracking-widest text-gray-100">
        <p>Do you enjoy flavors</p>
        <p>from south of the border?</p>
      </header>

      <LineBreak>
        <Anchor color="orange" />
      </LineBreak>

      <p className="text-xl md:text-2xl text-center tracking-wide text-gray-100 relative">
        Try our authentic Mexican street food the next time you eat out
      </p>
      <Spacer margin="my-6" />
      <CallToActionButtons />
    </Stack>
  );
}

function CallToActionButtons() {
  return (
    <Stack direction="h" gap="gap-4">
      <NavLink href={"/menu"}>Our Menu</NavLink>
      <NavLink newTab href={"https://www.doordash.com"}>
        Delivery
      </NavLink>
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Frame
        className="h-screen"
        img={{ src: "/tacos.jpg", alt: "Alley Anchor Logo" }}
      >
        <>
          <Frame
            className={`bg-black/70  h-full w-full  ${garamond.className}`}
          >
            <Frame className="max-w-2xl pt-20  flex flex-col items-center justify-center  h-full mx-auto ">
              <Hero />
              <Link
                to="main"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 mx-auto animate-pulse hover:cursor-pointer"
              >
                <Stack gap={"gap-20"} center>
                  <p
                    className={`${garamond.className} text-gray-100 text-2xl `}
                  >
                    Learn more
                  </p>
                  <div className="border-2 rounded-full w-12 h-12 grid place-content-center">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-6 h-6 text-white animate-pulse"
                    />
                  </div>
                </Stack>
              </Link>
            </Frame>
          </Frame>
        </>
      </Frame>
      <Frame id="main" className="h-screen bg-peach" contentClassName="py-20">
        <article className="">
          <p className="text-3xl text-darkPeach font-bold text-center mb-8">
            Are you looking for a great Mexican restaurant?
          </p>
          <p className="max-w-xl mx-auto text-center font-semibold text-xl">
            Alley Anchor is proud to serve authentic Mexican street food in Port
            Clinton, and Marblehead areas, with a fun environment that&apos;s
            open late, we&apos;re the perfect spot for your next late night out
            or get together.
          </p>
        </article>
        <FancyDivider>
          <Anchor color="red" />
        </FancyDivider>
        <article className="my-20">
          <p className="text-2xl text-darkPeach mx-auto font-bold text-center max-w-3xl ">
            Whether you’re headed for a night out with friends, or you’re trying
            to feed the whole family, you’ll want to stop by Alley Anchor.
          </p>
        </article>
      </Frame>
    </>
  );
}
