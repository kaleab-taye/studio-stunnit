import React from 'react'
import LeftRightAligner from '../left-right-aligner'
import WhyChooseUsCard from '../whyChooseUsCard'

export default function WhyChooseUsSection() {
  return (
    <div className='bg-background2 py-8'>

      <LeftRightAligner>
        <div className='mx-auto max-w-[1100px] gap-8 grid grid-flow-row md:grid-flow-col text-center md:text-left'>
          <div className='mb-auto text-xl font-bold uppercase'>why choose us</div>
          <div className='grid grid-flow-col gap-2'>
            <div className='grid grid-flow-row md:grid-flow-col gap-2'>
              <WhyChooseUsCard desc='On-time delivery' />
              <WhyChooseUsCard desc='We have the finest quality' />
            </div>
            <div className='grid grid-flow-row md:grid-flow-col gap-2'>
              <WhyChooseUsCard desc='Fairly estimated price quote' />
              <WhyChooseUsCard desc='Safety is our priority' />
            </div>
          </div>
        </div>

      </LeftRightAligner>


    </div>
  )
}