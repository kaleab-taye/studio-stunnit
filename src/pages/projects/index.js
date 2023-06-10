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
import img1 from '../../../public/images/Asset_14.png.webp'
import img2 from '../../../public/images/Asset_20.png.webp'
import ProjectsProjectsSection from '../../components/projectsProjectsSection';


export default function Index({ projects }) {

    console.log('projjjj', projects)

    const router = useRouter()
    const [selectedProject, setSelectedProject] = useState(-1);
    const [smallScreenFullTextContent, setSmallScreenFullTextContent] = useState(false)
    const childDesign = 'w-10 h-10 bg-red-500'

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


        window.addEventListener('wheel', function(event) {
            const deltaX = event.deltaX;
            const deltaY = event.deltaY;

            // if (deltaX > 0) {
            //   // Scrolling to the right
            // } else if (deltaX < 0) {
            //   // Scrolling to the left
            // }

            if (deltaY > 0) {
                // Scrolling down
              scrollDirection='down'
            } else if (deltaY < 0) {
                // Scrolling up
              scrollDirection='up'
            }
        });


        container?.addEventListener('wheel', (event) => {

            // Check if horizontal scrolling is needed
            if (content.scrollWidth > container.clientWidth) {
                // Prevent vertical scrolling


                // Scroll horizontally
                // if(isHorizontalScrolling && event.deltaY){
                //     console.log('isHorizontalScrolling', isHorizontalScrolling , event.deltaY )



                // }

                // Update horizontal scrolling state
                isHorizontalScrolling = true;
                console.log(content.scrollLeft + container.clientWidth, content.scrollWidth, content.scrollLeft, content.scrollWidth - content.clientWidth)

                if(content.scrollLeft<=1 && scrollDirection=='down'){
                    //horizontal
                    console.log('condition 1')
                    event.preventDefault();
                    content.scrollLeft += event.deltaY;
                }else if(content.scrollLeft<=1 && scrollDirection=='up'){
                    // vertical
                    console.log('condition 2')

                }else if(content.scrollLeft>= content.scrollWidth - content.clientWidth && scrollDirection=='up'){
                    //horizontal
                    console.log('condition 3')

                    event.preventDefault();
                    content.scrollLeft += event.deltaY;
                }else if(content.scrollLeft>= content.scrollWidth - content.clientWidth && scrollDirection=='down'){
                    //vertical
                    console.log('condition 4')

                }else{
                    console.log('condition 5' , content.scrollLeft, scrollDirection)


                    // Check if horizontal scrolling has reached the end
                    if (content.scrollLeft + container.clientWidth > content.scrollWidth ||
                        content.scrollLeft < 0) {
                        // Reset horizontal scrolling state when horizontal limit is reached
                        isHorizontalScrolling = false;
                        console.log('vertically scrolling')
                        // content.scrollTop += event.deltaY;
                    } else {
                        isHorizontalScrolling = true;
                        console.log('horizontally scrolling')
                        event.preventDefault();
                        content.scrollLeft += event.deltaY;
                    }
                }

            }
            // else {
            //     console.log('else clicked')
            //     // If not horizontally scrolling, scroll vertically
            //     content.scrollTop += event.deltaY;
            // }

            // if(!isHorizontalScrolling && event.deltaY){
            //     // console.log('isHorizontalScrolling', isHorizontalScrolling , event.deltaY )

            //     content.scrollTop += event.deltaY;

            // }
        });

        // content?.addEventListener('scroll', () => {
        //     // Reset horizontal scrolling state when horizontal scrolling ends
        //     if (!content.scrollLeft && isHorizontalScrolling) {
        //         console.log('check')
        //         isHorizontalScrolling = false;
        //     }
        // });

        // end
    }, [selectedProject])

    return (
        <div>


            <Layout>
                <Navbar />
                <div className='grid gap-2 '>
                    {selectedProject == -1 ? <></> : <div >
                       
                        <div id='container' className='hidden sm:grid' >
                            <div id='content' className=''>
                             
                                {selectedProject.moreImages.map((imgUrl) =>
                                    // <img key={imgUrl} className='snap-center m-auto object-cover h-56 sm:h-[372px] lg:h-[472px]' alt='detail image' src={imgUrl} />
                                    <div key={imgUrl} className='item h-[500px] border-2'>
                                        <img key={imgUrl} className=' object-cover object-center w-full h-full' alt='detail image' src={imgUrl} />
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
    // try {
    //     let res = await fetch(`${process.env.url}/projects`);
    //     let projects = await res.json();
    //     return {
    //         props: {
    //             projects: projects,
    //         },
    //         revalidate: 10,
    //     };
    // } catch (error) {
    //     console.error("error happened while fetching projects : ", error)

    //     return {
    //         props: {
    //             projects: [],
    //             //       error: error,
    //         }
    //     };
    // }

    return {
        props: {
            projects: [
                {
                    "id": "0dd24843-1cb3-4d7e-8f80-d2683a19cd8d",
                    "title": "K Murthy Project",
                    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamd exerci tation ullamcorper sus- cipit lobortis nisl uttate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                    "mainImage": "/images/hero/hero1.jpg.webp",
                    "moreImages": [
                        "/projects/myBhoojaDaughterRoomView/01.png.webp",
                        "/projects/myBhoojaDaughterRoomView/10.png.webp",
                        "/projects/myBhoojaDaughterRoomView/11.png.webp",
                        "/projects/myBhoojaDaughterRoomView/12.png.webp",
                        "/projects/myBhoojaDaughterRoomView/13.png.webp",
                        "/projects/myBhoojaDaughterRoomView/14.png.webp",
                    ],
                    "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamd exerci tation ullamcorper sus- cipit lobortis nisl uttate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                    "viewCount": 0
                }, {
                    "id": "0dd24843-1cb3-4d7e-8f80-d2683a519cd8d",
                    "title": "My Home Project",
                    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamd exerci tation ullamcorper sus- cipit lobortis nisl uttate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                    "mainImage": "/images/hero/hero2.jpg.webp",
                    "moreImages": [
                        "/projects/myBhoojaDaughterRoomView/02.png.webp",
                        "/projects/myBhoojaDaughterRoomView/03.png.webp",
                        "/projects/myBhoojaDaughterRoomView/04.png.webp",
                        "/projects/myBhoojaDaughterRoomView/05.png.webp",
                        "/projects/myBhoojaDaughterRoomView/06.png.webp",
                        "/projects/myBhoojaDaughterRoomView/07.png.webp",
                        "/projects/myBhoojaDaughterRoomView/08.png.webp"
                    ],
                    "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamd exerci tation ullamcorper sus- cipit lobortis nisl uttate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                    "viewCount": 0
                }
            ],
            //       error: error,
        }
    };

}