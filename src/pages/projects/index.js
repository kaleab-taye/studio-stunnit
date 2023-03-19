// import { Carousel } from 'flowbite';
// import { Carousel } from 'flowbite';
import HomeProjectsSection from '@/components/homeProjectsSection';
import Layout from '@/components/layout';
import LeftRightAligner from '@/components/left-right-aligner';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import ProjectsData from '../../../public/dummyData/projectsData';
import img1 from '../../../public/images/Asset_14.png'
import img2 from '../../../public/images/Asset_20.png'

export default function Index() {
    const projects = ProjectsData()
    const router = useRouter()
    const [selectedProject, setSelectedProject] = useState(-1);
    const [smallScreenFullTextContent, setSmallScreenFullTextContent] = useState(false)
    const childDesign = 'w-10 h-10 bg-red-500'

    useEffect(() => {
        console.log('test')
        if (router.query.id != null) {
            projects.map((proj) => {
                console.log('query', router.query.id, proj.id.toString())
                if (proj.id.toString() == router.query.id) {
                    console.log('found')
                    setSelectedProject((e) => proj.id - 1)
                    console.log(selectedProject)
                }
            })
        }else{
            
        }

        console.log(selectedProject)

    }, [router, selectedProject])

    return (
        <div>
            <Layout>
                <Navbar />
                <div className='grid gap-2 '>
                    {selectedProject == -1 ? <></> : <div >
                        <div className='hidden sm:flex w-[100%] m-auto h-56 md:h-72 lg:h-80 xl:h-92 gap-3 overflow-x-auto overflow-y-hidden'>
                            {projects[selectedProject].imageUrl.map((imgUrl) =>
                                <Image key={imgUrl} className='m-auto object-cover h-56 md:h-72 lg:h-80 xl:h-92' src={imgUrl} />
                            )}

                        </div>
                        <LeftRightAligner>
                            <div className='grid gap-6 my-6 sm:my-8'>
                                <div className='grid grid-flow-col'>
                                    <div className='grid gap-4'>
                                        <div className='font-medium text-2xl sm:text-3xl md:text-4xl'>{projects[selectedProject].title}</div>
                                        <div className='text-md sm:text-xl sm:font-light'>
                                            <div className='hidden sm:grid'>
                                                {projects[selectedProject].description}
                                            </div>
                                            <div className='grid sm:hidden'>

                                                <div>
                                                    {smallScreenFullTextContent == false && projects[selectedProject].description.length > 70 ? projects[selectedProject].description.substring(0, 300) + '. . .' : projects[selectedProject].description}
                                                </div>
                                                {smallScreenFullTextContent == false ? <div className='my-5 mx-auto border px-5 rounded' onClick={() => setSmallScreenFullTextContent(true)}>
                                                    Read More
                                                </div> : <></>}

                                            </div>
                                        </div>
                                    </div>
                                    <Link href='#projects-list'>
                                        <div className='hidden sm:grid mb-auto gap-3'>
                                            <div>
                                                Other Projects
                                            </div>
                                            <div className='mx-auto bg-surface rounded-full text-4xl'><IoIosArrowDown /></div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='grid sm:hidden gap-2'>
                                    <Image className='m-auto object-cover h-56 md:h-72 lg:h-80 xl:h-92' src={img2} />
                                    <Image className='m-auto object-cover h-56 md:h-72 lg:h-80 xl:h-92' src={img1} />
                                    <Image className='m-auto object-cover h-56 md:h-72 lg:h-80 xl:h-92' src={img2} />

                                </div>
                                <div className='grid gap-4'>
                                    <div className='font-medium text-xl sm:text-3xl md:text-4xl'>Client’s Word :</div>
                                    <div className='text-md sm:text-xl sm:font-light'>
                                        {projects[selectedProject].testimony}
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </LeftRightAligner>
                        <Link href='#projects-list'>
                            <div className='grid sm:hidden mb-auto gap-3'>
                                <div className='mx-auto'>
                                    Other Projects
                                </div>
                                <div className='mx-auto bg-surface rounded-full text-4xl'><IoIosArrowDown /></div>
                            </div>
                        </Link>
                    </div>}
                    <div id='projects-list'>
                        <HomeProjectsSection />

                    </div>

                </div>
            </Layout>
        </div>
    );
}