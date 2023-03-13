import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (<div className='bg-background-100 font-common_font tracking-widest leading-loose'>
<NextNProgress color="#bc8028" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />

    <Component {...pageProps} />
  </div>
  )
}
