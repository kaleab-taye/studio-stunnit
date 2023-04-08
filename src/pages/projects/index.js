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

        const container = document.getElementById('container');
        const content = document.getElementById('content');
        let isHorizontalScrolling = false; // Track horizontal scrolling state

        container?.addEventListener('wheel', (event) => {
            // Check if horizontal scrolling is needed
            if (content.scrollWidth > container.clientWidth) {
                // Prevent vertical scrolling
                event.preventDefault();

                // Scroll horizontally
                // if(isHorizontalScrolling && event.deltaY){
                //     console.log('isHorizontalScrolling', isHorizontalScrolling , event.deltaY )
                    
                    content.scrollLeft += event.deltaY;
    
                // }

                // Update horizontal scrolling state
                isHorizontalScrolling = true;

                // Check if horizontal scrolling has reached the end
                if (content.scrollLeft + container.clientWidth >= content.scrollWidth ||
                    content.scrollLeft <= 0) {
                    // Reset horizontal scrolling state when horizontal limit is reached
                    isHorizontalScrolling = false;
                    console.log('vertically scrolling')
                }else{
                    isHorizontalScrolling = true;
                    console.log('horizontally scrolling')
                }
            }
            else {
                console.log('else clicked')
                // If not horizontally scrolling, scroll vertically
                content.scrollTop += event.deltaY;
            }

            if(!isHorizontalScrolling && event.deltaY){
                // console.log('isHorizontalScrolling', isHorizontalScrolling , event.deltaY )

                content.scrollTop += event.deltaY;

            }
        });

        // content?.addEventListener('scroll', () => {
        //     // Reset horizontal scrolling state when horizontal scrolling ends
        //     if (!content.scrollLeft && isHorizontalScrolling) {
        //         console.log('check')
        //         isHorizontalScrolling = false;
        //     }
        // });

    }, [selectedProject])

    return (
        <div>


            <Layout>
                <Navbar />
                <div className='grid gap-2 '>
                    {selectedProject == -1 ? <></> : <div >
                        {/* <div id='wrapper' className='height-screen overflow-hidden'> */}
                        {/* <div id="container">
                            <div id="content">
                                <div class="item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima magni recusandae ex dignissimos.</div>
                                <div class="item">Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa ratione ex, dicta aliquam voluptates! Odio vitae eum nobis dignissimos sunt ipsum repellendus totam optio distinctio. Laborum suscipit quia aperiam.</div>
                                <div class="item">Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla impedit, dolores ullam hic commodi nobis nam. Dolorem expedita laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a quibusdam inventore!</div>
                                <div class="item">Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa unde perspiciatis minima.</div>
                                <div class="item">Quaerat error dolorem aspernatur magni dicta ut consequuntur maxime tempore. Animi odio eos quod culpa nulla consectetur? Aperiam ipsam ducimus delectus reprehenderit unde, non laborum voluptate laboriosam, officiis at ea!</div>
                                <div class="item">Rem nobis facere provident magni minima iste commodi aliquam harum? Facere error quos cumque perspiciatis voluptatibus deserunt maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias ipsam placeat voluptas!</div>
                                <div class="item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima magni recusandae ex dignissimos.</div>
                                <div class="item">Magnam eveniet inventore assumenda ullam. At saepe voluptatibus sed dicta reiciendis, excepturi nisi perferendis, accusantium est suscipit tempora dolorum praesentium cupiditate doloribus non? Sint numquam recusandae dolore quis esse ea?</div>
                                <div class="item">Temporibus cum dolor minima consequatur esse veritatis enim nemo cupiditate laborum doloribus reiciendis perferendis, quas fugit earum rerum, at beatae alias amet aspernatur dolorem dolore error commodi. Perspiciatis, reiciendis amet!</div>
                                <div class="item">Vitae, tenetur beatae error corrupti odit expedita quisquam commodi ea aspernatur aliquid, eveniet reprehenderit sequi, similique maiores praesentium quam! Optio tenetur saepe unde voluptatem minus tempora maxime temporibus ducimus ullam!</div>
                            </div>
                        </div> */}
                        <div id='container' className='hidden sm:grid' >
                            <div id='content' className=''>
                                {/* <div id='horizontal-scrollable' className='grid snap-mandatory snap-x hidden sm:flex w-[100%] m-auto h-56 sm:h-[372px] lg:h-[472px] gap-3 overflow-x-auto overflow-y-hidden'> */}
                                {/* <div className='snap-center w-[400px] h-[10px] bg-red-500'></div> */}
                                {/* <div id='carousel' className='flex w-full h-full flex-nowrap	'> */}

                                {selectedProject.moreImages.map((imgUrl) =>
                                    // <img key={imgUrl} className='snap-center m-auto object-cover h-56 sm:h-[372px] lg:h-[472px]' alt='detail image' src={imgUrl} />
                                    <div key={imgUrl} className='h-[500px] w-[600px] border-2'>
                                        <img key={imgUrl} className='object-cover w-full h-full' alt='detail image' src={imgUrl} />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <hr /> */}
                        {/* <div id='container' >
                            <div id='content' className='grid snap-mandatory snap-x hidden sm:flex w-[100%] m-auto h-[68vh] gap-3 overflow-x-auto overflow-y-hidden'>
                                {selectedProject.moreImages.map((imgUrl) =>
                                    <img key={imgUrl} className='snap-center m-auto object-cover h-[65vh]' alt='detail image' src={imgUrl} />
                                )}
                            </div>
                        </div> */}
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
                    "mainImage": "/images/Asset_16.png",
                    "moreImages": [
                        "/images/Asset_16.png",
                        "/images/Asset_14.png",
                        "/images/Asset_15.png",
                        "/images/Asset_16.png",
                        "/images/Asset_14.png",
                        "/images/Asset_15.png"
                    ],
                    "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamd exerci tation ullamcorper sus- cipit lobortis nisl uttate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                    "viewCount": 0
                }, {
                    "id": "0dd24843-1cb3-4d7e-8f80-d2683a19cd8d",
                    "title": "K Murthy Project",
                    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamd exerci tation ullamcorper sus- cipit lobortis nisl uttate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                    "mainImage": "/images/Asset_15.png",
                    "moreImages": [
                        "/images/Asset_16.png",
                        "/images/Asset_14.png",
                        "/images/Asset_15.png",
                        "/images/Asset_16.png",
                        "/images/Asset_14.png",
                        "/images/Asset_15.png"
                    ],
                    "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamd exerci tation ullamcorper sus- cipit lobortis nisl uttate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et",
                    "viewCount": 0
                }
            ],
            //       error: error,
        }
    };

}