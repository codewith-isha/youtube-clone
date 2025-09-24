import React from 'react'
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className=' w-[12%] ml-4'>
      <div className='flex justify-between w-[50%] my-2'>
        <IoMdHome size={'24px'}/>
         <p>Home</p>
      </div>

       <div className='flex justify-between my-2 w-[50%]'>
        <IoMdHome size={'24px'}/>
         <p>Short</p>
      </div>

       <div className='flex justify-between  my-2 w-[50%]'>
        <IoMdHome size={'24px'}/>
         <p>Subscription</p>
      </div>
    </div>
  )
}

export default Sidebar