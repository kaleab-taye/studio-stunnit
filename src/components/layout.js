import React from 'react'
import FooterSection from './sections/footerSection'

export default function Layout({ children }) {
    return (
    <div>
        <div>{children}</div>
        <div>
            <FooterSection />
        </div>
    </div>
    )
}
