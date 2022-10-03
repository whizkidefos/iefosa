import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#74a69a]'>

      <Head>
        <title>Efosa Igbinehi | Portfolio</title>
        <meta name="description" content="A fullstack developer from Manchester, UK. Building bespoke user experiences since 2014." />
        <link rel="icon" href="/images/iefosa.png" />
      </Head>

      <Header />

      <Hero />

      <section id='about' className='snap-center'>
        <About />
      </section>

     
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

     
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

     
      <section id='contact' className="snap-start">
        <Contact />
      </section>


    </div>
  )
}

export default Home;
