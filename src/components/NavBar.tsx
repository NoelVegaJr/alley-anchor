"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { garamond } from "./fonts/fonts";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Spacer from "./Spacer";
import Footer from "./Footer";

export default function NavBar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  console.log(pathname);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` flex justify-between items-center  ${
        scrollPosition === 0
          ? "h-24"
          : "bg-gradient-to-b from-black to-transparent via-black "
      } text-white fixed w-full pr-4 md:px-8 top-0 z-50 transition-all duration-700 ${
        scrollPosition > 700 && "bg-black h-20 "
      } ${pathname === "/contact" && "bg-black"} `}
    >
      {/* <div className="absolute hidden: md:block bg-gradient-to-t from-transparent via-black   to-black h-full w-full  bottom-0 left-0  " /> */}
      <Link
        href="/"
        className={`${pathname === "/" && scrollPosition === 0 && "pt-6"}`}
      >
        <Logo
          className={`${
            scrollPosition === 0
              ? `h-20 w-20 ${pathname !== "/contact" && "md:h-36 md:w-36 "} ${
                  pathname === "/contact" && "h-24 w-24"
                } `
              : "h-16 w-16 md:h-24 md:w-24 "
          } transition-all duration-300`}
        />
      </Link>
      <div className="z-10" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} className="w-10 h-10 xl:hidden" />
      </div>
      <div
        className={`flex flex-col absolute top-0 left-0 ${
          open ? "translate-y-0" : "translate-y-full"
        } h-screen w-full transition-all duration-200 z-50 bg-sea`}
      >
        <div className="flex justify-end p-4" onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faX} className="w-8 h-8 text-white" />
        </div>
        <Spacer margin="my-4" />
        <div className="flex-1 flex justify-center items-center">
          <ul
            className={`text-white font-semibold text-4xl text-center flex flex-col gap-10 ${garamond.className}`}
          >
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" onClick={() => setOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-4">
          <Footer />
        </div>
      </div>
      <ul
        className={`gap-12 text-white z-10 ${
          scrollPosition === 0 ? "text-2xl" : "text-lg"
        } text-2xl font-semibold ${
          garamond.className
        } transition-all duration-300 hidden xl:flex md:pr-8`}
      >
        <li>
          <Link href="/" className={`${pathname === "/" && "border-b-2"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/menu"
            className={`${pathname === "/menu" && "border-b"}`}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${pathname === "/contact" && "underline"}`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
