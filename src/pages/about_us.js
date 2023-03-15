import Layout from '@/components/layout'
import LeftRightAligner from '@/components/left-right-aligner'
import Navbar from '@/components/navbar'
import PageHeading from '@/components/pageHeading'
import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import aboutUsImage from '../../public/images/Asset_20.png'

export default function About_us() {
    return (
        <div>
            <Layout>
                <Navbar />
                <PageHeading name='About Us' image={aboutUsImage} />
                <LeftRightAligner>
                    <div className='grid grid-cols-4 my-20' >
                        <div className='col-span-1 mt-14'><IoMdMenu className='text-primary w-20 h-20' /></div>
                        <div className='grid gap-8 col-span-3'>
                            <div className='grid gap-8 font-light text-sm' >
                                <div>
                                    Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique
                                    and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad,
                                    the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience and work on 50-plus projects, principal designer Sahithi G entwines a myriad of bespoke elements that bring forth a remarkable impression to interior spaces. Sunny G ropes in 11 years of expertise in the corporate
                                    domain and a passion for design, technology and entrepreneurship, adding an unparalleled
                                    level of flavour to the studio&apos;s development and business strategies. </div>
                                <div>
                                    Our projects take off from a conceptual framework to delivering a complete spatial affair. For
                                    assignments outside Hyderabad, we currently provide only designs. Our firm traces context,
                                    social engagement, narrative and human interactions to define the essence of a particular
                                    project  </div>
                                <div>
                                    “Studio Stunnit traverses ideas and innovations that transform your spaces.”    </div>
                                <div>
                                    Our concepts intimately weave with the client&apos;s needs and aspirations. At Studio Stunnit, our
                                    designs explore a holistic composition, and we sensitively curate forms, textures, and material
                                    combinations in spaces to create a tranquil and experiential living.      </div>
                                <div>
                                    “We have a fabulous design idea. Are you ready to build your dreams?”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center my-16'>
                        <div className='italic mx-auto font-bold text-sm max-w-[500px]'>
                            “It&apos;s always about you and how you use spaces. <br />
                            At the end of the day, making your space attractive and  <br />
                            meaningful is our quest!”
                        </div>
                    </div>
                </LeftRightAligner>
            </Layout>
        </div>
    )
}
