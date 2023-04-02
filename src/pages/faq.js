import Layout from '../components/layout'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import { Accordion, Tabs } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
// import apiUrl from '../../config'
import apiUrl from '../../config'

export default function Faq({faqs}) {
  const [currentCategoryId, setCurrentCategoryId] = useState(faqCategories[0]?.id)
  console.log("loggg faqs", faqs)
  console.log("loggg", process.env.url)

  return (
    <div>
      <Layout>
        <Navbar />
        <LeftRightAligner>
          <div className=' flex flex-col items-center py-12 gap-10'>
            <div className='flex flex-col items-center gap-5'>
              <h2 className='font-bold text-3xl'>FAQs</h2>
              <p>
                Find answers to commonly asked questions by using these listed categories
              </p>
            </div>
            <div className='grid w-full'>
              <div className="grid w-full">
                <Tabs.Group
                  aria-label="Tabs with icons"
                  style="underline"
                  className='w-full'
                >
                  {
                    faqCategories.map(item =>
                      <Tabs.Item
                        title={item.name}
                        id="heading-1"
                        key='heading-1'
                      >
                        <Accordion>
                          {faqs.map(faqItem => faqItem.category === item.name ?
                            <Accordion.Panel key={faqItem.categoryId} >
                              <Accordion.Title>
                              {faqItem.categoryId}
                                {faqItem.question}
                              </Accordion.Title>
                              <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                  {faqItem.answer}
                                </p>
                                
                              </Accordion.Content>
                            </Accordion.Panel>
                            : <></>)}
                        </Accordion>
                      </Tabs.Item>)
                  }
                </Tabs.Group>
              </div>
            </div>
          </div>
        </LeftRightAligner>
      </Layout>

    </div>
  )
}


const FAQs = [
  {
    categoryId: "c1",
    question: "Labore et otate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c1",
    question: "Labore et officia volupum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c1",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c2",
    question: "cia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c3",
    question: "Labore voluptate cillum.",
    answer: "Non consequat inolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c3",
    question: "Labore et offate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c4",
    question: "Labore et officia vollum.",
    answer: "Non consequat dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c5",
    question: "Laboreuptate cillum.",
    answer: "Non consequat incet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c5",
    question: "Labofficia voluptate cillum.",
    answer: "Non consedidunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  }
]

const faqCategories = [
  {
    id: "c1",
    name: "Option 1"
  },
  {
    id: "c2",
    name: "Option 2"
  },
  {
    id: "c3",
    name: "Option 3"
  },
  {
    id: "c4",
    name: "Option 4"
  },
  // {
  //   id: "c5",
  //   name: "Option 5"
  // },
]

export async function getStaticProps() {
  try {
    let res = await fetch(`${process.env.url}/faqs`);
    let faqs = await res.json();

    return {
      props: {
        faqs: faqs,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("error happened while fetching projects : ",error)

    return {
      props: {
        faqs: [],
        // error: error,
      }
    };
  }
}