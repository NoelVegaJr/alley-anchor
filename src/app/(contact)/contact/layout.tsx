import "@/app/globals.css";
import Frame from "@/components/Frame";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Alley Anchor",
  description: "Powered by Acidfork",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Frame
        className="h-screen w-full"
        contentClassName="h-screen w-full flex flex-col"
      >
        <NavBar />
        <main className="flex-1">{children}</main>
      </Frame>
    </>
  );
}
