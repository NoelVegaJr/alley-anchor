"use client";
import Stack from "@/components/Stack";
import { garamond } from "@/components/fonts/fonts";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function SmoothScroll() {
  return (
    <Link
      to="menu"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 mx-auto animate-pulse hover:cursor-pointer"
    >
      <Stack gap={"gap-20"} center>
        <p className={`${garamond.className} text-gray-100 text-2xl `}>
          View Menu
        </p>
        <div className="border-2 rounded-full w-12 h-12 grid place-content-center">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-6 h-6 text-white animate-pulse"
          />
        </div>
      </Stack>
    </Link>
  );
}
