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
import Link from 'next/link'
import ProjectsData from '../../public/dummyData/projectsData'

export default function HomeProjectsSection() {


    const data = ProjectsData()
    const [currentProject, setCurrentProject] = useState(data[0])
    const [currentIndex, setCurrentIndex] = useState(0)


    return (
        <div className="relative grid bg-center">
            {/* <Image src={image2} alt='place' className='opacity-0 mx-auto cover max-h-screen max-w-screen' /> */}
            <div className='w-full h-full grid my-auto'>
                <div className='m-auto'>

                    <AnimatePresence className=' '>
                        {/* {currentProject.map((item) => ( */}
                        <motion.div

                            key={currentProject.id}
                            // style={{ x: -100 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            // exit={{ y:50 }}
                            // transition={{ duration: 2 }}
                            className=' grid h-full'
                        >
                            <Image src={currentProject.primaryImage} className='h-[75vh] w-screen mx-auto  object-cover h-full w-full' />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {/* section heading start */}
            <div className=" absolute grid w-full m-auto ">
                <div className="m-auto grid h-screen">

                    <div className="max-w-[400px] mx-auto uppercase mt-10 font-bold text-3xl text-onPrimary" >Projects </div>
                </div>
            </div>
            {/* section heading end */}

            <div className='absolute bottom-5 w-full'>

                <div className=' flex justify-between px-5 sm:px-10 lg:px-0 mx-auto max-w-[1000px]'>
                    <Link href={'/projects?id='+currentProject.id}>
                        <div className='ml-3 text-3xl font-medium underline text-onPrimary'>
                            {currentProject.title}
                        </div>
                    </Link>
                    <div className='ml-auto mr-3'>
                        <div className='grid grid-flow-col gap-2'>
                            <div className=' m-auto cursor-pointer' onClick={() => setCurrentProject(data[prev(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowBackIosNew className='text-2xl hover:3xl md:text-4xl mr-4 text-onPrimary font-bold ' />
                            </div>
                            <div className='m-auto text-xl text-onPrimary font-medium'>
                                {(currentIndex + 1) + '/' + data.length}
                            </div>
                            <div className='m-auto cursor-pointer' onClick={() => setCurrentProject(data[next(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowForwardIos className='text-2xl hover:3xl md:text-4xl ml-4 text-onPrimary font-bold' />
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

// layout
// key={currentProject.id}
// initial={{ scale: 0 }}
// animate={{ scale: 1 }}
// exit={{ scale: 0, opacity: 0 }}
// transition={{ duration: 0.5 }}
// layout