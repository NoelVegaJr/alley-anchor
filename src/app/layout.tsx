import "./globals.css";

export const metadata = {
  title: "Alley Anchor",
  description: "Powered by Acidfork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="h-screen w-full">{children}</body>
    </html>
  );
}
