/* eslint-disable @next/next/no-img-element */
import React from 'react'
import RatingStars from './rating-stars'

export default function TestimonialCard({ testimonial }) {
    return (
        <div className='flex flex-col md:flex-row gap-10 md:gap-x-5 lg2:gap-x-2 items-center justify-around w-full h-fit md:h-full px-6 py-24 md:p-10 rounded-md bg-surface scroll'>
            <div className='flex justify-center'>
                <img
                    className={"w-[150px] h-[150px] rounded-full object-cover"}
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                />
            </div>
            <div className='col-span-4 flex flex-col gap-10 md:gap-4 h-[80%] md:w-[70%]'>
                <div className='flex flex-col md:flex-row md:justify-between items-center max-md:gap-4'>
                    <div className='flex flex-col md:flex-row  items-center gap-2 md:gap-2'>
                        <h3 className='font-bold text-xl md:text-lg lg2:text-xl'>{testimonial.name}</h3>
                        <h5 className='text-xs md:text-xs text-primary max-md:text-center'>{testimonial.occupation}</h5>
                    </div>
                    <div>
                        <RatingStars ratingCount={testimonial.rating} />
                    </div>
                </div>
                <div className='overflow-auto h-fit text-xs  leading-8  md:h-full max-md:text-center font-common_font scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-200 md:pr-7'>
                    {
                        '"' + testimonial.description + '"'
                    }
                </div>
            </div>
        </div>
    )
}
