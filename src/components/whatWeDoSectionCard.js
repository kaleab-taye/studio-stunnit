import React from 'react'

export default function WhatWeDoSectionCard({ heading, description, children }) {
    return (
        <div className='grid max-w-[350px] sm:max-w-[380px] bg-surface text-center py-8 px-6 gap-4 rounded-md mx-auto '>
            <div className='mx-auto'>{children}</div>
            <div className='grid gap-2'>

                <div className='font-semibold text-md'>{heading}</div>
                <div className='text-[12.5px] opacity-90 leading-9'>{description}</div>
            </div>
        </div>
    )
}
