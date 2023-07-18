import { Box, Tab, styled, useTheme } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
// import { TabPanel } from '@mui/joy'
import SwipeableViews from 'react-swipeable-views'
import SeoHeader from '../components/seoHeader'

const AntTab = styled((props) => <Tab disableRipple {...props} />)({
  // borderBottom: '1px solid #e8e8e8',
  // '& .MuiTabs-indicator': {
  //   backgroundColor: '#1890ff',
  // },
  '&.Mui-selected': {
    color: '#bc8028',
    // fontWeight: theme.typography.fontWeightMedium,
  },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 60,
    width: '100%',
    backgroundColor: '#bc8028',
  },
});


export default function Faq({ faqs }) {
  const [currentCategoryId, setCurrentCategoryId] = useState(faqCategories[0]?.id)
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0)

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    console.log('ss', selectedTab)
  }, [selectedTab])

  return (
    <div>
      <SeoHeader pageName="FAQ" />

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
              <div className="grid w-full grid ">
                <StyledTabs
                  value={selectedTab}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  {faqCategories.map((item, index) => {

                    return <AntTab label={item.name} key={index} value={index} >rr</AntTab>
                  })}

                </StyledTabs>
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={selectedTab}
                  onChangeIndex={handleChangeIndex}
                >
                  {faqCategories.map((item, index) => {

                    return <TabPanel key={index} value={selectedTab} index={index} dir={theme.direction}>
                      <Accordion>
                        {faqs.map(faqItem => faqItem.category === item.name ?
                          <Accordion.Panel key={faqItem.categoryId} >
                            <Accordion.Title>
                              {/* {faqItem.categoryId} */}
                              <div className='text-md'>
                                {faqItem.question}
                              </div>
                            </Accordion.Title>
                            <Accordion.Content>
                              <p className="text-md mb-2 text-gray-500 dark:text-gray-400">
                                {faqItem.answer}
                              </p>

                            </Accordion.Content>
                          </Accordion.Panel>
                          : <></>)}
                      </Accordion>
                    </TabPanel>
                  })}
                  {/* <Tab label={item.name} key={index} value={index} >rr</Tab> */}


                </SwipeableViews>
                {/* <Tabs.Group
                  aria-label="Tabs with icons"
                  style="underline"
                  className='w-full space-between flex '
                >
                  {
                    faqCategories.map(item =>
                      <Tabs.Item
                        title={item.name}
                        id={item.name}
                        key={item.name}
                        className=''
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
                </Tabs.Group> */}
              </div>
            </div>
          </div>
        </LeftRightAligner>
      </Layout>

    </div>
  )
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const FAQs = [
  {
    categoryId: "c1",
    question: "What if we don’t like the designs ?",
    answer: "We provided 2-3 options to choose. Generally our clients select from one of these designs. If you don’t like it - we make it right with better option."
  },
  {
    categoryId: "c1",
    question: "What is the general timeline for designs creation ?",
    answer: "It depends on requirement, scale and complexity of the project involved. It varies from case to case."
  },
  {
    categoryId: "c1",
    question: "Will you include laminate selections in design 3D pictures ?",
    answer: "Yes if Laminate selections are done on time during design phase we can incorporate the same in 3D pictures."
  },
  {
    categoryId: "c1",
    question: "What do I get as part of designs ?",
    answer: "We will provide 2D in PDF and 3D Designs as agreed for space."
  },
  {
    categoryId: "c1",
    question: "Will my designs look realistic ?",
    answer: "We provide best possible looking designs that can help you imagine your space before execution."
  },
  {
    categoryId: "c1",
    question: "Why should we get it designed with you ? What’s special here?",
    answer: "We create 2Ds according to you (after understanding your interest) and 3Ds are of Global standards which differentiates us from others in market. \nQuality and Time matters to us. We take pride in to give you a quality product on time."
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
    name: "Design"
  },
  {
    id: "c2",
    name: "Execution"
  }
]

export async function getStaticProps() {
  // try {
  //   let res = await fetch(`${process.env.url}/faqs`);
  //   let faqs = await res.json();

  //   return {
  //     props: {
  //       faqs: faqs,
  //     },
  //     revalidate: 10,
  //   };
  // } catch (error) {
  //   console.error("error happened while fetching projects : ", error)

  //   return {
  //     props: {
  //       faqs: [],
  //       // error: error,
  //     }
  //   };
  // }

  return {
    props: {
      faqs: [
        {
          "id": "b16b2939-abed-4bd7-be79-57e6d165413f",
          "category": "Design",
          "question": "What if we don’t like the designs ?",
          "answer": "We provided 2-3 options to choose. Generally our clients select from one of these designs. If you don’t like it - we make it right with better option."
        },
        {
          "id": "b16b2939-abea-4bd7-be79-57e6d165413f",
          "category": "Design",
          "question": "What is the general timeline for designs creation ?",
          "answer": "It depends on requirement, scale and complexity of the project involved. It varies from case to case."
        },
        {
          "id": "b16b2939-abed-4bdw-be79-57e6d165413f",
          "category": "Design",
          "question": "Will you include laminate selections in design 3D pictures ?",
          "answer": "Yes if Laminate selections are done on time during design phase we can incorporate the same in 3D pictures."
        },
        {
          "id": "b16b2939-abrd-4bd7-be79-57e6d165413f",
          "category": "Design",
          "question": "What do I get as part of designs ?",
          "answer": "We will provide 2D in PDF and 3D Designs as agreed for space."
        },
        {
          "id": "b16b2939-abed-4hd7-be79-57e6d165413f",
          "category": "Design",
          "question": "Will my designs look realistic ?",
          "answer": "We provide best possible looking designs that can help you imagine your space before execution."
        },
        {
          "id": "b16b2939-abed-4bd7-be79-57hjd165413f",
          "category": "Design",
          "question": "Why should we get it designed with you ? What’s special here?",
          "answer": "We create 2Ds according to you (after understanding your interest) and 3Ds are of Global standards which differentiates us from others in market. \nQuality and Time matters to us. We take pride in to give you a quality product on time."
        },

        {
          "id": "b1rb2939-abed-4rbd7-be79-57hjd165413f",
          "category": "Execution",
          "question": "Will there be frequent updates and visits during execution ?",
          "answer": "We will visit the site to ensure project deliverables are progressed on time as agreed (turn key projects) and we provided timely key updates."
        },
        {
          "id": "b1rbr2939-abed-erh7-be79-57hjd165413f",
          "category": "Execution",
          "question": "What work generally happens in execution ?",
          "answer": "We will engage and obtain materials sourcing (Plywood, Glass, Hardware, Laminates etc) and Services from Carpentry, Tiles, Electrical, Glass, Painting and Plumbing works as necessary based on the designs."
        }, {
          "id": "b1rredsw9-abed-4bd7-be79-57hjd165413f",
          "category": "Execution",
          "question": "Is possible to modify design during execution ?",
          "answer": "We highly recommend no changes during execution unless during exception cases where necessary and well discussed in advance avoiding re-work."
        },

        {
          "id": "lkmedsw9-arbed-4bd7-be79-57hjd165413f",
          "category": "Execution",
          "question": "How long generally it takes to execute ?",
          "answer": "It depends on scale and design. Generally it would get over within 2 to 3 months once designs are finalized."
        },
        {
          "id": "b1redsw9-abed-4bd7-be79r-57hjd165s7df",
          "category": "Execution",
          "question": "Can we visit the client during execution ?",
          "answer": "Yes we discuss key decisions at site during work execution."
        },
        {
          "id": "b1redsw9-abred-4bd7-be79-9w6djd165413f",
          "category": "Execution",
          "question": "Is Execution services available outside Hyderabad ?",
          "answer": "Currently it is available only in Hyderabad. But we are open to take up projects outside Hyderabad based on project, scale, design and discussion etc..."
        },
      ],
      // error: error,
    }
  };

}