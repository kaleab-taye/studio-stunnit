import { Carousel } from "flowbite-react";
import Image from "next/image";
import { SlArrowDown } from 'react-icons/sl';
import logo from '../../public/SVG/Asset_27.svg';


export default function LandingComponet() {
    return <>
        <div className='grid h-[75vh] md:h-screen ' >
            <div className="grid relative bg-cover bg-center h-[75vh] md:h-screen">
                <Carousel className=' ' leftControl=" " indicators={false}
                    rightControl=" " slideInterval={4000}>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero1.jpg.webp')] bg-center brightness-75"></div>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero2.jpg.webp')] bg-center brightness-75"></div>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero3.jpg.webp')] bg-center brightness-75"></div>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero4.jpg.webp')] bg-center brightness-75"></div>
                    
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero5.webp')] bg-center brightness-75"></div>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero6.webp')] bg-center brightness-75"></div>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero9.webp')] bg-center brightness-75"></div>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero10.webp')] bg-center brightness-75"></div>
                    <div className="grid relative bg-cover h-[75vh] md:h-screen bg-[url('/images/hero/hero11.webp')] bg-center brightness-75"></div>
                </Carousel>
                <div className="absolute w-full h-full m-auto pointer-events-none">
                    <div className="m-auto py-4 flex space-between flex-col  h-[75vh] md:h-screen">
                        <div ></div>
                        <Image className="max-w-[330px] sm:max-w-[430px] m-auto px-5 " alt='logo' src={logo} />
                        <div className="text-onPrimary text-center animate-bounce"><SlArrowDown className="m-auto text-4xl" /></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

