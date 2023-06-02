import prisma from "@/utils/db";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = await prisma.menuItem.findMany();

  return {};
}
