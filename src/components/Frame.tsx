import Image from "next/image";
export default function Frame({
  className,
  contentClassName,
  id,
  children,
  img,
}: {
  className?: string;
  contentClassName?: string;
  id?: string;
  img?: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      {img ? (
        <>
          {img && <Image src={img.src} fill alt={img?.alt} />}

          <div className="absolute top-0 left-0 h-full w-full ">
            <div
              id={id}
              className={`relative h-full w-full ${contentClassName}`}
            >
              {children}
            </div>
          </div>
        </>
      ) : (
        <>
          <div id={id} className={`relative h-full w-full ${contentClassName}`}>
            {children}
          </div>
        </>
      )}
    </div>
  );
}
