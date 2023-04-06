import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import LandingComponet from '../components/landidng'
import WhatWeDoSection from '../components/whatWeDoSection'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import WhyChooseUsSection from '../components/sections/whyChooseUsSection'
import HomeTestimonialSection from '../components/sections/homeTestimonialSection'
import HomeProjectsSection from '../components/homeProjectsSection'
import DesignInStepsSection from '../components/sections/designInStepsSection'
import ProjectsProjectsSection from '../components/projectsProjectsSection'



const inter = Inter({ subsets: ['latin'] })

export default function Home({ projects, testimonials }) {
  console.log(projects)
  return (
    <>
      <Head>
        <title>Studio Stunnit</title>
        <meta name="description" content="We help you step into stunning Interior design spaces that is
                        customized to ﬁt your personal value. Get in touch and let’s
                        start customizing a design that ﬁts just right for you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
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
            "mainImage": "/images/Asset_16.png",
            "moreImages": [
                "/images/Asset_16.png",
                "/images/Asset_14.png",
                "/images/Asset_15.png",
                "/images/Asset_16.png",
                "/images/Asset_14.png",
                "/images/Asset_15.png"
            ],
            "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
            "viewCount": 0
        }, {
            "id": "0dd24843-1cb3-4d7e-8f80-d2683a19cd8d",
            "title": "K Murthy Project",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
            "mainImage": "/images/Asset_14.png",
            "moreImages": [
                "/images/Asset_16.png",
                "/images/Asset_14.png",
                "/images/Asset_15.png",
                "/images/Asset_16.png",
                "/images/Asset_14.png",
                "/images/Asset_15.png"
            ],
            "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
            "viewCount": 0
        }, {
            "id": "0dd24843-1cb3-4d7e-8f80-d2683a19cd8d",
            "title": "K Murthy Project",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
            "mainImage": "/images/Asset_15.png",
            "moreImages": [
                "/images/Asset_16.png",
                "/images/Asset_14.png",
                "/images/Asset_15.png",
                "/images/Asset_16.png",
                "/images/Asset_14.png",
                "/images/Asset_15.png"
            ],
            "clientsWord": "Lorem ipsum dolor sit amet, consectetuer adipiscing\r\nelit, sed diam nonummy nibh euismod tincidunt ut\r\nlaoreet dolore magna aliquam erat volutpat. Ut wisi\r\nenim ad minim veniamd exerci tation ullamcorper sus-\r\ncipit lobortis nisl uttate velit esse molestie consequat,\r\nvel illum dolore eu feugiat nulla facilisis at vero eros et\r\naccumsan et",
            "viewCount": 0
        }
    ],
      testimonials: [
        {
          "id": "a59a6f34-b16c-4ef0-92b4-2c956d1db5e9",
          "avatarUrl": "/images/Asset_12.png",
          "name": "K Murthy,",
          "occupation": "Director Manager, K Murthy Company",
          "rating": 5,
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\r\ndiam nonummy nibh euismod tincidunt ut laoreet dolore magna\r\naliquam erat volutpat. Ut wisi llamcorper suscipit lobortis nisl ut\r\naliquip ex ea commodo consequat. Duis autem vel"
        },
        {
          "id": "2e7092d6-6306-4f08-bd77-d660df9c7335",
          "avatarUrl": "/images/Asset_17.png",
          "name": "Aruna",
          "occupation": "Director Manager, Aruna Company",
          "rating": 5,
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\r\ndiam nonummy nibh euismod tincidunt ut laoreet dolore magna\r\naliquam erat volutpat. Ut wisi llamcorper suscipit lobortis nisl ut\r\naliquip ex ea commodo consequat. Duis autem vel"
        },
        {
          "id": "c6bf8d89-a218-4d59-afe6-76271f379c08",
          "avatarUrl": "/images/Asset_17.png",
          "name": "Sanjeev,",
          "occupation": "Director Manager, Sanjeev Company",
          "rating": 4,
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\r\ndiam nonummy nibh euismod tincidunt ut laoreet dolore magna\r\naliquam erat volutpat. Ut wisi llamcorper suscipit lobortis nisl ut\r\naliquip ex ea commodo consequat. Duis autem vel"
        },
        {
          "id": "1ca92c62-e0bf-47bf-b4df-08373ac90792",
          "avatarUrl": "/images/Asset_12.png",
          "name": "Punith,",
          "occupation": "Director Manager, Punith Company",
          "rating": 5,
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\r\ndiam nonummy nibh euismod tincidunt ut laoreet dolore magna\r\naliquam erat volutpat. Ut wisi llamcorper suscipit lobortis nisl ut\r\naliquip ex ea commodo consequat. Duis autem vel"
        }
      ],
      //       error: error,
    }
  };


}
