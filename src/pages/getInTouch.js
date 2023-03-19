import FooterIconContainer from '@/components/footerIconContainer'
import LeftRightAligner from '@/components/left-right-aligner'
import Navbar from '@/components/navbar'
import GetInTouchForm from '@/components/sections/getInTouchForm'
import GetInTouchSection from '@/components/sections/getInTouchSection'
import Image from 'next/image'
import React from 'react'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { TiSocialTwitter } from 'react-icons/ti'
import logo from '../../public/SVG/Asset_26.svg'

export default function GetInTouch() {

    var itemHeading = 'uppercase font-bold text-md'
    var item = 'font-light'

    return (
        <div>
            <Navbar />
            <div className='grid bg-surface pt-12'>
                <LeftRightAligner>
                    <GetInTouchSection />
                    <div className='mb-20'>

                        <GetInTouchForm />
                    </div>
                    {/* join our social media section start */}
                    <div className='grid gap-6 my-10'>
                        <div className='text-center m-auto font-medium text-xl'>Join our social media accounts and <br /> get
                            to know us more</div>
                        <div className='grid grid-flow-col'>
                        <div className='grid gap-4'>
                                <div className=' bg-primary p-4 rounded-full m-auto '>
                                    <FaLinkedinIn className='w-[27px] h-[27px] sm:h-[37px] sm:w-[37px] m-auto text-onPrimary' />
                                </div>
                                <div className='text-center text-xs max-w-[300px] mx-auto'>
                                    Follow us on twitter to get our
                                    to see our everyday behind-the-
                                    every previous projects in de-
                                    scene activities
                                    tailed description
                                </div>
                            </div>
                            <div className='grid'>
                                <div className=' bg-primary p-4 rounded-full m-auto '>
                                    <FaLinkedinIn className='w-[27px] h-[27px] sm:h-[37px] sm:w-[37px] m-auto text-onPrimary' />
                                </div>
                                <div className='text-center text-xs max-w-[300px] mx-auto'>
                                    Follow us on twitter to get our
                                    to see our everyday behind-the-
                                    every previous projects in de-
                                    scene activities
                                    tailed description
                                </div>
                            </div>
                            <div className='grid'>
                                <div className=' bg-primary p-4 rounded-full m-auto '>
                                    <FaLinkedinIn className='w-[27px] h-[27px] sm:h-[37px] sm:w-[37px] m-auto text-onPrimary' />
                                </div>
                                <div className='text-center text-xs max-w-[300px] mx-auto'>
                                    Follow us on twitter to get our
                                    to see our everyday behind-the-
                                    every previous projects in de-
                                    scene activities
                                    tailed description
                                </div>
                            </div>
                            <div className='grid'>
                                <div className=' bg-primary p-4 rounded-full m-auto '>
                                    <FaLinkedinIn className='w-[27px] h-[27px] sm:h-[37px] sm:w-[37px] m-auto text-onPrimary' />
                                </div>
                                <div className='text-center text-xs max-w-[300px] mx-auto'>
                                    Follow us on twitter to get our
                                    to see our everyday behind-the-
                                    every previous projects in de-
                                    scene activities
                                    tailed description
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    {/* join our social media section end */}
                </LeftRightAligner>
                <div className='bg-background-700 text-primaryColor pt-10 pb-4'>
                    <LeftRightAligner>
                        <div className='grid grid-flow-row md:grid-flow-col col-flow-4 gap-5'>
                            <div className='grid sm:grid-flow-col'>
                                <div className='grid mb-auto gap-4'>
                                    <div>
                                        <Image className='max-w-[140px]' src={logo} />
                                    </div>
                                    <div className='font-light max-w-[350px]'>
                                        We are a young company always
                                        looking for new and creative ideas
                                        to help you with our products in
                                        your everday work.
                                    </div>
                                </div>
                                <div className='grid gap-2 mb-auto'>
                                    <div className={itemHeading}>PAGES</div>
                                    <div className='grid gap-1'>
                                        <div className={item}>Home</div>
                                        <div className={item}>Services</div>
                                        <div className={item}>Projects</div>
                                        <div className={item}>About Us</div>
                                        <div className={item}>Testimonials</div>
                                        <div className={item}>FAQs</div>
                                    </div>
                                </div>

                            </div>
                            <div className='grid gap-2 mb-auto'>
                                <div className={itemHeading}>Contact</div>
                                <div className='grid gap-1 '>
                                    <div className={item}>Location: Hyberbad, India</div>
                                    <div className={item}>Phone: +01983 619505</div>
                                    <div className={item}>Email: studio.stunnit@gmail.comI</div>
                                    <div className={item}>Instagram: @studio_stunnit</div>
                                    <div className={item}>YouTube: @studio_stunnit</div>
                                </div>
                            </div>
                            <div className='grid gap-2 mb-auto'>
                                <div className='uppercase text-xl font-bold'>join us on:</div>
                                <div className='grid grid-flow-col gap-4 mr-auto'>
                                    <FooterIconContainer>
                                        <BsYoutube className='w-[27px] h-[27px] m-auto' />
                                    </FooterIconContainer>
                                    <FooterIconContainer>
                                        <BsInstagram className='w-[27px] h-[27px] m-auto' />
                                    </FooterIconContainer>
                                    <FooterIconContainer>
                                        <FaLinkedinIn className='w-[27px] h-[27px] m-auto' />
                                    </FooterIconContainer>
                                    <FooterIconContainer>
                                        <TiSocialTwitter className='w-[27px] h-[27px] m-auto' />
                                    </FooterIconContainer>


                                </div>
                            </div>
                        </div>
                        <div className='mx-auto text-md mt-5'>Copyright @ 2023 Studio Stunnit</div>
                    </LeftRightAligner>
                </div>
            </div>
        </div>
    )
}
