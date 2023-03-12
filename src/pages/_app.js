import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<div className='bg-background1 font-commonfont text-secondaryColor'>
    <Component {...pageProps} />
  </div>
  )
}
