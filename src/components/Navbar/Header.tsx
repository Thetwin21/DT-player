import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-1 items-center justify-items-center'>
        <div className='rounded-[50%] h-[30px] w-[30px] border-[1px] '></div>
        <div className='space-y-0'>
            <h2 className='text-ash-50 font-bold text-lg'>DT <span className=''>Play</span></h2>
            <p className='text-xs text-ash-200'>free music downloads</p>
        </div>
        <span>
        </span>
    </div>
  )
}

export default Header