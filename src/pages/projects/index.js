import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { GrDown } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import Layout from '../../components/layout';
import LeftRightAligner from '../../components/left-right-aligner';
import Navbar from '../../components/navbar';

import ProjectsProjectsSection from '../../components/projectsProjectsSection';
import SeoHeader from '../../components/seoHeader';


export default function Index({ projects }) {
    const router = useRouter()
    const [selectedProject, setSelectedProject] = useState(-1);
    const [smallScreenFullTextContent, setSmallScreenFullTextContent] = useState(false)
    const childDesign = 'w-10 h-10 bg-red-500'
    const serverUrl = process.env.url
    useEffect(() => {
        if (router.query.id != null) {
            projects.map((proj) => {
                if (proj.id.toString() == router.query.id) {
                    setSelectedProject((e) => proj)
                }
            })
        } else {

        }
    }, [router, selectedProject])



    useEffect(() => {
        // start
        const container = document.getElementById('container');
        const content = document.getElementById('content');
        let isHorizontalScrolling = false; // Track horizontal scrolling state
        var scrollDirection = 'down';


        window.addEventListener('wheel', function (event) {
            const deltaX = event.deltaX;
            const deltaY = event.deltaY;

            if (deltaY > 0) {
                // Scrolling down
                scrollDirection = 'down'
            } else if (deltaY < 0) {
                // Scrolling up
                scrollDirection = 'up'
            }
        });

        container?.addEventListener('wheel', (event) => {

            // Check if horizontal scrolling is needed
            if (content.scrollWidth > container.clientWidth) {
                // Prevent vertical scrolling

                // Update horizontal scrolling state
                isHorizontalScrolling = true;
                if (content.scrollLeft <= 1 && scrollDirection == 'down') {
                    //horizontal
                    event.preventDefault();
                    content.scrollLeft += event.deltaY;
                } else if (content.scrollLeft <= 1 && scrollDirection == 'up') {
                    // vertical
                } else if (content.scrollLeft >= content.scrollWidth - content.clientWidth && scrollDirection == 'up') {
                    //horizontal
                    event.preventDefault();
                    content.scrollLeft += event.deltaY;
                } else if (content.scrollLeft >= content.scrollWidth - content.clientWidth && scrollDirection == 'down') {
                    //vertical
                } else {
                    // Check if horizontal scrolling has reached the end
                    if (content.scrollLeft + container.clientWidth > content.scrollWidth ||
                        content.scrollLeft < 0) {
                        // Reset horizontal scrolling state when horizontal limit is reached
                        isHorizontalScrolling = false;
                        // content.scrollTop += event.deltaY;
                    } else {
                        isHorizontalScrolling = true;
                        event.preventDefault();
                        content.scrollLeft += event.deltaY;
                    }
                }

            }
        });

    }, [selectedProject])

    return (
        <div>
            <SeoHeader pageName="Projects" />
            <Layout>
                <Navbar />
                <div className='grid gap-2 '>
                    {selectedProject == -1 ? <></> : <div >
                        <div id='container' className='hidden sm:grid' >
                            <div id='content' className=''>

                                {selectedProject.moreImages.map((imgUrl) =>
                                    <div key={imgUrl} className='item h-[500px] border-2'>
                                        <img key={imgUrl} className=' object-cover object-center w-full h-full' alt='detail image' src={serverUrl+"/"+imgUrl} />
                                    </div>
                                )}
                            </div>
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
                                                {smallScreenFullTextContent == false ? <div className='cursor-pointer my-5 mx-auto border px-5 rounded whitespace-nowrap' onClick={() => setSmallScreenFullTextContent(true)}>
                                                    Read More
                                                </div> : <></>}

                                            </div>
                                        </div>
                                    </div>
                                    <Link href='#projects-list'>
                                        <div className='hidden sm:grid mb-auto gap-3 mt-10'>
                                            <div className='whitespace-nowrap'>
                                                Other Projects
                                            </div>

                                            <div className='mx-auto bg-surface rounded-full text-5xl grid'><GrDown className='m-auto p-2 font-' /></div>
                                        </div>
                                    </Link>
                                </div>
                                {/* responsive mobile project image */}
                                <div className='grid sm:hidden gap-2'>
                                    {selectedProject.moreImages.map((imgUrl) =>
                                        <img key={imgUrl} className='m-auto w-full object-cover h-56 md:h-72 lg:h-80 xl:h-92' alt='detail image' src={serverUrl+"/"+imgUrl} />
                                    )}
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
                        {
                            projects.length > 0 ?
                                <ProjectsProjectsSection projects={projects} /> : <></>
                        }
                    </div>

                </div>
            </Layout>
        </div>
    );
}



export async function getStaticProps() {
    try {
        let res = await fetch(`${process.env.url}/api/projects`);
        let projects = await res.json();
        return {
            props: {
                projects: projects,
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error("error happened while fetching projects : ", error)
        return {
            props: {
                projects: [],
                //       error: error,
            }
        };
    }
}