import Image from 'next/image'
import React from 'react'
import NavbarItem from './navbarItem'
import logo from '../../public/SVG/Asset_26.svg'
import Button from './button'
import { FiMenu } from 'react-icons/fi';
import LeftRightAligner from './left-right-aligner'


export default function Navbar() {
    return (
        <LeftRightAligner>

            <div className='sticky top-0 py-3 grid grid-flow-col'>
                {/* logo start */}
                <div className='mr-auto my-auto grid'>
                    <Image className='max-w-[70px]' src={logo} />
                </div>
                {/* nav items start */}
                <div className=' ml-auto my-auto grid grid-flow-col gap-8'>
                    <div className='my-auto grid-flow-col gap-8 hidden md:grid'>
                        <NavbarItem name='Home' path='/' />
                        <NavbarItem name='service' path='/service' />
                        <NavbarItem name='projects' path='/projects'/>
                        <NavbarItem name='about us' path='/about_us'/>
                        <NavbarItem name='testimonials' path='/testimonials' />
                        <NavbarItem name='faq' path='/faq'/>
                    </div>
                    <Button name='get in touch' />
                    <div className='my-auto grid md:hidden'>
                        <FiMenu className='w-[40px] h-[40px]' />
                    </div>

                </div>
            </div>
          
        </LeftRightAligner>
    )
}
