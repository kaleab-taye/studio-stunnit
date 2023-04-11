import Layout from '../components/layout'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import PageHeading from '../components/pageHeading'
import ServiceCard from '../components/serviceCard'
import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import serviceImage from '../../public/images/Asset_20.png'
import Link from 'next/link'
import { GrDown } from 'react-icons/gr'
export default function service() {



  return (
    <div className='leading-loose scroll-smooth'>
      <Layout>
        <Navbar />
        <PageHeading image={serviceImage} name='Services' />
        <LeftRightAligner>
          <div className='grid gap-10 md:gap-[64px] my-8 md:my-14'>
            <ServiceCard heading='design only'
              content="
            Under this facility, we only design your area for 2D and 3D views without any execution.
            
            Our experienced interior designers’ team will create a design plan for your space, but won’t carry out the physical implementation of the design. You’ll be at liberty to implement the design with or without blending other ideas.

            Our designer will typically provide detailed drawings, sketches, and specifications for the design, as well as a list of materials and finishes that should be used.

            We can help you choose the perfect color scheme that complements your sense of beauty and style. Also, look no further if you need a professional hand for the best home decor ideas or office arrangements for you.

            Studio Stunnit can assist you in giving your residency or workplace more individuality by adopting a customized strategy and using components that are specifically yours.
            "
            >
            </ServiceCard>
            <ServiceCard heading='design & execution' direction='rtl'
              content="
            With this facility, Studio Stunnit saves both your time and stress from all the designing works as we plan and execute the task from start to finish.

            This comprises creating 2D and 3D drawings, mood boards, choosing materials, planning, organizing transportation, carrying out the project, and managing it.

            There will be regular updates on the status of the consultation, monitoring, and visits.

            We pride ourselves on providing the highest quality interior design services to our clients. With a team of experienced and talented designers, we are dedicated to creating sophisticated and elegant spaces that reflect our client’s personal style and vision.

            Looking for the ideal setup for your area or spaces?
            Feeling confused about puja room design or living room decor?

            Never mind! Leave this responsibility to our experts now.
            With the aid of our furnishing service, interior space efficiency and aesthetic improvement through a range of textures, colors, dimensions, and sizes are both feasible.

            By creating a floor plan that maximizes both function and mobility, we can help you make the most of the space you have available.

            Studio Stunnit can help you choose furniture, window treatments, area rugs, accessories, and artwork that fit the dimensions of your particular space and your specific preferences.

            Also, if you can't find the precise item of your choice we can work with you to create a one-of-a-kind bedroom interior design or Kitchen interior design that perfectly satisfies your needs and matches your style.

            Our classic decorative service includes assistance with the placement of hardware and ornamental accents, as well as color choices for paint, wallpaper, artwork, and other wall decors.

            The creation of a comprehensive and uniform atmosphere is something Studio Stunnit is dedicated to. You can be sure that every square inch of your property will be taken into consideration with this service.

            Furniture Arrangements: From sofas and armchairs to Wall mirrors and bedroom sets, we will help you choose the furniture that will fit your requirements and look the best in your home.

            Window treatments: We'll help you choose the finest window coverings and set-ups so you can improve the aesthetics of your space while preserving your privacy.

            Accessories and decor: We can help you choose the right furniture and accessories to make your space come to life, from throw pillows and rugs to wall decoration items and plants.

            Curation of art: Our experienced team will help you choose the pieces of art that will look best in your wall decor for the living room. In collaboration with you, we will look for home decor items that fit your aesthetic preferences and budget.
            "
            >
            </ServiceCard>
          </div>
        </LeftRightAligner>
        {/* orange divider */}
        <div className='h-5 bg-primary mt-6 md:mt-10 mb-[70px] md:mb-[110px]'></div>
        <LeftRightAligner>

          <div className='grid md:grid-cols-4' >
            <div className='grid gap-8 md:col-span-3'>
              <div className='font-bold text-3xl uppercase'>our process</div>
              <div className='leading-8 grid gap-8 text-[0.8rem]' >
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
            <div className='grid md:col-span-1 mt-14 mb-auto hidden md:grid text-center'>
              <div className='mx-auto mb-auto'>

                <Link href='#get-in-touch'>
                  <div className='hidden sm:grid mb-auto gap-3 mt-5'>
                    <div className='whitespace-nowrap'>
                      Get In Touch
                    </div>

                    <div className='mx-auto bg-surface rounded-full text-5xl grid'><GrDown className='m-auto p-2 font-' /></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='text-center my-16 grid gap-2'>
            <div className=' italic mx-auto font-bold text-[13px] max-w-[500px]'>“Design must reflect the practical and aesthetic in business but
              above all…good design must primarily serve people”
            </div>
            <div className='text-[13px] font-light'>- Thomas J Watson.</div>
          </div>

        </LeftRightAligner>
      </Layout>
    </div>
  )
}
