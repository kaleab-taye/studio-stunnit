import Image from 'next/image'
import React from 'react'
import LeftRightAligner from '../left-right-aligner'
import logo from '../../../public/SVG/Asset_27.svg'
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import FooterIconContainer from '../footerIconContainer';
import GetInTouchSection from './getInTouchSection';
import GetInTouchForm from './getInTouchForm';


export default function FooterSection() {
    var itemHeading = 'uppercase font-bold text-md'
    var item = 'font-light'
    return (
        <div className='grid'>
            {/* <LeftRightAligner>
                <GetInTouchSection />
                <div className=''>

                    <GetInTouchForm />
                </div>
            </LeftRightAligner> */}
            <div className='bg-darkGray text-primaryColor pt-10 pb-4'>
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
    )
}
