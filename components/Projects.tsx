import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5, 6]
  return (
    <motion.div className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-center md:text-left xl:flex-row justify-evenly'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl mb-6'>Projects</h3>

        <div className='absolute w-full top-[30%] bg-[#74a69a] left-0 h-[500px] -skew-y-12' />
        
        <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
            {projects.map((project, i) => (
                <article key={i} className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'>
                    <motion.img 
                        initial={{ opacity: 0, y: -300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}

                        src="images/efosa-working.jpg" alt="project screenshot"
                        className=''
                    />
                    <div className='max-w-6xl space-y-10 md:px-10'>
                        <h4 className='text-3xl font-semibold text-center'>
                            <span className="underline">Case Study {i+1} of {projects.length}: </span>
                            Big Love Swim Club
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, blanditiis quibusdam sint accusamus, esse ipsam iusto perspiciatis possimus corrupti labore qui aspernatur nostrum. Repellat neque modi ut quod unde iste debitis, sunt hic explicabo. Animi velit, quas rem in temporibus vero doloribus suscipit pariatur cumque expedita minima, quibusdam est culpa.
                        </p>
                    </div>
                </article>
            ))}
        </div>
    </motion.div>
  )
}

export default Projects;