import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0'>
      {/* <Head>
        <title>Efosa Igbinehi | Home</title>
        <meta name="description" content="A fullstack developer from Manchester, UK. Building bespoke user experiences since 2014." />
        <link rel="icon" href="images/iefosa.png" />
      </Head> */}

        <Hero />

        <section id='about' className='snap-center'>
          <About />
        </section>

        {/* Experience */}
        <section id='experience' className='snap-center'>
          <Experience />
        </section>

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}


    </div>
  )
}

export default Home;
