import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Efosa Igbinehi | Portfolio</title>
        <meta name="description" content="A fullstack developer from Manchester, UK. Building bespoke user experiences since 2014." />
        <link rel="icon" href="/images/iefosa.png" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MyApp
