import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Roboto } from '@next/font/google';
import Script from 'next/script';
config.autoAddCss = false;

const roboto = Roboto({
  weight: ['400', '900'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        strategy="lazyOnload"
        id="google-tag">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>

      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
