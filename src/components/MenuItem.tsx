export default function MenuItem({
  description,
  index,
  price,
}: {
  description: string;
  index: number;
  price: number;
}) {
  const IS_EVEN = index % 2 == 0;
  return (
    <article>
      <div className={` ${!IS_EVEN && "ml-auto -mt-32"} w-1/2`}>
        <div
          className={`mb-6 h-52 w-52 ${
            !IS_EVEN && "ml-auto"
          } bg-blue-500 grid place-content-center font-bold`}
        >
          Image Here
        </div>
        <div className="flex gap-4 items-center">
          <div
            className={`
             uppercase font-extrabold text-2xl text-[#0f0303]`}
          >
            Fiesta Bowl
          </div>
          <div className="font-extrabold text-darkPeach text-3xl">
            $ {price}
          </div>
        </div>
        <div className="text-[#0F0303] font-semibold text-lg">
          {description}
        </div>
      </div>
    </article>
  );
}
