import React from 'react'
import { twMerge } from 'tailwind-merge'

const List = ({children,className}) => {
  return (
    <ul className={twMerge("",className)}>{children}</ul>
  )
}

export default List