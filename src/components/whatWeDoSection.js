import Image from 'next/image'
import React from 'react'
import icon1 from '../../public/images/Asset_10.png.webp'
import icon2 from '../../public/images/Asset_11.png.webp'
import image1 from '../../public/images/Asset_16.jpg'
import Button from './button'
import LeftRightAligner from './left-right-aligner'


import Link from 'next/link'
import PrimaryLinkButton from './primaryLinkButton'
import WhatWeDoSectionCard from './whatWeDoSectionCard'

export default function WhatWeDoSection() {
    return (
        <LeftRightAligner>
            <div className=' grid text-center md:text-left  gap-14 md:gap-20  my-14 md:my-20'>
                {/* top section */}
                <div className=' justify-between w-full flex flex-col-reverse md:grid grid-flow-row md:grid-flow-col gap-16 md:gap-14 lg:gap-20 mx-auto'>
                    {/* left section */}
                    <div className='grid my-auto mx-auto gap-8 md:max-w-[650px] max-w-[400px] '>
                        <div className='uppercase font-bold text-2xl sm:text-3xl lg:text-10xl xl:text-10xl'>
                            STEP INTO STUNNING
                            SPACES THROUGH
                            STUNNIT!
                        </div>
                        <div className='grid my-auto gap-6 mx-auto'>
                            <div className='text-md '>
                                We help you step into stunning Interior design spaces that is
                                customized to fit your personal value. Get in touch and let’s
                                start customizing a design that fits just right for you!
                            </div>
                            <div className='grid my-auto gap-3'>
                                <div className='md:mr-auto'>
                                    <Link href='#get-in-touch'>
                                        <Button name='Get in touch' path='#get-in-touch' />
                                    </Link>
                                </div>
                                <div className='text-sm'>Schedule your project and let’s get started!</div>
                            </div>
                        </div>
                    </div>
                    {/* right section */}
                    <div className='grid w-full my-auto'>
                        <Image alt='intro' className='mx-auto rounded-3xl max-w-[420px] md:max-w-[350px] lg:max-w-[500px] w-full' src={image1} />
                    </div>
                </div>
                {/* bottom section */}
                <div className='grid md:grid-flow-col gap-8 mx-auto'>
                    <div className='grid my-auto gap-2 max-w-[360px] mx-auto '>
                        <div className='font-semibold text-2xl uppercase'>what we do</div>
                        <div className=''>We provide two kinds of service,
                            design only and design with
                            execution
                        </div>
                        <div className='mr-auto ml-auto md:ml-0 md:mr-auto'>
                            <Link href='/services'>
                                <PrimaryLinkButton text='Learn More' />

                            </Link>

                        </div>
                    </div>
                    <div className='grid sm:grid-flow-col gap-8'>
                        <WhatWeDoSectionCard
                            heading="Design Only Service"
                            description="Our experienced interior designers’
                        team will create a design plan for your
                        space, but won’t carry out the physical
                        implementation of the design. You’ll be
                        at liberty to implement the design with
                        or without blending other ideas">
                            <Image height={50} src={icon2} alt='icon' />
                        </WhatWeDoSectionCard>
                        <WhatWeDoSectionCard
                            heading="Design with Execution"
                            description="This comprises creating 2D and 3D
                        drawings, mood boards, and then
                        implementing those designs by choosing materials, planning, organizing
                        transportation, carrying out the project,
                        and managing it">
                            <Image height={50} src={icon1} alt='icon' />
                        </WhatWeDoSectionCard>
                    </div>
                </div>
            </div>
        </LeftRightAligner>
    )
}
