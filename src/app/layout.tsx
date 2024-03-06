import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "normalize.css"
import "animate.css"
import "./globals.css";
// import ThemeProvider from "./utils/_ThemeProvider";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio stworzone jako praca z informatyki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="motion-safe:focus-within:scroll-smooth scroll-pt-16">
      <body className={karla.className}>
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
