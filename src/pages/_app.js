import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<div className='bg-background-100 font-common_font tracking-widest leading-loose'>
    <Component {...pageProps} />
  </div>
  )
}
