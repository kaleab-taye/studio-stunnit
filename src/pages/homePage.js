import LandingComponet from '@/components/landidng'
import Head from 'next/head'
import Image from 'next/image'
import cover_1 from '../../public/images/Cover-1.webp'

export default function HomePage() {
    return <>
    <Head>
      <title>Studio Stunnit</title>
      <meta name="description" content="We help you step into stunning Interior design spaces that is
customized to ﬁt your personal value. Get in touch and let’s
start customizing a design that ﬁts just right for you!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className=' grid h-[100vh]' >
        {/* <div className="bg-cover bg-[url('/images/Cover-1.webp')] h-fit"> */}

        {/* <div className='border-2 border-green-400 grid'>
        <Image src={cover_1} className='min-w-[100vw]'/>
                <div className='fixed w-[100%] h-[100%]'>
        <div className='grid m-auto bg-red-400'>
<div>

                    Studio Stunnit</div>
</div>
        </div>
            
        </div> */}

        <LandingComponet/>
        {/* </div> */}
    </main>
    </>
  }
  
  