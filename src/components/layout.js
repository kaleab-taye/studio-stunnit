import React from 'react'
import FloatingButton from './floatingButton'
import FooterSection from './sections/footerSection'

export default function Layout({ children }) {
    return (
    <div>
        <div>{children}</div>
        <div>
            <FloatingButton/>
            <FooterSection />
        </div>
    </div>
    )
}
