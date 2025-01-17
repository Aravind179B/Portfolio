import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <img src={assets.profile_img} alt="" className='w-36 rounded-full'/>
      </div>
      <h3 className='flex items-end text-xl md:text-2xl mb-3'>Hi I'm Aravind!</h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>Frontend Web Developer</h1>
      <p className='max-w-2xl mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nisi nobis aliquam esse consectetur! Consequatur, sapiente illo quia iste? Odit, ipsam sapiente.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me <img src={assets.right_arrow_white} alt="" className='w-4'/></a>
        <a href="/resume.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'>My Resume <img src={assets.download_icon} alt="" className='w-4' /></a>
      </div>

    </div>
  )
}

export default Hero