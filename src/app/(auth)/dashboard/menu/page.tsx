import Dash from "./dash";
import prisma from "@/utils/db";

export default async function Page() {
  const menuItems = await prisma.menuItem.findMany();
  console.log(menuItems);
  return (
    <div className="flex h-full ">
      <Dash products={menuItems} />
    </div>
  );
}
