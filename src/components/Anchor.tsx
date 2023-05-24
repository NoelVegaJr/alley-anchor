import Image from "next/image";

export default function Anchor({
  color,
}: {
  color: "red" | "black" | "orange";
}) {
  const anchors = {
    red: "anchor-red.png",
    black: "anchor-black.png",
    orange: "anchor-orange.png",
  };
  return (
    <div className="h-16 w-16 md:h-24 md:w-24 relative">
      <Image src={`/${anchors[color]}`} fill={true} alt="Alley Anchor Logo" />
    </div>
  );
}
