import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import NavbarItem from './navbarItem'
import logo from '../../public/SVG/Asset_26.svg'
import Button from './button'
import { FiMenu } from 'react-icons/fi';
import LeftRightAligner from './left-right-aligner'
import Link from 'next/link'
import { Drawer } from '@mui/material'
import { useRouter } from 'next/router'


export default function Navbar() {

    const [drawerState, toggleDrawer] = useState(false)
    let currentPage = ''
    const router = useRouter()
    useEffect(() => {
        currentPage = router.pathname
    }, [router])

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
                        <NavbarItem name='services' path='/services' />
                        <NavbarItem name='projects' path='/projects' />
                        <NavbarItem name='about us' path='/about_us' />
                        <NavbarItem name='testimonials' path='/testimonials' />
                        <NavbarItem name="faqs" path='/faq' />
                    </div>
                    <Link href='/getInTouch'>
                        <Button name='get in touch' />
                    </Link>
                    <div className='my-auto grid md:hidden cursor-pointer'>
                        <div onClick={() => toggleDrawer(true)}>
                            <FiMenu className='w-[40px] h-[40px]' />
                        </div>
                    </div>


                </div>
            </div>
            <Drawer
                anchor='right'
                open={drawerState}
                onClose={() => toggleDrawer(false)}
            >
                <div className='grid-flow-row grid my-5 mx-5'>
                    <Link href='/'>
                        <div className={router.pathname == '/' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-bold'}>
                            Home
                        </div>
                    </Link>
                    <Link href='/services'>
                        <div className={router.pathname == '/services' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-bold'}>
                            Services
                        </div>
                    </Link>
                    <Link href='/projects'>
                        <div className={router.pathname == '/projects' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-bold'}>
                            Projects
                        </div>
                    </Link>
                    <Link href='/about_us'>
                        <div className={router.pathname == '/about_us' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-bold'}>
                            About Us
                        </div>
                    </Link>
                    <Link href='/testimonials'>
                    <div className={router.pathname == '/testimonials' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-bold'}>
                            Testimonials
                        </div>
                    </Link>
                    <Link href='/faq'>
                    <div className={router.pathname == '/faq' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-bold'}>
                            FAQ&apos;s
                        </div>
                    </Link>

                </div>
            </Drawer>
        </LeftRightAligner>
    )
}
