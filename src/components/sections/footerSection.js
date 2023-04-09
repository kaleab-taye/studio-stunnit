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
import Link from 'next/link';


export default function FooterSection() {
    var itemHeading = 'uppercase font-bold text-md'
    var item = 'font-light '
    return (
        <div className='grid bg-surface pt-12'>
            <LeftRightAligner>
                <GetInTouchSection />
                <div className='mb-20'>
                    <GetInTouchForm />
                </div>
            </LeftRightAligner>
            <div className='bg-background-700 text-primaryColor pt-10 pb-4'>
                <LeftRightAligner>
                    <div className='grid grid-flow-row md:grid-flow-col col-flow-4 gap-5'>
                        <div className='grid grid-flow-col gap-2'>
                            <div className='grid mb-auto gap-4'>
                                <div>
                                    <Image className='max-w-[140px]' src={logo} />
                                </div>
                                <div className='font-light max-w-[350px]'>
                                    We are a young company always
                                    looking for new and creative ideas
                                    to help you with our products in
                                    your everyday work.
                                </div>
                            </div>
                            <div className='grid gap-2 mb-auto'>
                                <div className={itemHeading}>PAGES</div>
                                <div className='grid gap-1'>
                                    <Link href='/'>
                                    <div className={item + ' hover:underline underline-offset-4'}>Home</div>
                                    </Link>
                                    <Link href='/services'>
                                    <div className={item + ' hover:underline underline-offset-4'}>Services</div>
                                    </Link>
                                    <Link href='/projects'>
                                    <div className={item + ' hover:underline underline-offset-4'}>Projects</div>
                                    </Link>
                                    <Link href='/about_us'>
                                    <div className={item+ ' hover:underline underline-offset-4'}>About Us</div>
                                    </Link>
                                    <Link href='/testimonials'>
                                    <div className={item + " hover:underline underline-offset-4"}>Testimonials</div>
                                    </Link>
                                    <Link href='/faq'>
                                    <div className={item +' hover:underline underline-offset-4'}>FAQs</div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className='grid gap-8 xl:grid-flow-col'>
                            <div className='grid gap-2 mb-auto'>
                                <div className={itemHeading}>Contact</div>
                                <div className='grid gap-1 '>
                                    <div className={item}>Location: Hyberbad, India</div>
                                    <div className={item}>Phone: +919573523467</div>
                                    <div className={item}>Email: namaste@studiostunnit.com</div>
                                    <div className={item}>Instagram: @studio_stunnit</div>
                                    <div className={item}>YouTube: @studio_stunnit</div>
                                </div>
                            </div>
                            <div className='grid gap-2 mb-auto'>
                                <div className='uppercase text-xl font-bold'>join us on:</div>
                                <div className='grid grid-flow-col gap-4 mr-auto'>
                                    <FooterIconContainer>
                                        <BsYoutube className='w-[24px] h-[24px] m-auto' />
                                    </FooterIconContainer>
                                    <FooterIconContainer>
                                        <BsInstagram className='w-[24px] h-[24px] m-auto' />
                                    </FooterIconContainer>
                                    <FooterIconContainer>
                                        <FaLinkedinIn className='w-[24px] h-[24px] m-auto' />
                                    </FooterIconContainer>
                                    <FooterIconContainer>
                                        <TiSocialTwitter className='w-[25px] h-[25px] m-auto' />
                                    </FooterIconContainer>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto text-md mt-8 whitespace-nowrap'>Copyright @ 2023 &nbsp;
                        <Link href='/'>
                            <span className=' hover:text-primary'>
                                Studio Stunnit
                            </span>
                        </Link>
                    </div>
                </LeftRightAligner>
            </div>
        </div>
    )
}
