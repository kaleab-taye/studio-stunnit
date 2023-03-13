import Layout from '@/components/layout'
import LeftRightAligner from '@/components/left-right-aligner'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'

export default function Faq() {
  const [currentCategoryId, setCurrentCategoryId] = useState(faqCategories[0]?.id)
  return (
    <div>
      <Layout>
        <Navbar />
        <LeftRightAligner>
          <div className='min-h-screen flex flex-col items-center py-12 gap-10'>
            <div className='flex flex-col items-center gap-5'>
              <h2 className='font-bold text-3xl'>FAQs</h2>
              <p>
                Find answers to commonly asked questions by using these listed categories
              </p>
            </div>
            <div>
              <div className="text-center">
                <ul className="flex flex-wrap -mb-px">
                  {
                    faqCategories.map(category => (
                      <li
                        key={category.id}
                        className={`mr-2 inline-block p-4 border-b-2 rounded-t-lg  cursor-pointer ${category.id === currentCategoryId ? "border-primary" : "  hover:border-gray-300 border-transparent"}`}
                        onClick={() => setCurrentCategoryId(category.id)}
                      >
                        {category.name}
                      </li>
                    )
                    )
                  }
                </ul>
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
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c1",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c1",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c2",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c3",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c3",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c4",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c5",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  },
  {
    categoryId: "c5",
    question: "Labore et officia voluptate cillum.",
    answer: "Non consequat incididunt id amet dolore do consectetur nisi proident id magna do fugiat. Ea id nulla ipsum non incididunt proident fugiat exercitation culpa esse. Cillum consequat eu ad dolore et ex ad quis laborum in anim et deserunt. Eu non adipisicing ipsum exercitation pariatur."
  }
]

const faqCategories = [
  {
    id: "c1",
    name: "Category 1"
  },
  {
    id: "c2",
    name: "Category 2"
  },
  {
    id: "c3",
    name: "Category 3"
  },
  {
    id: "c4",
    name: "Category 4"
  },
  {
    id: "c5",
    name: "Category 5"
  },
]