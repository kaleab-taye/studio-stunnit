import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NavbarItem({ name, path }) {

  const router = useRouter()

  useEffect(() => {
    let path = router.pathname


    console.log(router.pathname)
  }, [])
  return (
    <Link href={path}>
      <div className='grid'>
        <div className='grid text-center uppercase font-medium my-auto text-sm lg:text-lg'>{name}</div>
      </div>
    </Link>
  )
}
