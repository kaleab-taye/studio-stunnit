/* eslint-disable @next/next/no-img-element */
import React from 'react'
import RatingStars from './rating-stars'

export default function TestimonialCard({ testimonial }) {
    return (
        <div className='flex gap-x-2 items-center justify-around w-full h-full p-10 rounded-md bg-gray-200 scroll'>
            <div className='flex justify-center'>
                <img
                    className={"w-[150px] rounded-full"}
                    src={testimonial.imageUrl}
                    alt={testimonial.customerName}
                />
            </div>
            <div className='col-span-4 flex flex-col gap-4 h-[80%] w-[70%]'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold text-3xl'>{testimonial.customerName},</h3>
                        <h5 className='text-sm'>{testimonial.position}</h5>
                    </div>
                    <div>
                        <RatingStars ratingCount={testimonial.rating} />
                    </div>
                </div>
                <div className='overflow-auto h-full  scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-300 pr-7'>
                        {
                            testimonial.detail
                        }
                </div>
            </div>
        </div>
    )
}
