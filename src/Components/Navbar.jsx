import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-zinc-400 flex justify-between py-4'>
    <div className='logo'>
        <span className='text-white text-2xl font-semibold mx-8'>i-Task</span>
    </div>
    <ul className='flex gap-10 mx-9 text-xl font-semibold text-white'>
        <li className='cursor-pointer hover:font-bold'>Home</li>
        <li className='cursor-pointer hover:font-bold'>Your Task</li>
    </ul>
   </nav>
    
  )
}

export default Navbar
