import React from 'react'
import List from '../list/List'
import ListItem from '../list/ListItem'
import { HiBars3 } from "react-icons/hi2";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import Paragraph from '../paragraph/Paragraph';

const Menubar = () => {
  return (
    <section className='bg-black text-white pb-2'>
      <div className='container'>
        <div className="grid gap-7 grid-cols-12 items-center">
          <div className="col-span-2 flex justify-between bg-primary py-2 px-4 gap-2 cursor-pointer rounded-md items-center" >
            <FaBars/>
            <Paragraph text="ALL CATEGORY"/>
            <LiaAngleDownSolid/>
          </div>
          <List className="col-span-10 flex justify-between items-center cursor-pointer" >
            <ListItem className="hover:text-primary" text="Home"/>
            <ListItem className="hover:text-primary" text="Home"/>
            <ListItem className="hover:text-primary" text="Home"/>
            <ListItem className="hover:text-primary" text="Home"/>
            <ListItem className="hover:text-primary" text="Home"/>
            <ListItem className="hover:text-primary" text="Home"/>
          </List>
        </div>
      </div>
    </section>
  )
}

export default Menubar