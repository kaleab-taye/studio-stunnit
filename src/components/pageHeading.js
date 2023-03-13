import Image from 'next/image'
import React from 'react'

export default function PageHeading({image, name}) {
    return (
        <div className='relative grid'>
            <Image className='brightness-90' src={image} />
            <div className='absolute w-full h-full grid'>

                <div className='uppercase m-auto text-4xl font-bold text-primaryColor'>{name}</div>
            </div>
        </div>
    )
}
