// import { Carousel } from 'flowbite';
// import { Carousel } from 'flowbite';
import HomeProjectsSection from '../../components/homeProjectsSection';
import Layout from '../../components/layout';
import LeftRightAligner from '../../components/left-right-aligner';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropdownCircle } from 'react-icons/io';
import { GrDown } from 'react-icons/gr';

import ProjectsData from '../../../public/dummyData/projectsData';
import img1 from '../../../public/images/Asset_14.png'
import img2 from '../../../public/images/Asset_20.png'
import ProjectsProjectsSection from '../../components/projectsProjectsSection';


export default function Index({projects}) {
    // const projects = ProjectsData()
    // const projects = projects()
    console.log("loggg",projects)
    const router = useRouter()
    const [selectedProject, setSelectedProject] = useState(-1);
    const [smallScreenFullTextContent, setSmallScreenFullTextContent] = useState(false)
    const childDesign = 'w-10 h-10 bg-red-500'

    useEffect(() => {
        console.log('selectedPJ')
        if (router.query.id != null) {
            projects.map((proj) => {
                console.log('selectedPJ', router.query.id, proj.id.toString())
                if (proj.id.toString() == router.query.id) {
                    console.log('selectedPJ found')
                    setSelectedProject((e) => proj)
                    console.log("selectedPJ",selectedProject)
                }
            })
        } else {

        }

        console.log("selectedPJ",selectedProject)

    }, [router, selectedProject])

    return (
        <div>
            <Layout>
                <Navbar />
                <div className='grid gap-2 '>
                    {selectedProject == -1 ? <></> : <div >
                        <div className='grid snap-mandatory snap-x hidden sm:flex w-[100%] m-auto h-56 sm:h-[372px] lg:h-[472px] gap-3 overflow-x-auto overflow-y-hidden'>
                            {/* <div className='snap-center w-[400px] h-[10px] bg-red-500'></div> */}
                            {selectedProject.moreImages.map((imgUrl) =>
                                <img key={imgUrl} className='snap-center m-auto object-cover h-56 sm:h-[372px] lg:h-[472px]' alt='detail image' src={imgUrl} />
                            )}

                        </div>
                        <LeftRightAligner>
                            <div className='grid gap-6 sm:gap-12 my-10 sm:my-24'>
                                <div className='grid grid-flow-col sm:gap-20 lg:gap-40'>
                                    <div className='grid gap-4 sm:gap-5'>
                                        <div className='text-2xl sm:text-[28px] md:text-[34px]'>{selectedProject.title}</div>
                                        <div className='leading-loose font-light text-xs sm:text-[13px] font-light '>
                                            <div className='hidden sm:grid whitespace-pre-line'>
                                                {selectedProject.description}
                                            </div>
                                            <div className='grid sm:hidden whitespace-pre-line'>

                                                <div>
                                                    {smallScreenFullTextContent == false && selectedProject.description.length > 300 ? selectedProject.description.substring(0, 300) + '. . .' : selectedProject.description}
                                                </div>
                                                {smallScreenFullTextContent == false ? <div className='my-5 mx-auto border px-5 rounded' onClick={() => setSmallScreenFullTextContent(true)}>
                                                    Read More
                                                </div> : <></>}

                                            </div>
                                        </div>
                                    </div>
                                    <Link href='#projects-list'>
                                        <div className='hidden sm:grid mb-auto gap-3 mt-10'>
                                            <div>
                                                Other Projects
                                            </div>

                                            <div className='mx-auto bg-surface rounded-full text-5xl grid'><GrDown className='m-auto p-2 font-' /></div>
                                        </div>
                                    </Link>
                                </div>
                                {/* responsive mobile project image */}
                                <div className='grid sm:hidden gap-2'>
                                    {selectedProject.moreImages.map((imgUrl) =>
                                        <img key={imgUrl} className='m-auto w-full object-cover h-56 md:h-72 lg:h-80 xl:h-92' alt='detail image' src={imgUrl} />
                                    )}
                                    {/* <Image className='m-auto object-cover h-56 md:h-72 lg:h-80 xl:h-92' src={img2} />
                                    <Image className='m-auto object-cover h-56 md:h-72 lg:h-80 xl:h-92' src={img1} />
                                    <Image className='m-auto object-cover h-56 md:h-72 lg:h-80 xl:h-92' src={img2} /> */}

                                </div>
                                <div className='grid gap-4 sm:gap-5'>
                                    <div className='text-2xl sm:text-[28px] md:text-[34px]'>Client’s Word :</div>
                                    <div className='leading-loose font-light text-xs sm:text-[13px] whitespace-pre-line'>
                                        {selectedProject.clientsWord}
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
                                <div className='mx-auto bg-surface rounded-full text-4xl animate-bounce'><IoIosArrowDown /></div>
                            </div>
                        </Link>
                    </div>}
                    <div id='projects-list'>
                        <ProjectsProjectsSection projects={projects}/>
                    </div>

                </div>
            </Layout>
        </div>
    );
}



export async function getStaticProps() {
    try {
      let res = await fetch(`${process.env.url}/projects`);
      let projects = await res.json();
      return {
        props: {
          projects: projects,
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error("error happened while fetching projects : ",error)
  
      return {
        props: {
          projects: [],
    //       error: error,
        }
      };
    }
  }