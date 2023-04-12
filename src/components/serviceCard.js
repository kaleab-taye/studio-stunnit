import React, { useState } from 'react'

export default function ServiceCard({ heading,content, direction,children }) {
    const [smallScreenFullTextContent, setSmallScreenFullTextContent] = useState(false)
    const [smallScreenFullTextContent1, setSmallScreenFullTextContent1] = useState(false)
    let parentStyle = ' grid md:grid-flow-col gap-4 md:grid-cols-3'
    let commonHeading = 'uppercase font-bold text-2xl my-auto md:col-span-1 mx-auto md:max-w-[150px]'
    let commonChildren = 'whitespace-pre-line leading-8 text-[0.8rem] md:col-span-2 md:max-h-[265px] overflow-auto scrollbar scrollbar-thumb-[#cfcfcf] scrollbar-track-[#f3f3f3] mx-auto'

    return (
        direction == 'rtl' ?
            <div className={parentStyle}>
                <div className={commonChildren + ' direction-rtl hidden md:grid '}>
                    {content}
                </div>
                <div className={commonHeading}>
                    {heading}
                </div>
                <div className={commonChildren + ' direction-rtl grid md:hidden '}>
                    {smallScreenFullTextContent ?content :content.substr(0, 260) + ' . . .'}
                    {smallScreenFullTextContent == false ? <div className=' mx-auto border px-5 rounded cursor-pointer' onClick={() => setSmallScreenFullTextContent(true)}>
                        Read More
                    </div> : <></>}
                </div>
            </div>
            :
            <div className={parentStyle}>
                <div className={commonHeading}>
                    {heading}
                </div>
                <div className={commonChildren + ' direction-ltr hidden md:grid'}>
                    {content}
                </div>
                <div className={commonChildren + ' direction-ltr grid md:hidden'}>
                    {smallScreenFullTextContent1 ?content :content.substr(0, 260) + ' . . .'}
                    {smallScreenFullTextContent1 == false ? <div className='md:hidden mx-auto border px-5 rounded cursor-pointer' onClick={() => setSmallScreenFullTextContent1(true)}>
                        Read More
                    </div> : <></>}
                </div>
            </div>
    )
}
