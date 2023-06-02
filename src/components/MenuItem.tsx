import Image from "next/image";

export default function MenuItem({
  img,
  name,
  description,
  index,
  price,
}: {
  img: string;
  name: string;
  description: string;
  index: number;
  price: string;
}) {
  const IS_EVEN = index % 2 == 0;
  return (
    <article>
      <div className={` ${!IS_EVEN && "md:ml-auto md:-mt-32"} md:w-1/2`}>
        <div
          className={`mb-6 mx-auto h-52 w-52 ${
            !IS_EVEN && "md:ml-auto"
          }   grid place-content-center font-bold relative overflow-hidden rounded`}
        >
          <Image
            src={`/${img}`}
            alt="food item"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`flex gap-4 items-center text-right ${
            !IS_EVEN && "md:justify-end"
          }`}
        >
          <div
            className={`
             uppercase font-extrabold text-2xl text-[#0f0303]`}
          >
            {name}
          </div>
          <div className="font-extrabold text-darkPeach text-3xl">
            $ {price}
          </div>
        </div>
        <div
          className={`${
            !IS_EVEN && "md:text-right"
          } text-[#0F0303] font-semibold text-lg`}
        >
          {description}
        </div>
      </div>
    </article>
  );
}
