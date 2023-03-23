import React from 'react'

export default function WhyChooseUsCard({desc}) {
  return (
    <div className='grid grid-flow-col gap-3 mr-auto mx-5'>
        <div className='bg-primary w-[12px] h-[12px] rounded-full mb-auto mt-2'></div>
        <div className='mb-auto text-sm lg:text-md text-left opacity-60 max-w-[130px]'>{desc}</div>
    </div>
  )
}
