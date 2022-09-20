import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/images/efosa_igbinehi.jpg" alt="company logo"
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Senior Software Developer</h4>
            <h5 className='mt-1 text-2xl font-bold'>Zaizi, London</h5>
            <aside className='flex my-2 space-x-2'>
                <img src="images/python.png" alt="" className='w-10 h-10 rounded-full' />
                <img src="images/python.png" alt="" className='w-10 h-10 rounded-full' />
                <img src="images/python.png" alt="" className='w-10 h-10 rounded-full' />
                <img src="images/python.png" alt="" className='w-10 h-10 rounded-full' />
            </aside>
            <p className='py-5 text-gray-300 uppercase'>Started work... - Ended...</p>

            <ul className='ml-5 space-y-2 text-lg list-disc'>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
            </ul>
        </div>
    </article>
  )
}