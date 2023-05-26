"use client";

import Stack from "@/components/Stack";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductsList({
  products,
  onClick,
  isActive,
}: {
  isActive: {
    id: string;
    img: string;
    name: string;
    price: string;
    description: string;
    visible: boolean;
  };
  onClick: (product: {
    id: string;
    img: string;
    name: string;
    price: string;
    description: string;
    visible: boolean;
  }) => void;
  products: {
    id: string;
    img: string;
    name: string;
    price: string;
    description: string;
    visible: boolean;
  }[];
}) {
  return (
    <div className="w-72 h-full border-r border-slate-400 flex flex-col">
      <div className="flex items-center justify-between gap-6 p-4 bg-gray-300 border-b border-b-gray-400 font-semibold">
        <div>Items</div>
        <button>
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-green-700" />
        </button>
      </div>

      <Stack className="bg-gray-300 h-full w-52  flex-1">
        {products?.map((product) => {
          return (
            <button
              onClick={() => {
                console.log(product);
                onClick(product);
              }}
              key={product.id}
              className="w-full  hover:bg-slate-900/10 flex justify-between items-center px-4 py-4"
            >
              <div className="flex items-center gap-6">
                <div className=" w-12 h-12  relative  rounded overflow-hidden ">
                  <Image
                    src={`/${product.img}`}
                    style={{ objectFit: "cover" }}
                    fill
                    alt="Menu Item"
                  />
                </div>
                <p className="text-lg">{product.name}</p>
              </div>
              {isActive.id === product.id && (
                <FontAwesomeIcon
                  icon={faEye}
                  className="h-4 w-4 text-slate-900/40"
                />
              )}
            </button>
          );
        })}
      </Stack>
    </div>
  );
}
