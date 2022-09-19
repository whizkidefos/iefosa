import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className=''>
        <img 
            src="/images/efosa_igbinehi.jpg" alt="company logo"
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
    </article>
  )
}