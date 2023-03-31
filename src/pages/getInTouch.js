import FooterIconContainer from '../components/footerIconContainer'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import GetInTouchForm from '../components/sections/getInTouchForm'
import GetInTouchSection from '../components/sections/getInTouchSection'
import { border } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { TiSocialTwitter } from 'react-icons/ti'
import logo from '../../public/SVG/Asset_27.svg'

export default function GetInTouch() {

    const mediaIconClass = 'w-[27px] h-[27px] sm:h-[37px] sm:w-[37px] m-auto text-onPrimary'

    const social_media_data = [
        [{
            type: 'instagram',
            description: 'Follow us on Instagram to see our everyday behind-the- scene activities',
            icon: <BsInstagram className={mediaIconClass} />,
            link: ''
        },
        {
            type: 'tweeter',
            description: 'Follow us on twitter to get our every previous projects in detailed description',
            icon: <TiSocialTwitter className={mediaIconClass} />,
            link: ''
        }],
        [{
            type: 'linkedin',
            description: 'Connect with us on Linked-In for professional collaboration and more connection',
            icon: <FaLinkedinIn className={mediaIconClass} />,
            link: ''
        },
        {
            type: 'youtube',
            description: 'Check out our YouTube channel for design tips, and industry insights',
            icon: <BsYoutube className={mediaIconClass} />,
            link: ''
        }]
    ]

    var itemHeading = 'uppercase font-bold text-md';
    var item = 'font-light';
    
    

    return (
        <div>
            <Navbar />
            <div className='grid bg-surface pt-12'>
                <LeftRightAligner>
                    <GetInTouchSection />
                    <div className='mb-20'>

                        <GetInTouchForm />
                    </div>
                    <div className='grid grid-flow-row gap-6 lg:gap-0 lg:grid-cols-5 lg:relative w-full'>
                        <div className='lg:col-span-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19454.841638188274!2d38.7692833!3d9.0435865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f70103e4b0d%3A0xe82d81ca891d8081!2sJan%20Meda%20Race%20Ground%2C%20Addis%20Ababa!5e1!3m2!1sen!2set!4v1679233868585!5m2!1sen!2set" width="100%" height="550" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
                        <div className='hidden lg:grid lg:col-span-2'></div>
                        <div className='w-[100%]'>
                            <div className=' grid lg:absolute lg:right-0 lg:top-[15%] bg-surface sm:m-auto border-2 border-primary px-4 sm:px-6 py-10 grid gap-6 max-w-[600px]'>
                                <div className='text-center font-medium'>Studio Stunnit Ofﬁce</div>
                                <div className='text-sm grid-flow-col grid-cols-2 sm:gap-5 grid'>
                                    <div className='grid grid-flow-row grid-rows-2 gap-5'>
                                        <div className='grid gap-1 mb-auto'>
                                            <div className='text-primary '>ADDRESS:</div>
                                            <div className='text-xs sm:ml-1'>In front of Kachiguda, <br />Hyderabad, Telangana, <br />India </div>
                                        </div>
                                        <div className='grid gap-1 mb-auto'>
                                            <div className='text-primary '>BUSINESS HOURS:</div>
                                            <div className='text-xs sm:ml-1'>Monday&#8211;Friday: 10 am&#8211;6 pm<br />Saturday: 10 am&#8211;2 pm</div>
                                        </div>

                                    </div>
                                    <div className='grid grid-flow-row grid-rows-2 gap-5'>
                                        <div className='grid gap-1 mb-auto'>
                                            <div className='text-primary '>PHONE NUMBER:</div>
                                            <div className='text-xs sm:ml-1'>+01983 619505 <br />+01976 718793 </div>
                                        </div>

                                        <div className='grid gap-1 mb-auto'>
                                            <div className='text-primary '>EMAIL:</div>
                                            <div className='text-xs sm:ml-1'>studio.stunnit@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* join our social media section start */}
                    <div className='grid gap-10 my-20'>
                        <div className='text-center m-auto font-medium text-xl'>Join our social media accounts <br className='grid sm:hidden' /> and <br className='sm:grid hidden' /> get
                            to know us more</div>
                        <div className='grid grid-flow-row  md:grid-flow-col gap-6'>
                            {social_media_data.map((mediaPair) =>
                                <div key={Math.random()} className='grid grid-flow-col gap-5'>
                                    <div className='grid gap-4'>
                                        <div className=' bg-primary p-4 rounded-full m-auto '>
                                            {mediaPair[0].icon}
                                        </div>
                                        <div className='text-center text-xs max-w-[300px] mx-auto'>
                                            {mediaPair[0].description}
                                        </div>
                                    </div>
                                    <div className='grid gap-4'>
                                        <div className=' bg-primary p-4 rounded-full m-auto '>
                                            {mediaPair[1].icon}
                                        </div>
                                        <div className='text-center text-xs max-w-[300px] mx-auto'>
                                            {mediaPair[1].description}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* join our social media section end */}
                </LeftRightAligner>
                {/* footer section start */}
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
                                    your everday work.
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
                    <div className='mx-auto text-md mt-8'>Copyright @ 2023 &nbsp;
                        <Link href='/'>
                            <span className='font-semibold hover:text-primary'>
                                Studio Stunnit
                            </span>
                        </Link>
                    </div>
                </LeftRightAligner>
            </div>
            </div>
        </div>
    )
}
