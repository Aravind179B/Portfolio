import React from 'react'
import { assets, infoList, toolsData } from '../assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Introducing</h4>
        <h2 className='text-center text-5xl'>About Me</h2>

        <div className='flex flex-col  md:flex-row items-center gap-20 md:gap-10 my-16'>
            <div className='w-64 sm:w-80 max-w-none rounded-full'>
                <img src={assets.user_image} alt="" className='rounded-3xl'/>
            </div>
            <div className='flex-1'>
              <p className='mb-10 max-w-2xl'>Passionate Front-end developer about crafting visually stunning and user-friendly web interfaces. I specialize in turning ideas into responsive, interactive, and pixel-perfect designs. With expertise in modern frameworks and a focus on performance, I bring creativity and functionality together.</p>
              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                  <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blend-darken hover:-translate-y-1 duration-500 ' key={index}>
                    <img src={icon} alt="" className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                  </li>
                ))}
              </ul>
              <h4 className='my-6 text-gray-700'>Tools I use</h4>
              <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                  <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                    <img src={tool} alt="" className='w-5 sm:w-7'/>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </div>
  )
}

export default About