import Image from 'next/image'
import React from 'react'
import Button from './button'
import LeftRightAligner from './left-right-aligner'
import image1 from '../../public/images/Asset_16.png'
import WhatWeDoSectionCard from './whatWeDoSectionCard'
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link'
import PrimaryLinkButton from './primaryLinkButton'

export default function WhatWeDoSection() {
    return (
        <LeftRightAligner>
            <div className='grid text-center md:text-left  gap-14 md:gap-20  my-14 md:my-20'>
                {/* top section */}
                <div className='flex flex-col-reverse md:grid grid-flow-row md:grid-flow-col gap-16 md:gap-14 lg:gap-20 mx-auto'>
                    {/* left section */}
                    <div className='grid my-auto gap-8 md:max-w-[500px] max-w-[400px] '>
                        <div className='uppercase font-bold text-3xl lg:text-10xl xl:text-10xl'>
                            STEP INTO STUNNING
                            SPACES THROUGH
                            STUNNIT!
                        </div>
                        <div className='grid my-auto gap-6'>
                            <div className='text-md opacity-70'>
                                We help you step into stunning Interior design spaces that is
                                customized to fit your personal value. Get in touch and let’s
                                start customizing a design that fits just right for you!
                            </div>
                            <div className='grid my-auto md:mr-auto gap-2'>
                                <div className='md:mr-auto'>
                                    <Link href='#get-in-touch'>
                                        <Button name='Get in touch' path='#get-in-touch' />
                                    </Link>
                                </div>
                                <div className='text-sm opacity-60'>Schedule your project and let’s get started!</div>
                            </div>
                        </div>
                    </div>
                    {/* right section */}
                    <div className='grid mx-auto'>
                        <Image className='rounded-3xl max-w-[350px]' src={image1} />
                    </div>
                </div>
                {/* bottom section */}
                <div className='grid md:grid-flow-col gap-8 mx-auto'>
                    <div className='grid my-auto gap-2 max-w-[360px]'>
                        <div className='font-semibold text-2xl'>what we do</div>
                        <div className='opacity-80'>We provide two kinds of service,
                            design only and design with
                            execution
                        </div>
                        <div className='mr-auto'>
                            <Link href='/service'>
                                <PrimaryLinkButton text='Learn More'/>

                            </Link>

                        </div>
                    </div>
                    <div className='grid md:grid-flow-col gap-8'>
                        <WhatWeDoSectionCard
                            heading="Design Only Service"
                            description="Our experienced interior designers’
                        team will create a design plan for your
                        space, but won’t carry out the physical
                        implementation of the design. You’ll be
                        at liberty to implement the design with
                        or without blending other ideas">
                            <FiSettings />
                        </WhatWeDoSectionCard>
                        <WhatWeDoSectionCard
                            heading="Design with Execution"
                            description="This comprises creating 2D and 3D
                        drawings, mood boards, and then
                        implementing those designs by choosing materials, planning, organizing
                        transportation, carrying out the project,
                        and managing it">
                            <FiSettings />
                        </WhatWeDoSectionCard>
                    </div>
                </div>
            </div>
        </LeftRightAligner>
    )
}
