import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import { MainBackground } from "@/components/MainBackground";
import { NavigationMenu } from "@/components/NavigationMenu";


const raleway = Raleway({ subsets: ["latin"], display: "swap", variable: '--font-raleway' });
const openSans = Open_Sans({ subsets: ["latin"], display: "swap", variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${openSans.variable} bg-black h-dvh py-6 px-6 relative sm:py-10 sm:px-10`}>
        <MainBackground />
        <div className="grid grid-rows-[5rem_1fr_7rem] gap-4 p-4 h-full transition-all duration-300 rounded-3xl overflow-hidden bg-black/60 md:grid-cols-[7rem_1fr] md:grid-rows-[5rem_1fr]">
          <div className="text-white md:col-span-2">
            Welcome message and social media links
          </div>
          <main className="md:col-start-2 row-start-2 rounded-xl bg-darkBlue">
            {children}
          </main>
          <header className="md:col-start-1 md:row-start-2">
            <NavigationMenu />
          </header>
        </div>
      </body>
    </html>
  );
}
