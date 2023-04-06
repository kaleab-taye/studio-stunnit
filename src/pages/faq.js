import Layout from '../components/layout'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Box, styled, Tab, Typography, useTheme } from '@mui/material';
import Tabs from '@mui/material/Tabs';
// import { TabPanel } from '@mui/joy'
import SwipeableViews from 'react-swipeable-views'

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
  console.log("loggg faqs", faqs)
  console.log("loggg", process.env.url)
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
    name: "Design"
  },
  {
    id: "c2",
    name: "Excution"
  },
  {
    id: "c3",
    name: "Lourem"
  },
  {
    id: "c4",
    name: "Ipsum"
  },
  // {
  //   id: "c5",
  //   name: "Option 5"
  // },
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
          "id": "b16b2939-abe3-4bd7-be79-57e6d165413f",
          "category": "Design",
          "question": "What if I don’t like the design? How many op- tions do I get?",
          "answer": "Studio Stunnit is a multidisciplinary design ﬁrm\nenvisioning interior designs that are unique and\nspell-binding. Established in 2022, helmed by\neminent interior designers in Hyderabad, the\nstudio focuses on crafting a premium style ap-\nproach-visualising spaces with aesthetic coher-\nence and functional congruity. With 8 years of\ndesign experience."
        },
        {
          "id": "b16b2939-abe3-4bd7-be79-57e6d165413f",
          "category": "Excution",
          "question": "What if I don’t like the design? How many op- tions do I get?",
          "answer": "Studio Stunnit is a multidisciplinary design ﬁrm\nenvisioning interior designs that are unique and\nspell-binding. Established in 2022, helmed by\neminent interior designers in Hyderabad, the\nstudio focuses on crafting a premium style ap-\nproach-visualising spaces with aesthetic coher-\nence and functional congruity. With 8 years of\ndesign experience."
        },
        {
          "id": "b16b2939-abe3-4bd7-be79-57e6d165413f",
          "category": "Lourem",
          "question": "What if I don’t like the design? How many op- tions do I get?",
          "answer": "Studio Stunnit is a multidisciplinary design ﬁrm\nenvisioning interior designs that are unique and\nspell-binding. Established in 2022, helmed by\neminent interior designers in Hyderabad, the\nstudio focuses on crafting a premium style ap-\nproach-visualising spaces with aesthetic coher-\nence and functional congruity. With 8 years of\ndesign experience."
        },
        {
          "id": "b16b2939-abe3-4bd7-be79-57e6d165413f",
          "category": "Ipsum",
          "question": "What if I don’t like the design? How many op- tions do I get?",
          "answer": "Studio Stunnit is a multidisciplinary design ﬁrm\nenvisioning interior designs that are unique and\nspell-binding. Established in 2022, helmed by\neminent interior designers in Hyderabad, the\nstudio focuses on crafting a premium style ap-\nproach-visualising spaces with aesthetic coher-\nence and functional congruity. With 8 years of\ndesign experience."
        }
      ],
      // error: error,
    }
  };

}