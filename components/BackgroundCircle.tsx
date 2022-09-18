import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      scale: [1, 2, 2, 3, 1],
      borderRadius: ['20%', '20%', '50%', '80%', '20%']
    }}
    transition={{
      duration: 3.0,
    }}
    className='relative flex items-center justify-center'>
        <div className='absolute border rounded-full mt-52 border-[#333333] h-[200px] w-[200px] animate-ping' />
        <div className='absolute border rounded-full mt-52 border-[#333333] h-[300px] w-[300px]' />
        <div className='absolute border rounded-full mt-52 border-[#333333] h-[500px] w-[500px]' />
        <div className='absolute border rounded-full mt-52 border-[#74a69a] opacity-20 h-[650px] w-[650px] animate-pulse' />
        <div className='absolute border rounded-full mt-52 border-[#333333] h-[800px] w-[800px]' />
    </motion.div>
  )
}