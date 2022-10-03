import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

export default function Skill({}: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
        <motion.img
            initial={{
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            src='/images/python.png'
            className='object-cover w-20 h-20 p-3 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale'
        />
        <div className='absolute z-0 w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}