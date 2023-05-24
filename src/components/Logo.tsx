import Image from "next/image";
export function Logo() {
  return (
    <div className="h-32 w-32 relative">
      <Image src="/logo.png" fill={true} alt="Alley Anchor Logo" />
    </div>
  );
}
