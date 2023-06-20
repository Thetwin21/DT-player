import React from 'react'
import Header from './Header'
import Search from './Search'
import GetApp from './GetApp'

const Navbar = () => {
  return (
    <div className='flex gap-x-2 md:gap-x-5 justify-between lg:gap-x-16 py-4 px-8 border-b-[1px] border-b-ash-200 '>
        <Header />
        <Search />
        <GetApp />
    </div>
  )
}

export default Navbar