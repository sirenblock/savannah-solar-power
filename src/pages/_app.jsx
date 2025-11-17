import '../styles/globals.css';
import '../styles/residential.css';
import Head from 'next/head';

function SavannahSolarApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default SavannahSolarApp;
