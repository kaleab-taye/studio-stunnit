import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingComponet from '@/components/landidng'
import HomePage from './homePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <HomePage/>
    </>
  )
}
