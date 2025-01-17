import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-15'>
        <div className='text-center'>
            <img src={assets.logo} alt="" className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <img src={assets.mail_icon} alt="" className='w-6' />aravindb0626@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>@ 2025 Aravind. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https">GitHub</a></li>
                <li><a target='_blank' href="https">LinkedIn</a></li>
                <li><a target='_blank' href="https">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer