import React from 'react'

export default function StageIcon({ status, name, desc }) {
    let passed = "bg-accentColor grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor"
    let notPassed = "bg-darkGray grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor"
    return (
        <div className='grid gap-[2px]'>
                <div className={status == 'passed' ? passed : notPassed}>
                    <div className='m-auto'>{name}</div>
                </div>
                <div className='m-auto uppercase opacity-70 text-sm'>{desc}</div>
        </div>
    )
}
