import React, { useState } from 'react'
import Navbar from '../../../admin_components/navbar'
import AddFAQ from '../../../admin_components/add-faq'
import FaqList from '../../../admin_components/faq_list'
import apiUrl from '../../../../config'
import LeftRightAligner from '../../../admin_components/left-right-aligner'

const Faq = ({ faqs }) => {
  const [allFaqs, setAllFaqs] = useState(faqs)
  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <FaqList faqs={allFaqs} removeFaq={(id) => setAllFaqs(allFaqs.filter(t => t.id !== id))} />
          <div className='h-16'></div>
          <AddFAQ addFaq={faq => {setAllFaqs([...allFaqs, faq])}} />
        </LeftRightAligner>
        <div className='h-8'></div>
      </main>
    </>
  )
}

export default Faq

export async function getStaticProps() {
  try {
    let res = await fetch(`${process.env.url}/faqs`);
    let faqs = await res.json();
    return {
      props: {
        faqs,
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