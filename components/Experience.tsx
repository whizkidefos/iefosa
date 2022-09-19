import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

        <div className=''>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>

    </motion.div>
  )
}