"use client";
import "@/app/globals.css";
import { Logo } from "@/components/Logo";
import Stack from "@/components/Stack";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Frame from "@/components/Frame";

function TopNav() {
  return (
    <nav className="h-20 w-full px-8 bg-slate-800 border-b-2 border-slate-900 flex items-center justify-between">
      <Link href="/">
        <Logo className="h-20 w-20" />
      </Link>
      <div>
        <Stack className="text-white gap-6 text-lg" direction="h">
          <Link href="/">Home</Link>
          <Link href="menu">Menu</Link>
          <Link href="/">Contact Us</Link>
        </Stack>
      </div>
    </nav>
  );
}

function MainSideNav() {
  const endpoints = [
    { href: "inbox", name: "Inbox" },
    { href: "menu", name: "Menu Items" },
    { href: "notifications", name: "Notifications" },
    { href: "orders", name: "Orders" },
    { href: "account", name: "Account" },
    { href: "support", name: "Support" },
  ];
  return (
    <>
      <Frame
        className="h-full w-72 bg-slate-800"
        contentClassName="flex flex-col"
      >
        <div className="text-gray-100 text-lg p-4 border-b-2 border-b-slate-900">
          Alley Anchor
        </div>
        <Stack gap="gap-4 items-start flex-1 p-4">
          {endpoints.map((e) => {
            return (
              <XLink
                key={e.href}
                className="p-2 text-white w-full"
                href={`/dashboard/${e.href}`}
                activeClass="bg-gray-500/70 rounded"
              >
                {e.name}
              </XLink>
            );
          })}
        </Stack>
        <Profile />
      </Frame>
    </>
  );
}

function Profile() {
  return (
    <button className="h-20 flex items-center gap-6 w-full px-4 border-t border-slate-900">
      <div className="relative h-12 w-12 bg-gray-300 rounded-full overflow-hidden">
        <Image src="/chef.jpg" fill alt="avatar" />
      </div>
      <p className="font-semibold text-white">Lawrence B.</p>
    </button>
  );
}

function XLink({
  activeClass,
  className,
  href,
  children,
}: {
  activeClass: string;
  className: string;
  href: string;
  children: string;
}) {
  const pathname = usePathname();
  console.log(pathname, href);
  return (
    <Link
      href={href}
      className={` ${className} ${href === pathname && activeClass}`}
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-screen" id="__next">
        <Frame
          className="bg-gray-50 h-full w-full "
          contentClassName="h-full flex flex-col"
        >
          <TopNav />
          <Stack direction="h" gap="flex-1">
            <MainSideNav />
            <main className="flex-1 ">{children}</main>
          </Stack>
        </Frame>
      </body>
    </html>
  );
}
