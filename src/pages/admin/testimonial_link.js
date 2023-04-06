import React, { useState } from 'react'
import Navbar from '../../admin_components/navbar'
import AddTestimonialLink from '../../admin_components/add-testimonial-link'
import LeftRightAligner from '../../admin_components/left-right-aligner'

const Testimonials = ({ links }) => {

  const [allLinks, setAllLinks] = useState(links)

  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          {
            links ?
              <AddTestimonialLink links={allLinks} removeLink={(id) => setAllLinks(allLinks.filter(t => t.id !== id))} addLinks={testimonialLink => setAllLinks([...allLinks, testimonialLink])} />
              : <></>
          }
        </LeftRightAligner>
      </main>
    </>
  )
}

export default Testimonials

export async function getStaticProps() {
  try {
    let res = await fetch(`${process.env.url}/testimonial-youtube-links`);
    let data = await res.json();
    return {
      props: {
        links: data,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        links: [],
        error: error
      }
    };
  }
}