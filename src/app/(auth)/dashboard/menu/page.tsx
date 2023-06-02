import Dash from "./menudash";
import prisma from "@/utils/db";

export default async function Page() {
  const menuItems = await prisma.menuItem.findMany();
  return <Dash products={menuItems} />;
}
