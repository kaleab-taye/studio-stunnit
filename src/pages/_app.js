import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

import Router from 'next/router';
import NProgress from 'nprogress'; 

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  return (<div className='bg-background-100 font-common_font tracking-widest leading-loose'>
    <NextNProgress showSpinner color="#bc8028" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />
    
    <Component {...pageProps} />
  </div>
  )
}
