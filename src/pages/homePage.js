import LandingComponet from '@/components/landidng'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import DesignInStepsSection from '@/components/sections/designInStepsSection'
import WhyChooseUsSection from '@/components/sections/whyChooseUsSection'
import WhatWeDoSection from '@/components/whatWeDoSection'
import Head from 'next/head'
import Image from 'next/image'

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
                        <main className='' >
                <Layout>

                                <LandingComponet />
                                <Navbar />
                                <WhatWeDoSection />
                                <WhyChooseUsSection />
                                <DesignInStepsSection />
                </Layout>
                        </main>
                </>
}

