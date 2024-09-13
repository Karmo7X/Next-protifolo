import localFont from "next/font/local";
import "./globals.css";
import { FloatingDock } from "./Components/UI/floating-dock";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { PiExclamationMarkFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ACE SOFT COMPANY",
  description: "Generated by create next app",
  icons: {
    icon: "/assets/imgs/acelogo.png",  // Path to your favicon file
  },
};

const links = [
  {
    title: "home",
    icon: (
      <>
      <IoMdHome className="h-full w-full text-foreground dark:text-neutral-300" />
      </>
      
    ),
    href: "/",
  },

  {
    title: "projects",
    icon: (
      <>
       <FaProjectDiagram className="h-full w-full text-foreground dark:text-neutral-300" />
      </>
    ),
    href: "/Projects",
  },
  // {
  //   title: "TEAM",
  //   icon: (
  //     <>
  //     <RiTeamFill className="h-full w-full text-foreground dark:text-neutral-300" />
  //     </>
  //   ),
  //   href: "#",
  // },

  {
    title: "about",
    icon: (
      <>
        <PiExclamationMarkFill className="h-full w-full text-foreground dark:text-neutral-300" />
      </>
    ),
    href: "/About",
  },
  {
    title: "contact us",
    icon: (
      <>
        <GrContact className="h-full w-full text-foreground dark:text-neutral-300" />

      </>
    ),
    href: "/Contactus",
  },
  
  
];
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      {/* <FloatingDock items={links} mobileClassName="flex"/> */}
      <Navbar links={links}/>
        {children}
        <Footer links={links}/>
      </body>
    </html>
  );
}
