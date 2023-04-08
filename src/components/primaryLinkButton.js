import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function PrimaryLinkButton({ text }) {
  return (
    <div className='text-primary grid grid-flow-col gap-1 mr-auto font-semibold whitespace-nowrap'>{text}<IoIosArrowForward className='my-auto font-bold w-[20px] h-[20px]' />
    </div>
  )
}
