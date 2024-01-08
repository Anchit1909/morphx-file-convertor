import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "MorphX - Free Unlimited File Converter",
  description: `Unleash your creativity with MorphX – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: "Anchit Sinha",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.variable, ibmPlexMono.variable, "bg-[#05020d]")}
      >
        <Header />
        <Toaster />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
