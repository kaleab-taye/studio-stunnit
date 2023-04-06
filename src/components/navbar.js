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
    const [getInTouchPageSelected, setGetInTouchPageSelected] = useState('text-center mx-auto underline-offset-8 rounded-md text-sm m-auto bg-primary text-onPrimary px-5 py-3 hover:underline')
    
    const router = useRouter()
    useEffect(() => {
        if (router.pathname == '/getInTouch') {
            setGetInTouchPageSelected('text-center mx-auto underline-offset-8 rounded-md text-sm m-auto bg-primary text-onPrimary px-5 py-3 underline')
        }
    }, [router])

    return (
        <LeftRightAligner>

            <div className='sticky top-0 py-3 grid grid-flow-col gap-4'>
                {/* logo start */}
                <div className='mr-auto my-auto grid my-auto'>
                    <Link href='/'>
                        <Image className='max-w-[40px]' src={logo} alt='logo' />
                    </Link>
                </div>
                {/* nav items start */}
                <div className='ml-auto my-auto grid grid-flow-col md:gap-4 lg:gap-8'>
                    <div className='my-auto grid-flow-col md:gap-4 lg:gap-8 hidden md:grid'>
                        <NavbarItem name='Home' path='/' />
                        <NavbarItem name='services' path='/services' />
                        <NavbarItem name='projects' path='/projects' />
                        <NavbarItem name='about us' path='/about_us' />
                        <NavbarItem name='testimonials' path='/testimonials' />
                        <NavbarItem name="faqs" path='/faq' />
                    </div>
                    <div className='grid grid-flow-col gap-4 my-auto'>

                        <Link href='/getInTouch'>
                            <div className={getInTouchPageSelected}>
                                GET IN TOUCH
                            </div>
                            {/* <Button name='get in touch' /> */}
                        </Link>
                        <div className='my-auto grid md:hidden cursor-pointer'>
                            <div onClick={() => toggleDrawer(true)}>
                                <FiMenu className='w-[40px] h-[40px]' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Drawer
                anchor='right'
                open={drawerState}
                onClose={() => toggleDrawer(false)}
            >
                <div className='grid'>
                    <div className='grid grid-flow-col px-4 py-4 gap-2'>
                        <Image src={logo} alt='logo' className='my-auto w-7' />
                        <div className='text-primary font-medium text-xl my-auto'>Studio Stunnit</div>
                    </div>
                    <div className='border'></div>
                    <div className='grid-flow-row my-2 grid mx-5'>
                        <Link href='/'>
                            <div className={router.pathname == '/' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-[300]'}>
                                Home
                            </div>
                        </Link>
                        <Link href='/services'>
                            <div className={router.pathname == '/services' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-[300]'}>
                                Services
                            </div>
                        </Link>
                        <Link href='/projects'>
                            <div className={router.pathname == '/projects' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-[300]'}>
                                Projects
                            </div>
                        </Link>
                        <Link href='/about_us'>
                            <div className={router.pathname == '/about_us' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-[300]'}>
                                About Us
                            </div>
                        </Link>
                        <Link href='/testimonials'>
                            <div className={router.pathname == '/testimonials' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-[300]'}>
                                Testimonials
                            </div>
                        </Link>
                        <Link href='/faq'>
                            <div className={router.pathname == '/faq' ? 'text-xl py-1 font-bold text-primary' : 'text-xl py-1 font-[300]'}>
                                FAQ&apos;s
                            </div>
                        </Link>

                    </div>
                </div>
            </Drawer>
        </LeftRightAligner>
    )
}
