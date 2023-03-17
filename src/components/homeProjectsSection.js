import { Carousel } from 'flowbite-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import image1 from '../../public/images/Asset_14.png'
import image2 from '../../public/images/Asset_16.png'
import image3 from '../../public/images/Asset_20.png'
import image4 from '../../public/images/Asset_14.png'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Image from 'next/image'
import LeftRightAligner from './left-right-aligner'

export default function HomeProjectsSection() {


    const data = [
        { id: '1', img: image1, heading: "meeting", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },
        { id: '2', img: image2, heading: "design", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },
        { id: '3', img: image3, heading: "execution", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },
        { id: '4', img: image4, heading: "move-in", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },

    ]
    const [currentProject, setCurrentProject] = useState(data[0])
    const [currentIndex, setCurrentIndex] = useState(0)


    return (
        <div className="relative grid bg-center bg-red-400">

            {/* <Carousel className=' w-full h-full' slide={false} leftControl={
                <div className='bg-green-500 bottom-0 w-full h-full'>

                    <MdArrowBackIosNew className=' text-5xl ml-4 text-onPrimary font-bold hover:text-6xl bg-red-400 absolute bottom-5 left-0' />
                </div>
            } rightControl={<MdArrowForwardIos className='text-4xl text-darkGray hover:text-onSurface' />} indicators={false}>
                <div className="grid relative bg-cover h-screen bg-[url('/images/Asset_14.png')] bg-center"></div>
                <div className="grid relative bg-cover h-screen bg-[url('/images/Asset_14.png')] bg-center"></div>
                <div className="grid relative bg-cover h-screen bg-[url('/images/Asset_14.png')] bg-center"></div>

            </Carousel> */}
            <AnimatePresence className=' '>
                {/* {currentProject.map((item) => ( */}
                <motion.div
                    // layout
                    // key={currentProject.id}
                    // initial={{ scale: 0 }}
                    // animate={{ scale: 1 }}
                    // exit={{ scale: 0, opacity: 0 }}
                    // transition={{ duration: 0.5 }}
                    // layout
                    key={currentProject.id}
                    // style={{ x: -100 }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    // exit={{ y:50 }}
                    // transition={{ duration: 2 }}
                    className='grid '
                >

                    <Image src={currentProject.img} className='mx-auto cover max-h-screen max-w-screen' />
                </motion.div>
            </AnimatePresence>
            <div className=" absolute grid w-full m-auto ">
                <div className="m-auto grid h-screen">

                    <div className="max-w-[400px] mx-auto uppercase mt-10 font-bold text-3xl text-onPrimary" >Projects </div>
                </div>
            </div>

            <div className='absolute bottom-5 w-full bg-red-500'>

                <div className=' flex justify-between mx-auto max-w-[1000px]'>
                    <div className='ml-3 text-xl font-medium underline'>
                        {currentProject.heading}
                    </div>
                    <div className='ml-auto mr-3'>
                        <div className='grid grid-flow-col bg-green-500 gap-2'>
                            <div className=' bg-red-400 my-auto' onClick={() => setCurrentProject(data[prev(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowBackIosNew className='text-2xl hover:3xl md:text-4xl ml-4 text-onPrimary font-bold ' />
                            </div>
                            <div>
                            {(currentIndex + 1) + '/' + data.length}
                            </div>
                            <div className=' bg-red-400 my-auto' onClick={() => setCurrentProject(data[next(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowForwardIos className=' text-2xl hover:3xl md:text-4xl ml-4 text-onPrimary font-bold' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function next(index, setCurrentIndex, fullData) {
    if (index < fullData.length - 1) {
        setCurrentIndex(index + 1)
        return index + 1
    }
    else {
        setCurrentIndex(0)
        return 0
    }
}

function prev(index, setCurrentIndex, fullData) {
    console.log('prev called', index, fullData)
    if (index > 0) {
        setCurrentIndex(index - 1)
        return index - 1
    }
    else {
        setCurrentIndex(fullData.length - 1)
        return fullData.length - 1
    }
}
