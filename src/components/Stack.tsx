export default function Stack({
  direction = "v",
  children,
  gap,
  className,
  center,
}: {
  direction?: "v" | "h";
  children: React.ReactNode[] | React.ReactNode;
  gap?: string;
  className?: string;
  center?: boolean;
}) {
  let flex = "flex ";
  flex += direction === "v" ? "flex-col " : " ";
  flex += center ? "justify-center items-center " : " ";
  return <div className={`w-full ${flex} ${gap} ${className}`}>{children}</div>;
}
