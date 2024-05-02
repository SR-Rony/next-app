import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar/Navbar";
import Menubar from "@/components/navbar/Menubar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MERN Ecommerce",
  description: "My first Ecommerce project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent/>
        <Menubar/>
        {children}
      </body>
    </html>
  );
}
