import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu =()=>{
    sideMenuRef.current.style.transform = 'translate(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })

  },[])

  return (
    <div>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <img src={assets.header_bg_color} alt="" className='w-full'/>
      </div>
    <nav className={`w-full fixed flex items-center justify-between z-50 px-5 lg:px-8 xl:px-[8%] py-4 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="home">
            <img src={assets.logo} alt="logo" className='w-28 cursor-pointer  ' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50"}`}>
            <li><a href="home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        <div>
          <a href="#contact" className='hidden md:flex gap-2 lg:flex items-center lg:gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <img src={assets.arrow_icon} alt="" className='w-3' /></a>
        </div>

        <button className='block md:hidden ml-3'onClick={openMenu}>
          <img src={assets.menu_black} alt="" className='w-6 ' />
        </button>

    </nav>

        <ul className='md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 -right-64 h-screen z-50 bg-rose-50 transition duration-500'>

          <div className='absolute right-6 top-6'onClick={closeMenu}>
            <img src={assets.close_black} alt="" className='w-5 cursor-pointer'/>
          </div>

            <li><a href="home"onClick={closeMenu}>Home</a></li>
            <li><a href="#about"onClick={closeMenu}>About me</a></li>
            <li><a href="#projects"onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact"onClick={closeMenu}>Contact me</a></li>
        </ul>

    </div>
  )
}

export default Navbar