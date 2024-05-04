
"use client";
import { Button, Navbar, Input } from "keep-react";
import Paragraph from "../paragraph/Paragraph";
import { FaRegUser,FaRegHeart,FaShopify   } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
export const NavbarComponent = () => {
  return (
    <nav className="bg-black text-white" fluid={true}>
      <div className="container grid grid-cols-12 items-center py-4">
        <div className="col-span-6 md:col-span-3">
            <Paragraph text="My Shops"/>
        </div>
        <div className="col-span-12 py-4 md:py-0 order-3 md:order-2 md:col-span-6">
          <div className="relative">
            <Input id="name" className="focus-visible:ring-offset-0 ring-2 ring-secoundary  focus-visible:ring-metal-0 rounded-full px-4 " placeholder="Product Search" type="text" />
            <div className="absolute bottom-1/2 translate-y-1/2 cursor-pointer right-0 text-2xl bg-secoundary h-full w-14 flex justify-center items-center rounded-e-full">
              <IoSearch/>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 order-2 md:order-3 flex items-center gap-2 md:gap-5 justify-end">
          <FaRegCircleUser className="cursor-pointer text-2xl hover:text-primary"/>
          <FaRegHeart className="cursor-pointer text-xl hover:text-primary" />
          <div className="flex gap-1 items-center cursor-pointer text-secoundary">
            <FaShopify  className=" text-xl"/>
            <Paragraph text="Cart"/>
          </div>
        </div>
      </div>
    </nav>
  );
}
