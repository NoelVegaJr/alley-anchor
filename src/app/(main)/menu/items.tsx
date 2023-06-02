import Frame from "@/components/Frame";
import MenuItem from "@/components/MenuItem";

export default function Items({
  items,
}: {
  items: {
    id: string;
    img: string;
    name: string;
    price: string;
    description: string;
    visible: boolean;
  }[];
}) {
  return (
    <Frame className="max-w-5xl w-full mx-auto">
      {items.map((item, index) => {
        return (
          <MenuItem
            key={item.id}
            img={item.img}
            name={item.name}
            index={index}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </Frame>
  );
}
