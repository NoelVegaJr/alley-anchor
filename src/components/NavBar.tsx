"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { garamond } from "./fonts/fonts";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ className }: { className?: string }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position > 700);
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
          ? "pt-2 h-32"
          : "bg-gradient-to-t from-black md:from-transparent md:via-black md:to-black "
      } text-white fixed w-full pr-4 md:px-8 top-0 z-50 transition-all duration-700 ${
        scrollPosition > 700 && "bg-black h-20 "
      } ${pathname === "/contact" && "bg-black"} ${className}`}
    >
      {/* <div className="absolute hidden: md:block bg-gradient-to-t from-transparent via-black   to-black h-full w-full  bottom-0 left-0  " /> */}
      <Link href="/">
        <Logo
          className={`${
            scrollPosition === 0
              ? `h-20 w-20 mt-6 ${
                  pathname !== "/contact" && "md:h-36 md:w-36 "
                } ${pathname === "/contact" && "h-24 w-24"} `
              : "h-16 w-16 md:h-24 md:w-24 "
          } transition-all duration-300`}
        />
      </Link>
      <div className="z-10">
        <FontAwesomeIcon icon={faBars} className="w-12 h-12 xl:hidden" />
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
