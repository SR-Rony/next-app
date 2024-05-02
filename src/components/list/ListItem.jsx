import React from 'react'
import { twMerge } from 'tailwind-merge'

const ListItem = ({text,className}) => {
  return (
    <li className={twMerge("",className)}>{text}</li>
  )
}

export default ListItem