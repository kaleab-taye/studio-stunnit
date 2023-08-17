import { Box, Tab, styled, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { Accordion } from "flowbite-react";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Layout from "../components/layout";
import LeftRightAligner from "../components/left-right-aligner";
import Navbar from "../components/navbar";
import SeoHeader from "../components/seoHeader";

const AntTab = styled((props) => <Tab disableRipple {...props} />)({
  "&.Mui-selected": {
    color: "#bc8028",
  },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: "#bc8028",
  },
});

export default function Faq({ faqs }) {
  const [currentCategoryId, setCurrentCategoryId] = useState(
    faqCategories[0]?.id
  );
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div>
      <SeoHeader pageName="FAQ" />
      <Layout>
        <Navbar />
        <LeftRightAligner>
          <div className=" flex flex-col items-center py-12 gap-10">
            <div className="flex flex-col items-center gap-5">
              <h2 className="font-bold text-3xl">FAQs</h2>
              <p>
                Find answers to commonly asked questions by using these listed
                categories
              </p>
            </div>
            <div className="grid w-full">
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
                    return (
                      <AntTab label={item.name} key={index} value={index}>
                        rr
                      </AntTab>
                    );
                  })}
                </StyledTabs>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={selectedTab}
                  onChangeIndex={handleChangeIndex}
                >
                  {faqCategories.map((item, index) => {
                    return (
                      <TabPanel
                        key={index}
                        value={selectedTab}
                        index={index}
                        dir={theme.direction}
                      >
                        <Accordion>
                          {faqs.map((faqItem) =>
                            faqItem.category === item.name ? (
                              <Accordion.Panel key={faqItem.categoryId}>
                                <Accordion.Title>
                                  {/* {faqItem.categoryId} */}
                                  <div className="text-md">
                                    {faqItem.question}
                                  </div>
                                </Accordion.Title>
                                <Accordion.Content>
                                  <p className="text-md mb-2 text-gray-500 dark:text-gray-400">
                                    {faqItem.answer}
                                  </p>
                                </Accordion.Content>
                              </Accordion.Panel>
                            ) : (
                              <></>
                            )
                          )}
                        </Accordion>
                      </TabPanel>
                    );
                  })}
                </SwipeableViews>                     
              </div>
            </div>
          </div>
        </LeftRightAligner>
      </Layout>
    </div>
  );
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
const faqCategories = [
  {
    id: "c1",
    name: "Design",
  },
  {
    id: "c2",
    name: "Execution",
  },
];

export async function getStaticProps() {
  try {
    let res = await fetch(`${process.env.url}/api/faqs`);
    let faqs = await res.json();
    return {
      props: {
        faqs: faqs,
      },
      revalidate: 10,
    };
  } catch (error) {
    // console.error("error happened while fetching projects : ", error)
    return {
      props: {
        faqs: [],
        // error: error,
      }
    };
  }
}
