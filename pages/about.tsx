import React from 'react';

type Props = {}

export default function about({}: Props) {
  return (
    <section className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left max-w-7xl justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Meet Me</h3>
        <img src="images/efosa-working.jpg" alt="efosa working" className='p-5 m-3' />
    </section>
  )
}