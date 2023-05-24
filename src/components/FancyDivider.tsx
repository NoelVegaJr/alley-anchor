function Line() {
  return <div className="border-2 w-full rounded-md border-gray-100" />;
}

export default function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-center max-w-2xl">
      <Line />
      <div className="mx-8">{children}</div>
      <Line />
    </div>
  );
}
