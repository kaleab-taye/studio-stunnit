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
  try {
    let res = await fetch(`${process.env.url}/api/projects`);
    let testimonialsRes = await fetch(`${process.env.url}/api/testimonials`);
    let projects = await res.json();
    let testimonials = await testimonialsRes.json()

    return {
      props: {
        projects: projects,
        testimonials: testimonials,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("error happened while fetching projects : ", error)

    return {
      props: {
        projects: [],
        testimonials: [],
        //       error: error,
      }
    };
  }
}
