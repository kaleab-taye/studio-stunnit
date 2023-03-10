import Image from 'next/image'
import React from 'react'
import NavbarItem from './navbarItem'
import logo from '../../public/SVG/Asset_26.svg'
import Button from './button'

export default function Navbar() {
    return (
        <div className='bg-red-500 py-3 grid grid-flow-col mx-40'>
            {/* logo start */}
            <div className='mr-auto my-auto'>
                <Image className='max-w-[70px]' src={logo} />
            </div>
            {/* nav items start */}
            <div className='ml-auto my-auto grid grid-flow-col gap-8'>
                <NavbarItem name='Home' />
                <NavbarItem name='service' />
                <NavbarItem name='projects' />
                <NavbarItem name='about us' />
                <NavbarItem name='testimonials' />
                <NavbarItem name='faq' />
                <Button name='get in touch'/>
            </div>
        </div>
    )
}
