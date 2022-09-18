import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center p-5'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            <SocialIcon 
                url='https://twitter.com/whizkidefos'
                fgColor='grey'
                bgColor='transparent'
                target='_blank'
                className='border rounded-full mr-2'
            />
            <SocialIcon 
                url='https://instagram.com/whizkidefos'
                fgColor='grey'
                bgColor='transparent'
                target='_blank'
                className='border rounded-full mr-2'
            />
            <SocialIcon 
                url='https://github.com/whizkidefos'
                fgColor='grey'
                bgColor='transparent'
                target='_blank'
                className='border rounded-full mr-2'
            />
        </motion.div>

        <motion.aside
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
                network='email'
                fgColor='grey'
                bgColor='transparent'
                className='border rounded-full cursor-pointer mr-1'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.aside>
    </header>
  )
}