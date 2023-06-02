import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FancyDivider from "./LineBreak";
import { Logo } from "./Logo";
import Spacer from "./Spacer";
import Anchor from "./Anchor";

function Socials() {
  return (
    <div className="flex items-center gap-4 text-[#720F0F]">
      <Link
        href="https://www.facebook.com/alleyanchortacos"
        target="_blank"
        className="hover:-translate-y-2 transition-all duration-100"
      >
        <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
      </Link>
      {/* <Link
        href="/"
        className="hover:-translate-y-2 transition-all duration-100"
      >
        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
      </Link>
      <Link
        href="/"
        className="hover:-translate-y-2 transition-all duration-100"
      >
        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
      </Link> */}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-sea  relative ">
      <div className="justify-center items-center flex flex-col">
        <Spacer margin={"my-1"} />
        <FancyDivider>
          <Logo className={"h-20 w-20"} />
        </FancyDivider>
        <Spacer margin={"my-1"} />
        <Socials />
        <p className="uppercase text-[#720F0F] font-semibold my-2 text-sm">
          Powered by: Create Edge
        </p>
      </div>
      {/* <Link href="/signin" className="absolute right-0 bottom-0">
        <Anchor color="black" />
      </Link> */}
    </footer>
  );
}
