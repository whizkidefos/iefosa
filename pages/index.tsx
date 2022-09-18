import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0'>
      <Head>
        <title>Efosa Igbinehi | Home</title>
        <meta name="description" content="A fullstack developer from Manchester, UK. Building bespoke user experiences since 2014." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>

        <Hero />

        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </main>

    </div>
  )
}

export default Home;
