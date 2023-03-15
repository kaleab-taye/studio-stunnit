import { Carousel } from "flowbite-react";
import Image from "next/image";
import logo from '../../public/SVG/Asset_27.svg';
import background1 from '../../public/images/Asset_14.png';

export default function LandingComponet() {
    return <>
        <div className='grid h-screen ' >
            <div className="grid relative bg-cover bg-center h-screen">
                {/* <div className=" bg-red-500 w-full h-full"> */}

                <Carousel className=' ' leftControl=" "
                    rightControl=" " slideInterval={5000}>
                    <div className="grid relative bg-cover h-screen bg-[url('/images/Asset_14.png')] bg-center"></div>
                    <div className="grid relative bg-cover h-screen bg-[url('/images/Asset_14.png')] bg-center"></div>
                    <div className="grid relative bg-cover h-screen bg-[url('/images/Asset_14.png')] bg-center"></div>
                  
                </Carousel>
                {/* </div> */}
                <div className="absolute grid w-full h-full m-auto pointer-events-none">
                    <div className="m-auto grid h-screen">

                    <Image className="max-w-[400px] m-auto " src={logo} />
                    </div>
                </div>
            </div>
        </div>
    </>
}




{/* <div className="w-full h-full grid  justify-center backdrop-brightness-90">
    <div className="text-white text-4xl  mt-auto text-center">Studio Stunnit</div>
    <div className="text-white text-xl text-center">Project Under Development</div>
</div> */}