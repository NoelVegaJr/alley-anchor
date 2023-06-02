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
  objectFit = "cover",
}: {
  className?: string;
  contentClassName?: string;
  id?: string;
  img?: { src: string; alt: string; opacity?: string };
  children?: React.ReactNode;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}) {
  return (
    <div className={`relative ${className}`}>
      {img && (
        <Image
          src={img.src}
          fill
          style={{ objectFit: objectFit }}
          className={img.opacity}
          alt={img?.alt}
        />
      )}

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
    <Stack gap="gap-4 absolute top-32 sm:top-72 px-4">
      <header className="text-center text-3xl sm:text-4xl tracking-widest text-gray-100">
        <p>Do you enjoy flavors</p>
        <p>from south of the border?</p>
      </header>

      <LineBreak>
        <Anchor color="orange" />
      </LineBreak>

      <p className="text-xl md:text-3xl text-center tracking-wide text-gray-100 relative">
        Try our authentic Mexican street food the next time you eat out
      </p>
      <Spacer margin="my-2" />
      <CallToActionButtons />
    </Stack>
  );
}

function CallToActionButtons() {
  return (
    <Stack
      direction="h"
      gap="gap-4 max-w-2xl w-full mx-auto text-sm sm:text-xl"
    >
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
        className="h-screen w-full"
        contentClassName="bg-black/70 flex flex-col w-full items-center justify-center  h-full "
        img={{ src: "/tacos.jpg", alt: "Alley Anchor Logo" }}
      >
        <Hero />
        <Link
          to="main"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 mx-auto animate-pulse hover:cursor-pointer"
        >
          <Stack gap={"gap-10"} center>
            <p className={`${garamond.className} text-gray-100 text-2xl `}>
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

      <Frame
        img={{ src: "/map.svg", alt: "map", opacity: "opacity-40" }}
        id="main"
        className="h-screen bg-peach px-4"
        contentClassName="px-10 pt-16 sm:pt-60"
        objectFit="cover"
      >
        <article>
          <p className="text-xl sm:text-4xl text-darkPeach font-bold text-center mb-8">
            Are you looking for a great Mexican restaurant?
          </p>
          <p className="max-w-2xl text-lg sm:text-2xl mx-auto text-center font-semibold ">
            Alley Anchor is proud to serve authentic Mexican street food in Port
            Clinton, and Marblehead areas, with a fun environment that&apos;s
            open late, we&apos;re the perfect spot for your next late night out
            or get together.
          </p>
        </article>
        <Spacer margin="my-8" />
        <FancyDivider>
          <Anchor color="red" />
        </FancyDivider>

        <Spacer margin="my-8" />
        <article className="">
          <p className="text-xl sm:text-3xl text-darkPeach mx-auto font-bold text-center max-w-3xl ">
            Whether you’re headed for a night out with friends, or you’re trying
            to feed the whole family, you’ll want to stop by Alley Anchor.
          </p>
        </article>
      </Frame>

      <section>
        <Stack className="bg-peach " direction="h" gap="flex-wrap">
          <div className="relative w-1/2 lg:flex-1 h-72 overflow-hidden">
            <Image
              alt=""
              src="/3tacos.png"
              style={{ objectFit: "cover" }}
              className="hover:scale-110 transition-all duration-200"
              fill
            />
          </div>

          <div className="relative w-1/2 lg:flex-1 h-72 overflow-hidden">
            <Image
              alt=""
              src="/burrito.png"
              style={{ objectFit: "cover" }}
              className="hover:scale-110 transition-all duration-200"
              fill
            />
          </div>
          <div className="relative w-1/2 lg:flex-1 h-72 overflow-hidden">
            <Image
              alt=""
              src="/quesadila.png"
              style={{ objectFit: "cover" }}
              className="hover:scale-110 transition-all duration-200"
              fill
            />
          </div>
          <div className="relative flex-1 h-72 overflow-hidden">
            <Image
              alt=""
              src="/birra-tacos.png"
              style={{ objectFit: "cover" }}
              className="hover:scale-110 transition-all duration-200"
              fill
            />
          </div>
        </Stack>

        <div
          className={`w-full font-semibold text-center bg-peach block py-10 ${garamond.className}`}
        >
          <a href="/menu" className="text-3xl">
            Check out our menu
          </a>
        </div>
      </section>
    </>
  );
}
