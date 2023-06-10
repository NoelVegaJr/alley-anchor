import NavBar from "@/components/NavBar";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alley Anchor",
  description: "Powered by Acidfork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
