import Image from "next/image";
import logo from '../../public/SVG/Asset_27.svg'

export default function LandingComponet() {
    return <>
        <div className='grid h-screen' >
            <div className="grid bg-[url('/images/Asset_14.png')] bg-cover bg-center">

                <div className="m-auto">
                    <Image className="max-w-[400px]" src={logo} />
                </div>
            </div>
        </div>
    </>
}




{/* <div className="w-full h-full grid  justify-center backdrop-brightness-90">
    <div className="text-white text-4xl  mt-auto text-center">Studio Stunnit</div>
    <div className="text-white text-xl text-center">Project Under Development</div>
</div> */}