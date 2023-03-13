import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NavbarItem({ name, path }) {

  const router = useRouter()
  let pathFound = false
  // useEffect(() => {
  //   // let path = router.pathname

  //   if () {
  //     pathFound = true
  //   }
  //   console.log('nav', router.pathname, path)
  // }, [])
  return (
    <Link href={path}>
      <div className='grid relative'>
        <div className='grid text-center uppercase font-medium my-auto text-sm lg:text-lg'>{name}</div>
      { path === router.pathname ? <div className='absolute bottom-[-7px] w-full h-[3px] bg-primary rounded'></div>:null}
      <div className='opacity-0 hover:opacity-100 absolute bottom-[-7px] w-full h-[3px] bg-primary rounded'></div>
      </div>
    </Link>
  )
}
