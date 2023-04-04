import React from 'react'
import Navbar from '../../../../admin_components/navbar'
import EditFAQ from '../../../../admin_components/edit-faq'
import LeftRightAligner from '../../../../admin_components/left-right-aligner'

const editFaq = ({ faq }) => {
  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <div className='h-14'></div>
          {
            faq ?
              <EditFAQ faq={faq} /> : <></>
          }
          <div className='h-14'></div>
        </LeftRightAligner>
      </main>
    </>
  )
}

export default editFaq

export async function getStaticPaths() {
  // Fetch the list of item IDs from an API or database
  const ids = [];

  try {
    let res = await fetch(`${process.env.url}/faqs`);
    let faqs = await res.json();
    const id = faqs.map((faq) => faq.id)
    ids.push(...id)
  } catch (error) {
    console.error(error)
  }

  // Map the IDs to the required format for Next.js dynamic routes
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

    let response = await fetch(`${process.env.url}/faqs?id=${params.id}`, {
      method: "GET",
      headers: headersList
    });

    let data = await response.text();
    const faqs = JSON.parse(data);
    const faq = faqs.find(function (faq) {
      return faq.id.toString() === params.id;
    })
    return {
      props: {
        faq,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        faqs: [],
        error: error
      }
    };
  }
}