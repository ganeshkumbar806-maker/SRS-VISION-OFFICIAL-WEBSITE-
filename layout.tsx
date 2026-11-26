import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "SRS Vision | Your Vision. Our Creation.",
  description: "SRS Vision is a student-led digital services startup offering web development, UI/UX, logo and graphic design, video editing and social media management.",
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}