import React, { useState } from 'react'
import Navbar from '../../../admin_components/navbar'
import AddTestimonial from '../../../admin_components/add-testimonials'
import TestimonialsList from '../../../admin_components/testimonials_list'
import apiUrl from '../../../../config'
import LeftRightAligner from '../../../admin_components/left-right-aligner'

const testimonials = ({ testimonials }) => {
  const [allTestimonials, setAllTestimonials] = useState(testimonials)
  return (
    <>
      <main className='' >
        <Navbar />
        <TestimonialsList testimonials={allTestimonials} removeTestimonial={(id) => setAllTestimonials(allTestimonials.filter(t => t.id !== id))} />
        <LeftRightAligner>
          <AddTestimonial addTestimonial={testimonial => setAllTestimonials([...allTestimonials, testimonial])} />
        </LeftRightAligner>
        <div className='h-8'></div>
      </main>
    </>
  )
}

export default testimonials

export async function getStaticProps() {

  try {
    let res = await fetch(`${apiUrl}/testimonials`);
    let testimonials = await res.json();
    return {
      props: {
        testimonials,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        testimonials: [],
        error: error
      }
    };
  }
}