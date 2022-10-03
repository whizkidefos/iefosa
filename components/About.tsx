import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    
    className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>About</h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            src='/images/whizkidefos.png'
            className='flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />

        <article className='px-0 spacee-y-10 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here's a {''}
                <span className='underline decoration-[#74a69a]/50'> Little</span>{' '}
                Background
            </h4>
            <p className='text-md'>
                A web artisan and trumpeter. Crafts beautiful user interfaces (UI) and user experiences (UX) for human people. Also loves the excitement of building a decentralised web, implementing anonymous wallet authentication and learning all about web3 and the metaverse.
            </p>
        </article>
    </motion.div>
  )
}