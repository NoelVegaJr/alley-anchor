"use client";
import { garamond } from "@/components/fonts/fonts";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import FancyDivider from "@/components/LineBreak";
import MenuItem from "@/components/MenuItem";
import Anchor from "@/components/Anchor";
import Spacer from "@/components/Spacer";
import Frame from "@/components/Frame";
import Stack from "@/components/Stack";
import LineBreak from "@/components/LineBreak";

function Header() {
  return (
    <div
      className={`text-3xl md:text-5xl font-semibold  gap-4 tracking-widest text-center ${garamond.className}`}
    >
      <p>Menu</p>
    </div>
  );
}

const menuItems = [
  {
    id: 1,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
    price: 7.99,
  },
  {
    id: 2,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
    price: 7.99,
  },
  {
    id: 3,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
    price: 7.99,
  },
  {
    id: 4,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
    price: 7.99,
  },
  {
    id: 5,
    img: "blue",
    title: "Fiesta Bowl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis, minima repellendus animi voluptatum qui accusantium maiores temporibus officiis et sapiente excepturi aliquid nisi autem id distinctio ab, asperiores beatae. Fugit adipisci, consequatur blanditiis fuga fugiat asperiores cupiditate alias explicabo illo dolores temporibus enim cumque, qui sequi autem itaque! Ex, minima. Pariatur hic ullam",
    price: 7.99,
  },
];

function Hero() {
  return (
    <Stack gap="gap-4 absolute top-64">
      <header className="text-center text-5xl tracking-widest text-gray-100">
        <p>Menu</p>
      </header>

      <LineBreak>
        <Anchor color="orange" />
      </LineBreak>

      <p className="text-xl md:text-2xl text-center tracking-wide text-gray-100 relative">
        Try our authentic Mexican street food the next time you eat out
      </p>
      <Spacer margin="my-6" />
    </Stack>
  );
}

export default function Menu() {
  return (
    <>
      <Frame
        className="h-screen"
        img={{ src: "/street-tacos.jpg", alt: "Alley Anchor Logo" }}
      >
        <Frame className={`bg-black/70  h-full w-full  ${garamond.className}`}>
          <Frame className="max-w-2xl pt-20  flex flex-col items-center justify-center  h-full mx-auto ">
            <Hero />
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
                  Learn more
                </p>
                <div className="border-2 rounded-full w-12 h-12 grid place-content-center">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-6 h-6 text-white animate-pulse"
                  />
                </div>
              </Stack>
            </Link>
          </Frame>
        </Frame>
      </Frame>
      <Frame id="menu" contentClassName="h-fit">
        <section
          className={`bg-peach flex flex-col items-center w-full gap-4 ${garamond.className} py-20 px-4`}
        >
          <div className="flex flex-col max-w-6xl" id="menu-items">
            {menuItems.map((item, index) => {
              return (
                <MenuItem
                  key={item.id}
                  index={index}
                  price={item.price}
                  description={item.description}
                />
              );
            })}
          </div>
        </section>
      </Frame>
    </>
  );
}
// {/* <section className="h-screen flex flex-col">
//         {/* Landing Background */}

//         <div className="h-full w-full absolute top-0 left-0 z-10">
//           <Image
//             src="/street-tacos.jpg"
//             fill={true}
//             style={{ objectFit: "cover" }}
//             alt="Alley Anchor Logo"
//           />
//           <div className="absolute top-0 left-0 bg-black/70 h-full w-full" />
//           <div className="absolute bottom-0 left-0 h-2 sm:h-6 bg-gradient-to-t from-peach to-transparent w-full " />
//         </div>
//         {/* End of Landing Background */}

//         <div className="text-center h-full mx-auto justify-center px-4 items-center z-20 max-w-5xl w-full text-gray-200">
//           <Header />
//           <Spacer margin="mb-10" />
//           <FancyDivider>
//             <Anchor color={"orange"} />
//           </FancyDivider>
//           <p className={`${garamond.className} uppercase text-2xl mb-24`}>
//             Mouth watering decesions
//           </p>

//           <Link
//             to="menu-items"
//             spy={true}
//             smooth={true}
//             offset={-160}
//             duration={500}
//             className="border-2 animate-pulse border-white rounded-full  w-16 h-16 grid place-content-center hover:cursor-pointer"
//           >
//             <FontAwesomeIcon
//               icon={faChevronDown}
//               className="w-8 h-8 text-white animate-pulse"
//             />
//           </Link>
//         </div>
//       </section>*/}
