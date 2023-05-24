import Image from "next/image";
export function Logo({ className }: { className: string }) {
  return (
    <div className={`${className} relative`}>
      <Image src="/logo.png" fill={true} alt="Alley Anchor Logo" />
    </div>
  );
}
