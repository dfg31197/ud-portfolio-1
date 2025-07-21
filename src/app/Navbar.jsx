"use client"

import React from 'react'


const Navbar = () => {
    const [isNavToggled, toggleNav] = React.useState(false);

    return  <nav className="flex sticky top-0 bg-[#232323] z-10 justify-between items-center gap-6 p-6 ">
        <h5 className="text-primary text-xl">JD</h5>
        <ul className="hidden sm:flex gap-5 text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div  className="flex cursor-pointer">
          <div onClick={() => toggleNav(true)} className="bg-primary sm:hidden px-2 rounded flex flex-col gap-1 justify-center">
            <div className="bg-white h-0.5 w-6 rounded"></div>
            <div className="bg-white h-0.5 w-3.5 mt-0.5 rounded"></div>
          </div>
          <a
            href="#contact"
            className="text-white border-primary border-1 p-1 pt-1.5 px-1.5 rounded ml-2"
          >
            BOOK NOW
          </a>
        </div>
        {isNavToggled && <div onClick={() => toggleNav(false)} className="w-[100%] h-[100%] bg-primary text-white fixed top-0 left-0 right-0 bottom-0">
          <ul className="*:text-center">
            <li className="text-right text-3xl p-2">x</li>
                    <li>
            <a className="p-4 block w-[100%]" href="#">Home</a>
          </li>
          <li>
            <a className="p-4 block w-[100%]" href="#about">About</a>
          </li>
          <li>
            <a className="p-4 block w-[100%]" href="#services">Services</a>
          </li>
          <li>
            <a className="p-4 block w-[100%]" href="#contact">Contact</a>
          </li>
          </ul>
          </div>}
      </nav>
}

export default Navbar;