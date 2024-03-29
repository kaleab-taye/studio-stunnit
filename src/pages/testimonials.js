import { Carousel } from 'flowbite-react'
import React, { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import YouTube from 'react-youtube'
import Layout from '../components/layout'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import Placeholder from '../components/placeholder'
import SeoHeader from '../components/seoHeader'
import TestimonialCard from '../components/testimonial-card'



export default function Testimonials({ testimonials, testimonialsYT }) {
    const [currentProject, setCurrentProject] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loadingState, setLoadingState] = useState(true)


    const opts =

    {
        small: {
            height: '300px',
            width: '400px',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            }
        },
        medium: {
            height: '350px',
            width: '550px',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            }
        },
        large: {
            height: '500px',
            width: '800px',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            }
        }
    }
    // const testimonialsYT = [{ videoId: '2g811Eo7K8U', title: "vid-1" }, { videoId: '2g811Eo7K8U', title: "vid-1" }, { videoId: '2g811Eo7K8U', title: "vid-1" }]
    // <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={(e) => { e.target.pauseVideo(); }} />
    return (
        <div>
            <SeoHeader pageName="Testimonials" />
            <Layout>
                <Navbar />
                <LeftRightAligner>
                    <div className='m-auto text-center mt-10 mb-3 gap-2 grid'>
                        <div className='uppercase font-bold text-3xl'>testimonials</div>
                        <div className='font-light text-sm'>Here are some of our honest endorsement of our service that comes from our previous customers.</div>
                    </div>

                    <div className='w-full grid relative my-4'>
                        <div className=' w-full h-[300px] sm:h-[350px] md:h-[500px] grid'>
                            <Carousel slide={false} leftControl={<MdArrowBackIosNew className='grid text-4xl text-darkGray hover:text-onSurface m-auto' />} rightControl={<MdArrowForwardIos className='m-auto text-4xl text-darkGray hover:text-onSurface' />} className='m-auto' indicators={false}>
                                {
                                    testimonialsYT.map(
                                        (testimonial, index) =>
                                        (
                                            // <div key={index} className="w-[92%] md:w-[80%] xl:w-[70%] max-w-[1126px] md:h-[300px]">
                                            <div key={index} className="w-[100%] h-[100%] grid">
                                                <div className='m-auto grid sm:hidden'>
                                                    <Placeholder isLoading={loadingState}>

                                                        <YouTube iframeClassName='' onReady={(e) => setLoadingState(false)} videoId={youtubeVIDExtractor(testimonial.youtubeLink)} opts={opts.small} />
                                                    </Placeholder>
                                                    {/* {loadingState ? <div className='absolute w-full h-full bg-surface animate-pulse '>
                                                    </div> : <div></div>} */}
                                                </div>
                                                <div className='m-auto hidden sm:grid md:hidden bg-red-500'>
                                                    <Placeholder isLoading={loadingState}>

                                                        <YouTube iframeClassName='' onReady={(e) => setLoadingState(false)} videoId={youtubeVIDExtractor(testimonial.youtubeLink)} opts={opts.medium} />
                                                    </Placeholder>
                                                    {/* {loadingState ? <div className='absolute w-full h-full bg-surface animate-pulse '>

                                                    </div> : <div></div>} */}
                                                    {/* <YouTube onReady={(e) => finishedLoading(e, setLoadingState)} videoId={testimonial.videoId} opts={opts.medium} /> */}
                                                </div>
                                                <div className='hidden m-auto md:grid relative'>
                                                    <Placeholder isLoading={loadingState}>

                                                        <YouTube iframeClassName='' onReady={(e) => setLoadingState(false)} videoId={youtubeVIDExtractor(testimonial.youtubeLink)} opts={opts.large} />
                                                    </Placeholder>
                                                    {/* {loadingState ? <div className='absolute w-full h-full bg-surface animate-pulse '>

                                                    </div> : <div></div>} */}
                                                    {/* <YouTube onReady={(e) => finishedLoading(e, setLoadingState)} videoId={testimonial.videoId} opts={opts.large} /> */}
                                                </div>

                                            </div>
                                        )
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                </LeftRightAligner>
                {/* line separator */}
                <div className='grid'>
                    <div className='h-[30px] bg-primary my-10'>

                    </div>
                </div>

                <LeftRightAligner>

                    <div className="my-16 flex flex-col gap-12 xl:gap-20 items-center pb-10">
                        {
                            testimonials.map(
                                (testimonial, index) =>
                                (
                                    <div key={index} className="w-[92%] md:w-[80%] xl:w-[70%] max-w-[1126px] md:h-[300px]">
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                )
                            )
                        }
                    </div>
                </LeftRightAligner>
            </Layout>
        </div>
    )
}

function finishedLoading(e, setLoadingState) {
    e.target.pauseVideo();

    setLoadingState(true);
}

function youtubeVIDExtractor(ytLink) {

    let res = ytLink.split('v=')
    return res[1]
}



export async function getStaticProps() {
    try {
        let testimonialsRes = await fetch(`${process.env.url}/api/testimonials`);
        let testimonials = await testimonialsRes.json()

        let testimonialsYTRes = await fetch(`${process.env.url}/api/testimonial-youtube-links`);
        let testimonialsYT = await testimonialsYTRes.json()

        return {
            props: {
                testimonials: testimonials,
                testimonialsYT: testimonialsYT,
            },
            revalidate: 10,
        };
    } catch (error) {
        return {
            props: {
                testimonials: [],
                testimonialsYT: [],
                //       error: error,
            }
        };
    }

    // return {
    //     props: {
    //         testimonials: [
    //             {
    //                 "id": "a59a6f34-b16c-4ef0-92b4-2c956d1db5e9",
    //                 "avatarUrl": "/images/Asset_12.png.webp",
    //                 "name": "Mr Murthy,",
    //                 "occupation": "My Home Bhooja",
    //                 "rating": 5,
    //                 "description": "Luxury Designs. Superb Detailing and Awesome looking. Marvellous outlook"
    //             },
    //             {
    //                 "id": "2e7092d6-6306-4f08-bd77-d660df9c7335",
    //                 "avatarUrl": "/images/Asset_17.png.webp",
    //                 "name": "Ms Aruna,",
    //                 "occupation": "My Home Bhooja",
    //                 "rating": 5,
    //                 "description": "Elegant Designs. Great Finish and Well implemented"
    //             },
    //             {
    //                 "id": "c6bf8d89-a218-4d59-afe6-76271f379c08",
    //                 "avatarUrl": "/images/Asset_17.png.webp",
    //                 "name": "Mr Raju,",
    //                 "occupation": "My Home Bhooja",
    //                 "rating": 4,
    //                 "description": "Excellent Designs. Liked a lot"
    //             },
    //             {
    //                 "id": "1ca92c62-e0bf-47bf-b4df-08373ac90792",
    //                 "avatarUrl": "/images/Asset_12.png.webp",
    //                 "name": "Ms Aruna,",
    //                 "occupation": "DSR",
    //                 "rating": 5,
    //                 "description": "Grand styling and Tasteful looking designs"
    //             },
    //             {
    //                 "id": "1ca92c62-e0bf-47bf-b4df-08373ac9k792",
    //                 "avatarUrl": "/images/Asset_12.png.webp",
    //                 "name": "Ms Sujatha,",
    //                 "occupation": "Prestige",
    //                 "rating": 5,
    //                 "description": "Creative concepts Designs with perfect execution"
    //             }
    //         ],
    //         testimonialsYT: [
    //             {
    //                 "id": "4a346661-4072-4f53-9776-deaa3e0cd75d",
    //                 "youtubeLink": "https://www.youtube.com/watch?v=QvrMNDv6iYU"
    //             },
    //             {
    //                 "id": "1f069693-109f-4458-9b2c-9cc25f2b39ae",
    //                 "youtubeLink": "https://www.youtube.com/watch?v=P6KTCjwmdzs"
    //             }
    //         ],
    //         //       error: error,
    //     }
    // };


}