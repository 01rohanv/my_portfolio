"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname, "pathnameuddududu");
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        {children}
        {/* <AnimatePresence mode="wait"> */}
        {/* <main key={pathname}>{children}</main> */}
        {/* </AnimatePresence> */}
        <Footer />
      </body>
    </html>
  );
}
