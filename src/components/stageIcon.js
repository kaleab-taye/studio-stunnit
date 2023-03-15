import React, { useEffect, useState } from 'react'

export default function StageIcon({ status, name, desc }) {

    const [state , setState] = useState("bg-darkGray grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor")

    useEffect(()=>{
        if(status=='passed'){
            setState("bg-primary grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor")
        }
        else{
            setState("bg-darkGray grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor")
        }
    },[status])

    // let passed = "bg-primary grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor"
    // let notPassed = "bg-darkGray grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor"
    return (
        <div className='grid gap-[2px] z-10'>
                <div className={state}>
                    <div className='m-auto'>{name}</div>
                </div>
                <div className='m-auto uppercase opacity-70 text-sm'>{desc}</div>
        </div>
    )
}
