import Link from 'next/link'
import React, { useState } from 'react'
import { GrDown } from 'react-icons/gr'
import aboutUsImage from '../../public/images/Asset_20.png.webp'
import FounderCard from '../components/founderCard'
import Layout from '../components/layout'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import PageHeading from '../components/pageHeading'
import SeoHeader from '../components/seoHeader'

export default function About_us() {

    const [smallScreenFullTextContent, setSmallScreenFullTextContent] = useState(false);
    return (
        <div>
            <SeoHeader pageName="About Us" />

            <Layout>
                <Navbar />
                <PageHeading name='About Us' image={aboutUsImage} />
                <LeftRightAligner>
                    <div className='grid md:grid-cols-4 mt-8 md:mt-20 mb-4 mx-2' >
                        <div className='grid gap-8 md:col-span-3'>
                            <div className='text-md sm:text-[13px] grid'>

                                {/* small screen selective display */}
                                <div className='grid sm:hidden'>

                                    <div className=''>
                                        {smallScreenFullTextContent == false ?
                                            <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                                Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique
                                                and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad,
                                                the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience and work on 50-plus projects, principal designer Sahithi G entwines a myriad of bespoke elements that bring forth a remarkable impression to interior spaces. Sunny G ropes in 11 years of expertise in the corporate
                                                domain and a passion for design, technology and entrepreneurship, adding an unparalleled
                                                level of flavour to the studio&apos;s development and . . .
                                            </div>
                                            :
                                            <div className='grid gap-8 font-light text-sm' >
                                                <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                                    Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique
                                                    and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad,
                                                    the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience and work on 50-plus projects, principal designer Sahithi G entwines a myriad of bespoke elements that bring forth a remarkable impression to interior spaces. Sunny G ropes in 11 years of expertise in the corporate
                                                    domain and a passion for design, technology and entrepreneurship, adding an unparalleled
                                                    level of flavour to the studio&apos;s development and business strategies. </div>
                                                <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                                    Our projects take off from a conceptual framework to delivering a complete spatial affair. For
                                                    assignments outside Hyderabad, we currently provide only designs. Our firm traces context,
                                                    social engagement, narrative and human interactions to define the essence of a particular
                                                    project  </div>
                                                <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                                    “Studio Stunnit traverses ideas and innovations that transform your spaces.”    </div>
                                                <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                                    Our concepts intimately weave with the client&apos;s needs and aspirations. At Studio Stunnit, our
                                                    designs explore a holistic composition, and we sensitively curate forms, textures, and material
                                                    combinations in spaces to create a tranquil and experiential living.      </div>
                                                <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                                    “We have a fabulous design idea. Are you ready to build your dreams?”
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {smallScreenFullTextContent == false ? <div className='my-5 mx-auto border px-5 rounded cursor-pointer' onClick={() => setSmallScreenFullTextContent(true)}>
                                        Read More
                                    </div> : <></>}
                                </div>
                                {/* large screen full display */}
                                <div className='hidden sm:grid gap-8 font-light text-sm' >
                                    <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                        Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique
                                        and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad,
                                        the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience and work on 50-plus projects, principal designer Sahithi G entwines a myriad of bespoke elements that bring forth a remarkable impression to interior spaces. Sunny G ropes in 11 years of expertise in the corporate
                                        domain and a passion for design, technology and entrepreneurship, adding an unparalleled
                                        level of flavour to the studio&apos;s development and business strategies. </div>
                                    <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                        Our projects take off from a conceptual framework to delivering a complete spatial affair. For
                                        assignments outside Hyderabad, we currently provide only designs. Our firm traces context,
                                        social engagement, narrative and human interactions to define the essence of a particular
                                        project  </div>
                                    <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                        “Studio Stunnit traverses ideas and innovations that transform your spaces.”    </div>
                                    <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                        Our concepts intimately weave with the client&apos;s needs and aspirations. At Studio Stunnit, our
                                        designs explore a holistic composition, and we sensitively curate forms, textures, and material
                                        combinations in spaces to create a tranquil and experiential living.      </div>
                                    <div className='grid font-light text-sm leading-7 md:leading-8 text-[0.8rem]'>
                                        “We have a fabulous design idea. Are you ready to build your dreams?”
                                    </div>
                                </div>


                            </div>



                        </div>
                        <div className='col-span-1 mb-auto hidden md:grid'>
                            <div className='mx-auto mb-auto'>
                                <Link href='#meet-the-founders'>
                                    <div className='hidden sm:grid mb-auto gap-3 mt-5'>
                                        <div className='whitespace-nowrap'>
                                            The Founders
                                        </div>

                                        <div className='mx-auto bg-surface rounded-full text-5xl grid'><GrDown className='m-auto p-2 font-' /></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-10 mb-14 md:my-16'>
                        <div className='italic mx-auto font-bold text-[13.5px] md:text-sm max-w-[520px]'>
                            “It&apos;s always about you and how you use spaces. <br className='hidden md:grid' />
                            At the end of the day, making your space attractive and  <br className='hidden md:grid' />
                            meaningful is our quest!”
                        </div>
                    </div>
                </LeftRightAligner>
                <div id='meet-the-founders' className='h-[30px] bg-primary'>

                </div>
                <LeftRightAligner>
                    <div className='mt-20 mb-32'>
                        <h3 className='text-center mb-10 font-bold text-2xl'>MEET THE FOUNDERS</h3>
                        <div className='grid gap-20 px-3 mx-auto  xl:grid-cols-2 justify-center'>
                            {
                                founders.map(founder => (
                                    <div key={founder.key} className="max-w-[600px]  overflow-hidden">
                                        <FounderCard founder={founder} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </LeftRightAligner>
            </Layout>
        </div>
    )
}




const founders = [
    {
        name: "Sunil G",
        position: "Strategist & Manager",
        description: "Ex Investment Banker in corporate for more than 13 years performing Strategy and Management functions for the Studio Stunnit. Like connecting the best of East and West creating global solutions.",
    },
    {
        name: "Sahithi G",
        position: "Interior Designer & Creative Director",
        description: "Principal Interior Designer designing and executing interior spaces from more than 9 years. Looking into creative side of the Studio Stunnit.",
    },
]