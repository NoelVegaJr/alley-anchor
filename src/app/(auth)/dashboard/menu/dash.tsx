"use client";
import { useEffect, useState } from "react";
import ProductsList from "./productList";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Portal({ children }: { children: React.ReactNode }) {
  const [doc, setDoc] = useState(false);

  useEffect(() => {
    setDoc(true);
  }, []);
  return (
    <>
      {doc ? createPortal(children, document.getElementById("__next")!) : null}
    </>
  );
}

function Modal({
  children,
  isOpen,
  close,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <Portal>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/20 "
          onClick={(e) => {
            close();
          }}
        >
          <div className="relative h-full w-full">{children}</div>
        </div>
      )}
      ;
    </Portal>
  );
}

export default function Dash({
  products,
}: {
  products: {
    id: string;
    img: string;
    name: string;
    price: string;
    description: string;
    visible: boolean;
  }[];
}) {
  console.log(products);
  const [activeItem, setActiveItem] = useState(products[0]);
  const [editing, setEditing] = useState(false);
  return (
    <div className="h-full w-full flex">
      <Modal isOpen={editing} close={() => setEditing(false)}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-96 max-w-3xl w-full rounded"
        >
          <div className="py-2 p-4 text-xl border-b flex justify-between items-center ">
            <p>Edit menu item</p>
            <button onClick={() => setEditing(false)}>
              <FontAwesomeIcon icon={faX} className="w-4 h-4 text-red-500" />
            </button>
          </div>
          <div className="flex-1"></div>
          <div
            className="p-4 flex justify-end gap-4
          "
          >
            <button
              onClick={() => setEditing(false)}
              className="bg-red-500 py-2 px-8 text-white rounded font-semibold"
            >
              Cancel
            </button>

            <button className="bg-blue-500 py-2 px-8 text-white rounded font-semibold">
              Submit
            </button>
          </div>
        </div>
      </Modal>
      <ProductsList
        isActive={activeItem}
        onClick={(product) => setActiveItem(product)}
        products={products}
      />

      <div className="border-2 flex-1 p-20">
        <div className="flex flex-col gap-2 text-2xl">
          <div className="relative h-52 w-52 rounded overflow-hidden">
            <Image
              src={`/${activeItem.img}`}
              style={{ objectFit: "cover" }}
              alt="tacos"
              fill
            />
          </div>
          <p className="">{activeItem?.name}</p>
          <p className="">{activeItem?.price}</p>
          <p className="">{activeItem?.description}</p>
          <p className=" mb-4">On Menu: {activeItem?.visible ? "Yes" : "No"}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setEditing(true)}
              className="bg-gray-500 py-1 px-4 rounded text-white text-lg"
            >
              Edit
            </button>

            <button className="bg-red-600 py-1 px-4 rounded text-white text-lg">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
