import React from 'react'
import Navbar from '../../../../admin_components/navbar'
import EditTestimonial from '../../../../admin_components/edit-testimonials';
import LeftRightAligner from '../../../../admin_components/left-right-aligner';

export default function editTestimonial({ testimonial }) {

  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <div className='h-14'></div>
          {testimonial ?
            <EditTestimonial testimonial={testimonial} />
            : <></>
          }
          <div className='h-14'></div>
        </LeftRightAligner>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const ids = [];

  try {
    let res = await fetch(`${process.env.url}/testimonials`);
    let testimonials = await res.json();
    const id = testimonials.map((testimonial) => testimonial.id)
    ids.push(...id)
  } catch (error) {
    console.error(error)
  }

  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  console.log(params)

  try {
    let headersList = {
      "Accept": "*/*",
    }

    let response = await fetch(`${process.env.url}/testimonials`, {
      method: "GET",
      headers: headersList
    });

    let data = await response.text();
    const testimonials = JSON.parse(data);
    const testimonial = testimonials.find(function (testimonial) {
      return testimonial.id.toString() === params.id;
    })

    return {
      props: {
        testimonial: testimonial,
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