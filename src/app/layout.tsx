import Navbar from "@/components/Navbar";
import "./globals.css";
 
export const metadata = {
  title: "GloreBD",
  description: "Elegant clothing store built with Next.js",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
      </body>
    </html>
  );
}
 
 