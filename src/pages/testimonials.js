import Layout from '@/components/layout'
import LeftRightAligner from '@/components/left-right-aligner'
import Navbar from '@/components/navbar'
import TestimonialCard from '@/components/testimonial-card'
import { Carousel } from 'flowbite-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Slider from 'react-slick'
import YouTube from 'react-youtube'


export default function Testimonials() {
    const [currentProject, setCurrentProject] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)


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
            width: '700px',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            }
        }
    }

    const testimonialsYT = [{ videoId: '2g811Eo7K8U', title: "vid-1" }, { videoId: '2g811Eo7K8U', title: "vid-1" }, { videoId: '2g811Eo7K8U', title: "vid-1" }]
    // <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={(e) => { e.target.pauseVideo(); }} />

    return (
        <div>
            <Layout>
                <Navbar />
                <LeftRightAligner>
                    <div className='m-auto text-center mt-10 mb-3 gap-2 grid'>
                        <div className='uppercase font-bold text-3xl'>testimonials</div>
                        <div className='font-light text-sm'>Here are some of our honest endorsement of our service that comes from our previous customers.</div>
                    </div>

                    <div className='w-full grid relative my-4'>
                        {/* <div className='opacity-0 my-10 h-[590px] w-[640px] bg-red-600'>

                            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={(e) => { e.target.pauseVideo(); }} />
                        </div> */}
                        <div className=' w-full h-[300px] sm:h-[350px] md:h-[500px] grid'>

                            <Carousel slide={false} leftControl={<MdArrowBackIosNew className='grid text-4xl text-darkGray hover:text-onSurface m-auto' />} rightControl={<MdArrowForwardIos className='m-auto text-4xl text-darkGray hover:text-onSurface' />} className='m-auto' indicators={false}>
                                {
                                    testimonialsYT.map(
                                        (testimonial, index) =>
                                        (
                                            // <div key={index} className="w-[92%] md:w-[80%] xl:w-[70%] max-w-[1126px] md:h-[300px]">
                                            <div key={index} className="w-[100%] h-[100%] grid">
                                                <div className='m-auto grid sm:hidden'>

                                                    <YouTube videoId={testimonial.videoId} opts={opts.small} onReady={(e) => { e.target.pauseVideo(); }} />
                                                </div>
                                                <div className='m-auto hidden sm:grid md:hidden'>

                                                    <YouTube videoId={testimonial.videoId} opts={opts.medium} onReady={(e) => { e.target.pauseVideo(); }} />
                                                </div>
                                                <div className='hidden m-auto md:grid'>

                                                    <YouTube videoId={testimonial.videoId} opts={opts.large} onReady={(e) => { e.target.pauseVideo(); }} />
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




const testimonials = [
    {
        customerName: "K Murthy",
        position: "Director Manager, K Murthy",
        imageUrl: "/images/Asset 17.png",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
        rating: 5
    },
    {
        customerName: "Aruna",
        position: "Director Manager, K Murthy",
        imageUrl: "/images/Asset 12.png",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
        rating: 4
    },
    {
        customerName: "Sanjeev",
        position: "Director Manager, K Murthy",
        imageUrl: "/images/Asset 18.png",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similiqu", rating: 4
    },
    {
        customerName: "Punith",
        position: "Director Manager, K Murthy",
        imageUrl: "/images/Asset 19.png",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
        rating: 5
    }
]