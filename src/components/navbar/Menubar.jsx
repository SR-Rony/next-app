import React from 'react'
import List from '../list/List'
import ListItem from '../list/ListItem'
import { CiDiscount1 } from "react-icons/ci";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import Paragraph from '../paragraph/Paragraph';

const Menubar = () => {
  return (
    <section className='bg-black text-white pb-2 relative'>
      <div className='container'>
        <div className='absolute bottom-4 cursor-pointer left-5 text-white sm:hidden'>
          <FaBars />
        </div>

        <div className="hidden  sm:grid gap-7 grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-2 flex justify-between bg-primary py-2 px-4 gap-2 cursor-pointer rounded-md items-center" >
            <FaBars/>
            <Paragraph text="ALL CATEGORY"/>
            <LiaAngleDownSolid/>
          </div>
          <List className="hidden md:flex col-span-10 justify-between items-center cursor-pointer" >
            <ListItem className="hover:text-primary" text="HOME"/>
            <ListItem className="hover:text-primary" text="SPECIAL"/>
            <ListItem className="hover:text-primary" text="SITE MAP"/>
            <ListItem className="hover:text-primary" text="RETURN"/>
            <ListItem className="hover:text-primary" text="BRAND"/>
            <ListItem className="hover:text-primary" text="BLOG"/>
            <ListItem className="hover:text-primary" text="CONTACT"/>
            <div className='flex items-center gap-1 text-secoundary cursor-pointer'>
              <CiDiscount1 className='text-2xl'/>
              <ListItem text="Special Offer!"/>
            </div>
          </List>
        </div>
      </div>
    </section>
  )
}

export default Menubar