import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingComponet from '@/components/landidng'
import WhatWeDoSection from '@/components/whatWeDoSection'
import Navbar from '@/components/navbar'
import Layout from '@/components/layout'
import WhyChooseUsSection from '@/components/sections/whyChooseUsSection'
import HomeTestimonialSection from '@/components/sections/homeTestimonialSection'
import HomeProjectsSection from '@/components/homeProjectsSection'
import DesignInStepsSection from '@/components/sections/designInStepsSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
                <Head>
                        <title>Studio Stunnit</title>
                        <meta name="description" content="We help you step into stunning Interior design spaces that is
                        customized to ﬁt your personal value. Get in touch and let’s
                        start customizing a design that ﬁts just right for you!" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className='' >
                        <Layout>
                                <LandingComponet />
                                <Navbar />

                                <WhatWeDoSection />
                                <WhyChooseUsSection />
                                <DesignInStepsSection />
                                <HomeProjectsSection />
                                <HomeTestimonialSection />
                                <div id='get-in-touch'>
                                </div>
                        </Layout>
                </main>
        </>
  )
}
