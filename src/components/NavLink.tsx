import Link from "next/link";
import { garamond } from "./fonts/fonts";

export default function NavLink({
  children,
  href,
  newTab = false,
}: {
  children: string;
  href: string;
  newTab?: boolean;
}) {
  return (
    <Link
      href={href}
      target={`${newTab && "_blank"}`}
      className={`w-full uppercase   hover:bg-sea/80 text-gray-100  tracking-wider block bg-sea xl:bg-transparent
      hover:text-gray-100 border-2 border-sea  rounded py-2 text-center drop-shadow-2xl  font-extrabold transition-all duration-300 ${garamond.className}`}
    >
      {children}
    </Link>
  );
}
