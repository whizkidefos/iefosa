import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 z-50 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center'>
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
                className='mr-2 border rounded-full'
            />
            <SocialIcon 
                url='https://instagram.com/whizkidefos'
                fgColor='grey'
                bgColor='transparent'
                target='_blank'
                className='mr-2 border rounded-full'
            />
            <SocialIcon 
                url='https://github.com/whizkidefos'
                fgColor='grey'
                bgColor='transparent'
                target='_blank'
                className='mr-2 border rounded-full'
            />
        </motion.div>

        <Link href='#contact'>
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
                        className='mr-2 border rounded-full cursor-pointer'
                    />
                    <p className='hidden text-sm text-gray-400 uppercase md:inline-flex'>Get In Touch</p>
            </motion.aside>
        </Link>
    </header>
  )
}