import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['<UX Designer />', '<Thinker />', '<Coder />'],
        loop: true,
        delaySpeed: 2000
    });
  return (
    <section className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center snap-start' id='hero'>
      <BackgroundCircle />
      {/* <Image src='/images/efosa_igbinehi.jpg' width='128px' height='128px' objectFit='contain' className='rounded-full' /> */}
      <img src="images/efosa_igbinehi.jpg" alt="Efosa" className='relative object-cover w-32 h-32 mx-auto rounded-full' />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
          <h1 className='px-10 text-5xl font-semibold lg:text-6xl main-title'>
            <span>I'm Efosa: </span>
            <span>{text}</span>
            <Cursor cursorColor='#74a69a' />
          </h1>

          <div className='pt-5'>
            <Link href='#about'>
              <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
              <button className='heroButton'>Projects</button>
            </Link>
          </div>
        </div>
    </section>
  );
}