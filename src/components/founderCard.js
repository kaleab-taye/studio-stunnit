import Image from 'next/image'
import React from 'react'

export default function FounderCard({ founder }) {
  return (
    <div className='flex flex-col gap-4 items-center w-full rounded-md bg-[#ececec] scroll py-14 px-6 sm:px-10 text-center h-full'>
      <div className='space-y-8 flex flex-col items-center'>
        <img src={founder.avatarUrl} alt={founder.name} className="w-[70%]" />
        <div>
          <h3 className='font-bold text-2xl'>
            {founder.name}
          </h3>
          <p className='text-primary text-lg'>
            {founder.position}
          </p>
        </div>
      </div>
      <div>
        <p className='xl:max-h-[400px] overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-300 pr-7'>
          {
            '"' + founder.description + '"'
          }
        </p>
      </div>
    </div>
  )
}
