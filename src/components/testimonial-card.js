/* eslint-disable @next/next/no-img-element */
import React from 'react'
import RatingStars from './rating-stars'

export default function TestimonialCard({ testimonial }) {
    return (
        <div className='flex flex-col md:flex-row gap-10 md:gap-x-5 lg2:gap-x-2 items-center justify-around w-full h-fit md:h-full px-6 py-24 md:p-10 rounded-md bg-[#ececec] scroll'>
            <div className='flex justify-center'>
                <img
                    className={"w-[230px] md:w-[170px] rounded-full"}
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                />
            </div>
            <div className='col-span-4 flex flex-col gap-10 md:gap-4 h-[80%] md:w-[70%]'>
                <div className='flex flex-col md:flex-row md:justify-between items-center max-md:gap-4'>
                    <div className='flex flex-col md:flex-row  items-center gap-2 md:gap-2'>
                        <h3 className='font-bold text-4xl md:text-2xl lg2:text-3xl'>{testimonial.name},</h3>
                        <h5 className='text-xl md:text-sm text-primary max-md:text-center'>{testimonial.occupation}</h5>
                    </div>
                    <div>
                        <RatingStars ratingCount={testimonial.rating} />
                    </div>
                </div>
                <div className='overflow-auto h-fit max-md:text-md md:h-full max-md:text-center font-common_font scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-400 md:pr-7'>
                    {
                        '"' + testimonial.description + '"'
                    }
                </div>
            </div>
        </div>
    )
}
