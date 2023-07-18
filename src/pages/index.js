import { Inter } from 'next/font/google'
import LandingComponet from '../components/landidng'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import ProjectsProjectsSection from '../components/projectsProjectsSection'
import DesignInStepsSection from '../components/sections/designInStepsSection'
import HomeTestimonialSection from '../components/sections/homeTestimonialSection'
import WhyChooseUsSection from '../components/sections/whyChooseUsSection'
import SeoHeader from '../components/seoHeader'
import WhatWeDoSection from '../components/whatWeDoSection'



const inter = Inter({ subsets: ['latin'] })

export default function Home({ projects, testimonials }) {
  return (
    <div>
      <SeoHeader pageName="Studio Stunnit" />

      <main className='' >
        <Layout>
          <LandingComponet />
          <Navbar />

          <WhatWeDoSection />
          <WhyChooseUsSection />
          <DesignInStepsSection />
          {projects.length > 0 ?
            // <HomeProjectsSection projects={projects} /> : <></>
            <ProjectsProjectsSection projects={projects} /> : <></>
          }
          {testimonials.length > 0 ?
            <HomeTestimonialSection testimonials={testimonials} /> : <></>
          }
          <div id='get-in-touch'>
          </div>
        </Layout>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // try {
  //   let res = await fetch(`${process.env.url}/projects`);
  //   let testimonialsRes = await fetch(`${process.env.url}/testimonials`);
  //   let projects = await res.json();
  //   let testimonials = await testimonialsRes.json()

  //   return {
  //     props: {
  //       projects: projects,
  //       testimonials: testimonials,
  //     },
  //     revalidate: 10,
  //   };
  // } catch (error) {
  //   console.error("error happened while fetching projects : ", error)

  //   return {
  //     props: {
  //       projects: [],
  //       testimonials: [],
  //       //       error: error,
  //     }
  //   };
  // }

  return {
    props: {
      projects: [
        {
          "id": "0dd24843-1cb3-4d7e-8f80-d2683a19cd8d",
          "title": "K Murthy Project",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
          "mainImage": "/images/hero/hero1.jpg.webp",
          "moreImages": [
            "/images/Asset_16.png.webp",
            "/images/Asset_14.png.webp",
            "/images/Asset_15.png.webp",
            "/images/Asset_16.png.webp",
            "/images/Asset_14.png.webp",
            "/images/Asset_15.png.webp",
            "/projects/myBhoojaDaughterRoomView/09.png.webp"
          ],
          "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
          "viewCount": 0
        }, {
          "id": "0dd24843-1cb3-4d7e-8f80-d2683a19cd8d",
          "title": "K Murthy Project",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
          "mainImage": "/images/hero/hero2.jpg.webp",
          "moreImages": [
            "/images/Asset_16.png.webp",
            "/images/Asset_14.png.webp",
            "/images/Asset_15.png.webp",
            "/images/Asset_16.png.webp",
            "/images/Asset_14.png.webp",
            "/images/Asset_15.png.webp"
          ],
          "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
          "viewCount": 0
        }
      ],
      testimonials: [
        {
          "id": "a59a6f34-b16c-4ef0-92b4-2c956d1db5e9",
          "avatarUrl": "/images/Asset_12.png.webp",
          "name": "Mr Murthy,",
          "occupation": "My Home Bhooja",
          "rating": 5,
          "description": "Luxury Designs. Superb Detailing and Awesome looking. Marvellous outlook"
        },
        {
          "id": "2e7092d6-6306-4f08-bd77-d660df9c7335",
          "avatarUrl": "/images/Asset_17.png.webp",
          "name": "Ms Aruna,",
          "occupation": "My Home Bhooja",
          "rating": 5,
          "description": "Elegant Designs. Great Finish and Well implemented"
        },
        {
          "id": "c6bf8d89-a218-4d59-afe6-76271f379c08",
          "avatarUrl": "/images/Asset_17.png.webp",
          "name": "Mr Raju,",
          "occupation": "My Home Bhooja",
          "rating": 5,
          "description": "Excellent Designs. Liked a lot"
        },
        {
          "id": "1ca92c62-e0bf-47bf-b4df-08373ac90792",
          "avatarUrl": "/images/Asset_12.png.webp",
          "name": "Ms Aruna,",
          "occupation": "DSR",
          "rating": 5,
          "description": "Grand styling and Tasteful looking designs"
        },
        {
          "id": "1ca92c62-e0bf-47bf-b4df-08373ac9k792",
          "avatarUrl": "/images/Asset_12.png.webp",
          "name": "Ms Sujatha,",
          "occupation": "Prestige",
          "rating": 5,
          "description": "Creative concepts Designs with perfect execution"
        }
      ],
      //       error: error,
    }
  };


}
