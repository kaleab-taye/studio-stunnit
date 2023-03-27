import React from 'react'

export default function ServiceCard({ heading, children, direction }) {
    let parentStyle = ' grid md:grid-flow-col gap-4 md:grid-cols-3'
    let commonHeading = 'uppercase font-bold text-2xl my-auto md:col-span-1 mx-auto md:max-w-[150px]'
    let commonChildren = 'leading-loose font-light text-xs md:col-span-2 max-h-[200px] overflow-auto scrollbar scrollbar-thumb-[#cfcfcf] scrollbar-track-[#f3f3f3] mx-auto'

    return (
        direction == 'rtl' ?
            <div className={parentStyle}>
                <div className={commonChildren + ' direction-rtl hidden md:grid '}>
                    {children}
                </div>
                <div className={commonHeading}>
                    {heading}
                </div>
                <div className={commonChildren + ' direction-rtl grid md:hidden '}>
                    {children}
                </div>
            </div>
            :
            <div className={parentStyle}>
                <div className={commonHeading}>
                    {heading}
                </div>
                <div className={commonChildren + ' direction-ltr '}>
                    {children}
                </div>
            </div>
    )
}
