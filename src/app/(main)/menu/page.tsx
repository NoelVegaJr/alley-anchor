import { garamond } from "@/components/fonts/fonts";
import Anchor from "@/components/Anchor";
import Spacer from "@/components/Spacer";
import Frame from "@/components/Frame";
import Stack from "@/components/Stack";
import LineBreak from "@/components/LineBreak";
import prisma from "@/utils/db";
import Items from "./items";
import SmoothScroll from "./SmootScroll";
import Image from "next/image";

function Hero() {
  return (
    <Stack gap="gap-4 absolute top-44 sm:top-80 px-4">
      <header className="text-center text-5xl tracking-widest text-gray-100">
        <p>Menu</p>
      </header>

      <LineBreak>
        <Anchor color="orange" />
      </LineBreak>

      <p className="text-xl md:text-3xl text-center tracking-wide text-gray-100 relative">
        Try our authentic Mexican street food the next time you eat out
      </p>
      <Spacer margin="my-6" />
    </Stack>
  );
}

export default async function Menu() {
  const menuItems = await prisma.menuItem.findMany();
  return (
    <>
      <Frame
        img={{
          src: "/food/birria-tacos.png",
          alt: "Alley Anchor Logo",
          style: { objectFit: "cover" },
        }}
        className="h-screen"
        contentClassName={` bg-black/70 h-full flex flex-col items-center justify-center ${garamond.className}`}
      >
        <Hero />
        <SmoothScroll />
      </Frame>

      <section
        className={`bg-peach relative ${garamond.className} py-20 px-4`}
        id="menu"
      >
        <Image
          src="/anchors/anchor-red.png"
          alt="red anchor"
          fill
          className="opacity-10"
          style={{ objectFit: "cover" }}
        />
        <p
          className={`text-center py-10 text-4xl font-bold ${garamond.className}`}
        >
          Our Menu
        </p>
        <div className="mb-24">
          <Items items={menuItems} />
        </div>
        <div className=" mx-auto">
          <p
            className={`text-center mb-6 text-4xl font-semibold ${garamond.className}`}
          >
            Sides and Drinks
          </p>
          <ul className="w-52 mx-auto text-3xl">
            <li className="flex justify-between">
              <p>Guacamole</p>
              <p>$1</p>
            </li>
            <li className="flex justify-between">
              <p>Sour cream</p>
              <p>$1</p>
            </li>
            <li className="flex justify-between">
              <p>Rice and beans</p>
              <p>$4</p>
            </li>
            <li className="flex justify-between">
              <p>Soda / Water</p>
              <p>$1</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
