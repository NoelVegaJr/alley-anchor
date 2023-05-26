export default function Product({
  product,
}: {
  product: { id: string; name: string; price: string; description: string };
}) {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
    </div>
  );
}
