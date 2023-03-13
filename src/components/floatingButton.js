import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function FloatingButton() {
    return (

        <div className='hidden md:grid grid mx-auto fixed top-[30%] right-0 grid grid-flow-row'>
            {/* <div className='grid relative '> */}
            <div className='mx-auto p-[7px] bg-green-600 rounded-tl-lg'><BsWhatsapp className='w-5 h-5 m-px text-primaryColor' /></div>
            {/* </div> */}
            <div className='text-primaryColor bg-darkGray mx-auto p-1'><MdEmail className='w-7 h-7 ' /></div>
            <div className='h-20 '>
                <div className='bg-primary rounded-tr-lg grid absolute writing-mode-vertical-lr uppercase text-primaryColor text-sm font-light w-[100%] h-[100%]'>
                    <div className='m-auto'>
                        quick contact
                    </div>
                </div>
            </div>
        </div>
    )
}
