"use client";
import { garamond } from "@/components/fonts/fonts";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import FancyDivider from "@/components/FancyDivider";
import Anchor from "@/components/Anchor";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Spacer from "@/components/Spacer";

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

export default function Home() {
  return (
    <>
      <section className="bg-peach h-screen flex flex-col relative">
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
            <FancyDivider>
              <Anchor color="orange" />
            </FancyDivider>
          </div>
          <SubHeading />

          <Spacer margin={"mb-14"} />

          <div className="flex flex-col md:flex-row w-full gap-6 items-center justify-center px-6  ">
            <NavLink href={"/menu"}>Our Menu</NavLink>
            <NavLink newTab href={"https://www.doordash.com"}>
              Deliver
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col -mt-52 gap-24 items-center justify-center z-20 ">
          <div className="flex justify-center">
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              className=" animate-pulse  absolute  rounded-full  hover:cursor-pointer"
            >
              <p className={`${garamond.className} text-gray-100 text-2xl `}>
                Learn more
              </p>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              className="border-2 animate-pulse border-white absolute  rounded-full  w-12 h-12 grid place-content-center hover:cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-6 h-6 text-white animate-pulse "
              />
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`bg-peach flex flex-col items-center w-full gap-4 ${garamond.className} py-20 px-4`}
        id="main"
      >
        <article className="my-20">
          <p className="text-3xl text-darkPeach font-bold text-center mb-8">
            Are you looking for a great Mexican restaurant?
          </p>
          <p className="max-w-xl text-center font-semibold text-xl">
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
          <p className="text-2xl text-darkPeach font-bold text-center max-w-3xl ">
            Whether you’re headed for a night out with friends, or you’re trying
            to feed the whole family, you’ll want to stop by Alley Anchor.
          </p>
        </article>
      </section>
    </>
  );
}
