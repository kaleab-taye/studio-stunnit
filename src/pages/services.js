import Layout from '../components/layout'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import PageHeading from '../components/pageHeading'
import ServiceCard from '../components/serviceCard'
import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import serviceImage from '../../public/images/Asset_20.png'
export default function service() {



  return (
    <div className='leading-loose'>
      <Layout>
        <Navbar />
        <PageHeading image={serviceImage} name='Services' />
        <LeftRightAligner>
          <div className='grid gap-10 my-12'>
            <ServiceCard heading='design only'>
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
            </ServiceCard>
            <ServiceCard heading='design & execution' direction='rtl'>
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
            </ServiceCard>
          </div>
        </LeftRightAligner>
        {/* orange divider */}
        <div className='h-5 bg-primary my-16'></div>
        <LeftRightAligner>

          <div className='grid sm:grid-cols-4' >
            <div className='sm:col-span-1 mt-14 hidden sm:grid'><IoMdMenu className='text-primary w-20 h-20' /></div>
            <div className='grid gap-8 sm:col-span-3'>
              <div className='font-bold text-3xl uppercase'>our process</div>
              <div className='leading-loose grid gap-8 text-[0.8rem]' >
                <div>
                  Building your dream home or spaces where you come together for work, fun, and livelihood
                  must speak to you through the ambience it weaves inside. At Studio Stunnit, our expert guidance and design philosophies are ready to lead you all through the way to realizing your perfect interiors.
                </div>
                <div>
                  Our first meeting may begin with a phone call, or in-person, or through email. Firstly, we
                  would love to get to know you. What are your dreams and aspirations? What inspires you, and
                  what is your expectation for the space you want us to envision?
                </div>
                <div>
                  In the pre-design stage, we discuss ideas from online sources, magazines and something
                  you’ve seen somewhere. At the same time, we study the architecture of your space. Do you
                  have the desired relationship between your spaces? Taking in your personal needs and lifestyle, we refine your interior spaces—one step at a time.
                </div>
                <div>
                  From colour schemes, furnishing ideas, material selection, décor and style to appliances, fixtures, functional parameters and activities - we probe every detail you wish to integrate within
                  your space. Gauging your calibre, our gracious approach rewards you with spaces you seek to
                  cherish and grow.
                </div>
                <div>
                  Our motto goes, “Come home to your-self,”
                  Our design promises to deliver a joyful and vibrant environment.
                </div>
                <div>
                  In the work stage, we usher ideas onto our palette. The design mood board is assembled with
                  thematic spatial configurations, material samples, textures and finishes, and furniture style.
                  We weigh the pros and cons by envisaging design combinations and complimenting schemes.
                  For clients to grasp the entire picture of our interior vision, we recommend letting us visualize
                  your space as computerized 3D renderings.
                </div>
                <div>
                  When things begin to look good, the green signal is on, and we begin the creation! Our skilled
                  craftsmen and execution team step in to unravel our stunning design. Your spaces are then
                  brought to life corresponding to the 3D views.
                </div>
                <div>
                  As the design progresses, we delve into the details. It is the time to choose the right material,
                  make timely decisions, keep track of your budget, trust our process and let the design manifest. Once you select the materials and products, grant time to fine-tune and custom-make
                  them to your taste. At every step, we are there to guide you, work out any complications and
                  take you stress-free through the journey.
                </div>
                <div>
                  Also, you may stumble upon something new, or we may come up with a new idea. We could
                  re-configure to a certain extent; if not, trust us until you see the grand finale.
                </div>
                <div>
                  Hang on, have patience and faith in us!
                </div>
                <div>
                  Finally, it’s the big reveal. The moment we’ve all been waiting for: the final installations and
                  the last few nuts and bolts. We offer assistance in moving out your old furniture or suggest
                  charitable organizations to receive donations. And most importantly, before you settle in, we
                  recommend hiring a deep cleaning service.
                </div>
                <div>
                  Now your space is ready to welcome you and invite you to “come home to
                  your-self”
                </div>

              </div>
            </div>
          </div>
          <div className='text-center my-16 grid gap-2'>
            <div className=' italic mx-auto font-bold text-xs max-w-[500px]'>“Design must reflect the practical and aesthetic in business but
              above all…good design must primarily serve people”
            </div>
            <div className='text-xs font-light'>- Thomas J Watson.</div>
          </div>

        </LeftRightAligner>
      </Layout>
    </div>
  )
}
