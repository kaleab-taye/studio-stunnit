import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
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

                    <div className='relative'>
                        <input placeholder='PHONE NUMBER' className='w-full text-sm border-2 border-primary/70 rounded p-2 bg-surface' />
                        <div className='absolute hidden md:grid ml-5'>

                            <FormControlLabel
                                className='text-xs'
                                label={<div className='text-xs text-primary'>Contact Us On Whatsapp</div>}
                                control={<Checkbox
                                    checkedIcon={<FaCheckCircle className='text-primary w-[14px] h-[14px]' />}
                                    icon={<div className='border border-primary w-[14px] mr-auto h-[14px] rounded-full'></div>} />}
                            />
                        </div>

                    </div>

                </div>
                <div>
                    <textarea placeholder='MESSAGE' className='w-[100%] h-[100%] min-h-[100px] text-sm border-2 border-primary/70 rounded p-2 bg-surface' />
                </div>
            </div>
            <div className='mx-auto'>
                <Button padding='px-14' name='Submit' />
            </div>
        </div>
    )
}
