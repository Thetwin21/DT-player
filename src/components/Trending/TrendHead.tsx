import React from 'react'
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
const TrendHead = () => {
  return (
    <div className='flex justify-between px-2'>
        <h3 className='text-ash-100 font-semibold text-[24px]'>Trending</h3>
        <button className='flex items-center gap-1 text-skyb-500'>More <MdKeyboardDoubleArrowRight /> </button>
    </div>
  )
}

export default TrendHead