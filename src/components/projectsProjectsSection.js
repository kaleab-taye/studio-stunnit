import { Carousel } from 'flowbite-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import image1 from '../../public/images/Asset_14.png'
import image2 from '../../public/images/Asset_16.png'
import image3 from '../../public/images/Asset_20.png'
import image4 from '../../public/images/Asset_14.png'
import { MdArrowBackIos, MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Image from 'next/image'
import LeftRightAligner from './left-right-aligner'
import Link from 'next/link'
import ProjectsData from '../../public/dummyData/projectsData'

export default function ProjectsProjectsSection({ projects }) {


    // const data = ProjectsData()
    const PathToImages = '/../..'
    const data = projects
    const [currentProject, setCurrentProject] = useState(data[0])
    const [currentIndex, setCurrentIndex] = useState(0)


    return (

        <div className="relative grid bg-center bg-surface">
            {/* <Image src={image2} alt='place' className='absolute opacity-0 mx-auto cover max-h-screen max-w-screen' /> */}

            <div className='w-full h-[91vh] grid my-auto overflow-hidden cursor-pointer' onClick={() => { console.log('cccccccccc') }}>
                <div className='m-auto'>

                    {/* <Image alt='project image' src={currentProject.primaryImage} className='min-h-screen w-screen mx-auto  object-cover h-full w-full brightness-75' /> */}
                    {/* <AnimatePresence className=' '> */}
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

                        <img alt='project image' src={PathToImages + currentProject.mainImage} className='min-h-screen w-screen mx-auto  object-cover object-center brightness-[.8]' />

                    </motion.div>
                    {/* </AnimatePresence> */}
                </div>
            </div>
            {/* section heading start */}
            <div className=" absolute grid w-full m-auto">
                <div className="m-auto grid h-screen">

                    <div className="max-w-[400px] mx-auto uppercase mt-10 font-bold text-3xl text-onPrimary" >Projects </div>
                </div>
            </div>
            {/* section heading end */}
            <Link href={'/projects?id=' + currentProject.id} className=''>

                <div className='absolute top-0 w-full h-full z-20'>

                </div>
            </Link>
            <div className='absolute grid w-full h-full pointer-events-none' >

                <div className='z-20 pointer-events-none grid place-content-between w-full grid-flow-col max-w-[1500px] m-auto'>
                    <div className='ml-6 '>
                        <div className='grid h-full ml-2'>
                            <div className=' pointer-events-auto m-auto cursor-pointer' onClick={() => setCurrentProject(data[prev(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowBackIos className='text-3xl hover:4xl md:text-5xl mr-4 text-onPrimary font-bold ' />
                            </div>
                        </div>
                    </div>
                    <div className=' mr-6 '>
                        <div className='grid h-full mr-2'>
                            <div className='pointer-events-auto m-auto cursor-pointer' onClick={() => setCurrentProject(data[next(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowForwardIos className='text-3xl hover:4xl md:text-5xl ml-4 text-onPrimary font-bold' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='absolute bottom-14 w-full z-20'>

                <div className=' flex justify-between px-2 sm:px-10 lg:px-0 mx-auto max-w-[1000px]'>
                    <Link href={'/projects?id=' + currentProject.id}>
                        <div className='ml-3 text-xl sm:text-3xl font-medium underline underline-offset-8 text-onPrimary'>
                            {currentProject.title}
                        </div>
                    </Link>
                    <div className='ml-auto mr-3 my-auto'>
                        <div className='grid grid-flow-col gap-1 sm:gap-2 my-auto'>
                            <div className=' m-auto cursor-pointer' onClick={() => setCurrentProject(data[prev(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowBackIosNew className=' text-3xl hover:3xl md:text-4xl mr-2 sm:mr-4 text-onPrimary font-bold ' />
                            </div>
                            <div className='m-auto sm:text-xl text-onPrimary font-medium'>
                                {(currentIndex + 1) + '/' + data.length}
                            </div>
                            <div className='m-auto cursor-pointer' onClick={() => setCurrentProject(data[next(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowForwardIos className='text-3xl hover:3xl md:text-4xl ml-2 sm:ml-4 text-onPrimary font-bold' />
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