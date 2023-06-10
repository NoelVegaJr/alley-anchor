import Link from "next/link";
import { garamond } from "./fonts/fonts";

export default function NavLink({
  children,
  href,
  target,
}: {
  children: string;
  href: string;
  newTab?: boolean;
  target: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={`w-full uppercase   bg-sea/80 hover:bg-sea text-gray-100  tracking-wider block 
      hover:text-gray-100 border-2 border-sea  rounded py-2 text-center drop-shadow-2xl  font-extrabold transition-all duration-300 ${garamond.className}`}
    >
      {children}
    </Link>
  );
}
