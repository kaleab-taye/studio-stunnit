import React from 'react'

export default function FounderCard({ founder }) {
  return (
    <div className='flex flex-col gap-4 items-center w-full rounded-md bg-surface scroll py-14 px-6 sm:px-10 text-center h-full'>
      <div className='space-y-8 flex flex-col items-center'>
        {/* <img src={founder.avatarUrl} alt={founder.name} className="w-[150px] h-[150px] rounded-full object-cover" /> */}
        <div>
          <h3 className='font-bold text-xl md:text-lg lg2:text-xl'>
            {founder.name}
          </h3>
          <p className='text-primary text-xs md:text-xs'>
            {founder.position}
          </p>
        </div>
      </div>
      <div>
        <p className='text-xs  leading-8 xl:max-h-[400px] overflow-auto scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-200 pr-7'>
          {
            '"' + founder.description + '"'
          }
        </p>
      </div>
    </div>
  )
}
