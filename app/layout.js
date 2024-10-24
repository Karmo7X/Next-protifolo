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
import logoace from '../public/assets/imgs/acelogo.png'
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
  title: "ACE SOFT COMPANY | شركة إيس سوفت",
  
  description: "ACE SOFT COMPANY is a leading software development firm specializing in innovative solutions for businesses. Our expert team delivers high-quality software, web applications, and mobile apps tailored to meet client needs. We focus on delivering exceptional customer service, robust technology solutions, and continuous support. | شركة إيس سوفت هي شركة رائدة في تطوير البرمجيات متخصصة في الحلول المبتكرة للأعمال. يقدم فريقنا الخبير برامج عالية الجودة وتطبيقات ويب وتطبيقات موبايل مصممة لتلبية احتياجات العملاء. نحن نركز على تقديم خدمة عملاء استثنائية، وحلول تكنولوجية قوية، ودعم مستمر.",

  keywords: "software development, web applications, mobile apps, ACE SOFT COMPANY, IT solutions, technology, programming, custom software, SaaS, cloud computing, enterprise solutions, UX/UI design, digital transformation | تطوير البرمجيات، تطبيقات الويب، تطبيقات الموبايل، شركة إيس سوفت، حلول تكنولوجيا المعلومات، تكنولوجيا، برمجة، برامج مخصصة، SaaS، حوسبة سحابية، حلول المؤسسات، تصميم UX/UI، التحول الرقمي",
  
  author: "ACE SOFT COMPANY | شركة إيس سوفت",

  viewport: "width=device-width, initial-scale=1.0",

  robots: "index, follow", // Directives for search engines on how to index the page

  og: {
    title: "ACE SOFT COMPANY | شركة إيس سوفت",
    description: "Discover ACE SOFT COMPANY, a top software development firm providing tailored solutions to enhance your business. | اكتشف شركة إيس سوفت، إحدى أفضل شركات تطوير البرمجيات التي تقدم حلولًا مصممة خصيصًا لتعزيز عملك.",
    url: "https://www.acesoftcompany.com", // Your website URL
    image: "../public/assets/imgs/acelogo.png", // Image for social sharing
    type: "website",
  },

  // twitter: {
  //   card: "summary_large_image", // Twitter card type
  //   title: "ACE SOFT COMPANY | شركة إيس سوفت",
  //   description: "Innovative software development solutions for your business needs. | حلول تطوير البرمجيات المبتكرة لاحتياجات عملك.",
  //   image: "../public/assets/imgs/acelogo.png", // Image for Twitter sharing
  // },

  icons: {
    icon: "../public/assets/imgs/acelogo.png", // Path to your favicon file
  },
};


const links = [
  {
    title: "الرئيسية", // home
    icon: (
      <>
        <IoMdHome className="h-full w-full text-foreground dark:text-neutral-300" />
      </>
    ),
    href: "/",
  },

  {
    title: "المشاريع", // projects
    icon: (
      <>
        <FaProjectDiagram className="h-full w-full text-foreground dark:text-neutral-300" />
      </>
    ),
    href: "/Projects",
  },
  
  {
    title: "من نحن", // about
    icon: (
      <>
        <PiExclamationMarkFill className="h-full w-full text-foreground dark:text-neutral-300" />
      </>
    ),
    href: "/About",
  },

  {
    title: "اتصل بنا", // contact us
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
