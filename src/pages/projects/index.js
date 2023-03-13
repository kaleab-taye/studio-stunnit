// import { Carousel } from 'flowbite';
// import { Carousel } from 'flowbite';
import Layout from '@/components/layout';
import LeftRightAligner from '@/components/left-right-aligner';
import Navbar from '@/components/navbar';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Slider from 'react-slick';
import img1 from '../../../public/images/Asset_14.png'
export default function Index() {
    const childDesign = 'w-10 h-10 bg-red-500'

    return (
        <div>
            <Layout>
                <Navbar />
                {/* <LeftRightAligner> */}

                    <div className="h-60 sm:h-72 md:h-96 lg:h-[420px] my-10">

                        <Carousel className='w-fit h-fit' slideInterval={5000}>
                            <Image className='' src={img1} />
                            <Image className='' src={img1} />
                            <Image className='' src={img1} />
                            <Image className='' src={img1} />

                        </Carousel>
                    </div>
                {/* </LeftRightAligner> */}
            </Layout>
        </div>
    );
}

const projects = [
    {
        id: "1",
        title: "Arnua Project",
        imageUrl: "/images/Asset_14.png",
    }
]