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
      className={`w-full uppercase  md:text-xl bg-sea/90 text-gray-200  tracking-wider text-xl
      hover:text-gray-100 hover:bg-peach/90 rounded py-2 text-center drop-shadow-2xl  font-extrabold transition-all duration-300 ${garamond.className}`}
    >
      {children}
    </Link>
  );
}
