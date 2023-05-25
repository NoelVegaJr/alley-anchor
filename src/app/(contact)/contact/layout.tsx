import "@/app/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { garamond } from "@/components/fonts/fonts";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Frame from "@/components/Frame";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function NavBar() {
  return (
    <nav
      className={` flex justify-between items-center   text-white w-full pr-4 md:px-8 top-0 z-50 transition-all duration-700 bg-black`}
    >
      <Link href="/">
        <Logo className={`transition-all duration-300 h-20 w-20`} />
      </Link>
      <div className="z-10">
        <FontAwesomeIcon icon={faBars} className="w-12 h-12 xl:hidden" />
      </div>
      <ul
        className={`gap-12 text-white z-10  text-2xl font-semibold ${garamond.className} transition-all duration-300 hidden xl:flex md:pr-8`}
      >
        <li>
          <Link href="/" className={``}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/menu" className={``}>
            Menu
          </Link>
        </li>
        <li>
          <Link href="/contact" className={``}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Frame contentClassName="h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </Frame>
    </>
  );
}
