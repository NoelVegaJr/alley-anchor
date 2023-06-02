import Image from "next/image";

export default function Anchor({
  color,
}: {
  color: "red" | "black" | "orange";
}) {
  return (
    <div className="h-16 w-16 md:h-24 md:w-24 relative">
      <Image
        src={`/anchors/anchor-${color}.png`}
        fill={true}
        alt="Alley Anchor Logo"
      />
    </div>
  );
}
