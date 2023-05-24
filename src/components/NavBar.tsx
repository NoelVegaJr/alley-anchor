"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { garamond } from "./fonts/fonts";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [active, setActive] = useState("home");
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex justify-between items-center pt-10 px-32 text-white sticky w-full top-0 z-50 bg-transparent">
      <Link href="/">
        <Logo className="h-32 w-32" />
      </Link>

      <ul
        className={`flex gap-12 text-white text-2xl font-semibold ${garamond.className}`}
      >
        <li>
          <Link href="/" className={`${pathname === "/" && "border-b-4"}`}>
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
