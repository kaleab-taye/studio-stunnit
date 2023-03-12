import React from 'react'

export default function WhatWeDoSectionCard({ heading, description, children }) {
    return (
        <div className='grid max-w-[300px] bg-background2 text-center py-8 px-6 gap-4 rounded-md mx-auto'>
            <div className='mx-auto'>{children}</div>
            <div className='grid gap-2'>

                <div className='font-semibold text-md'>{heading}</div>
                <div className='text-sm opacity-60'>{description}</div>
            </div>
        </div>
    )
}
