import "./globals.css";

export const metadata = {
  title: "Auto Sniper",
  description:
    "Find, book, or rent a car — quickly and easily!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>{children}</body>
    </html>
  );
}
