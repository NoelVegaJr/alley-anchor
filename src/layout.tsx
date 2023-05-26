import Image from "next/image";
import ProductsList from "./app/(auth)/dashboard/menu/productList";
import prisma from "@/utils/db";
export default async function MenuPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = await prisma.menuItem.findMany();
  console.log(menuItems);
  return (
    <div className="border-r-2  border-r-gray-400 w-72 h-full">
      <ProductsList products={menuItems} />
      <div>{children}</div>
      {/* <button>Add</button> */}
    </div>
  );
}
