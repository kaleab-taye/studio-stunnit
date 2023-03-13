// import { Carousel } from 'flowbite';
// import { Carousel } from 'flowbite';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Slider from 'react-slick';
import img1 from '../../../public/images/Asset_14.png'
export default function Index() {
    const childDesign = 'w-10 h-10 bg-red-500'

    return (
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

        <Carousel className='w-fit h-fit' slideInterval={5000}>
        <Image className='' src={img1} />
        <Image className='' src={img1} />
        <Image className='' src={img1} />
        <Image className='' src={img1} />
        {/* <Image src={img1} />
        <Image src={img1} />
            <Image src={img1} />
            <Image src={img1} /> */}
        </Carousel>
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