import Layout from '@/components/layout'
import LeftRightAligner from '@/components/left-right-aligner'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'
import serviceImage from '../../public/images/Asset_20.png'
export default function service() {
  return (
    <div>
      <Layout>
        <Navbar />
        <div className='relative grid'>
          <Image className='brightness-90' src={serviceImage} />
          <div className='absolute w-full h-full grid'>

            <div className='uppercase m-auto text-4xl font-bold text-primaryColor'>Services</div>
          </div>
        </div>
        <LeftRightAligner>
          <div className='grid grid-flow-col '>
            <div >design only</div>
            <div className='max-h-[200px] overflow-y-auto'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
              ex ea commodo consequat.
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
              nulla facilisi.
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
              ex ea commodo consequat.
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
              nulla facilisi.
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            </div>
          </div>
        </LeftRightAligner>
      </Layout>
    </div>
  )
}
