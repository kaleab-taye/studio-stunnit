import React from 'react'
import Button from '../button'

export default function GetInTouchForm() {
    return (
        <div className=' lg:min-w-[900px] gap-10 grid border-[2px] border-primary/70 relative py-10 px-5 md:p-12 md:m-5 rounded'>
            <div className='absolute top-[-25px] left-[45%] bg-primary mx-auto p-3 rounded-full text-primaryColor font-light '>OR</div>
            <div className='mx-auto font-semibold text-lg opacity-70 text-center'>Enter your details below and we’ll contact you within 24 hours</div>
            <div className='grid grid-flow-row md:grid-flow-col gap-4'>
                <div className='grid grid-flow-row gap-3'>
                    <input placeholder='NAME' className='text-sm border-2 border-primary/70 rounded p-2 bg-surface' />
                    <input placeholder='EMAIL' className='text-sm border-2 border-primary/70 rounded p-2 bg-surface' />
                    <input placeholder='PHONE NUMBER' className='text-sm border-2 border-primary/70 rounded p-2 bg-surface' />
                </div>
                <div>
                    <textarea placeholder='MESSAGE' className='w-[100%] h-[100%] min-h-[100px] text-sm border-2 border-primary/70 rounded p-2 bg-surface' />
                </div>
            </div>
            <div className='mx-auto'><Button padding='px-14' name='Submit'/></div>
        </div>
    )
}
