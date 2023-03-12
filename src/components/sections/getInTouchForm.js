import React from 'react'
import Button from '../button'

export default function GetInTouchForm() {
    return (
        <div className=' gap-5 grid border-[2px] border-accentColor relative p-10 m-5'>
            <div className='absolute top-[-25px] left-[50%] bg-accentColor mx-auto p-3 rounded-full text-primaryColor'>OR</div>
            <div className='mx-auto font-semibold text-lg'>Enter your details below and we’ll contact you within 24 hours</div>
            <div className='grid grid-flow-col gap-4'>
                <div className='grid grid-flow-row gap-3'>
                    <input placeholder='NAME' className='text-sm border-2 border-accentColor rounded p-2' />
                    <input placeholder='EMAIL' className='text-sm border-2 border-accentColor rounded p-2' />
                    <input placeholder='PHONE NUMBER' className='text-sm border-2 border-accentColor rounded p-2' />
                </div>
                <div>
                    <textarea placeholder='MESSAGE' className='w-[100%] h-[100%] text-sm border-2 border-accentColor rounded p-2' />
                </div>
            </div>
            <div className='mx-auto'><Button padding='px-14' name='Submit'/></div>
        </div>
    )
}
