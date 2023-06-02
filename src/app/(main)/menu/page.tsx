import { garamond } from "@/components/fonts/fonts";
import Anchor from "@/components/Anchor";
import Spacer from "@/components/Spacer";
import Frame from "@/components/Frame";
import Stack from "@/components/Stack";
import LineBreak from "@/components/LineBreak";
import prisma from "@/utils/db";
import Items from "./items";
import SmoothScroll from "./SmootScroll";

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
          src: "/street-tacos.jpg",
          alt: "Alley Anchor Logo",
          style: { objectFit: "cover" },
        }}
        className="h-screen"
        contentClassName={` bg-black/70 h-full flex flex-col items-center justify-center ${garamond.className}`}
      >
        <Hero />
        <SmoothScroll />
      </Frame>
      <Frame
        id="menu"
        contentClassName={`flex flex-col  gap-4 py-20 px-4 bg-peach ${garamond.className}`}
      >
        <div className={`text-center text-4xl font-bold ${garamond.className}`}>
          Our Menu
        </div>
        <Items items={menuItems} />
      </Frame>
    </>
  );
}
