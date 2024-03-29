import React, { useEffect, useState } from "react";
import design from "../../../public/SVG/Design.svg";
import execution from "../../../public/SVG/Execution.svg";
import meeting from "../../../public/SVG/Meeting.svg";
import move_in from "../../../public/SVG/Move-in.svg";
import LeftRightAligner from "../left-right-aligner";
import ProgressBar from "../progressBar";
import StageIcon from "../stageIcon";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignInStepsSection() {
  const [progressBar, setProgressBar] = useState(0);
  const [status1, setStatus1] = useState("notPassed");
  const [status2, setStatus2] = useState("notPassed");
  const [status3, setStatus3] = useState("notPassed");
  const [status4, setStatus4] = useState("notPassed");

  const data = [
    {
      id: "1",
      img: meeting,
      heading: "meeting",
      content:
        "We discuss your space requirements, dream/inspiration (colour, materials, style, activities, appliances, quality etc) and financials terms.",
    },
    {
      id: "2",
      img: design,
      heading: "design",
      content:
        "We visualize, create 2D and 3D views according to our discussion. Our 3D views will enable you to visualise your home interiors as much as realistically possible. This is one important step where we make a huge difference that matters you most.",
    },
    {
      id: "3",
      img: execution,
      heading: "execution",
      content:
        "We bring your stunning designs to reality using our skilled craftsmen and execution team. Transformation in progress.",
    },
    {
      id: "4",
      img: move_in,
      heading: "move-in",
      content:
        "It’s reveal time. The moment we’ve all been waiting for. Now your space is ready to welcome you and invite you to 'come home to your-self'",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(data[0]);

  useEffect(() => {
    if (progressBar > 12.5) {
      setStatus1("passed");
      setCurrentIndex(0);
    } else {
      setStatus1("notPassed");
    }

    if (progressBar > 37.5) {
      setStatus2("passed");
      setCurrentIndex(1);
    } else {
      setStatus2("notPassed");
    }

    if (progressBar > 62.5) {
      setStatus3("passed");
      setCurrentIndex(2);
    } else {
      setStatus3("notPassed");
    }

    if (progressBar > 87.5) {
      setStatus4("passed");
      setCurrentIndex(3);
    } else {
      setStatus4("notPassed");
    }
  }, [progressBar]);

  useEffect(() => {
    setCurrentProject(data[currentIndex]);
  }, [currentIndex]);

  return (
    <LeftRightAligner>
      <div className="mx-auto grid gap-10 my-10">
        <div className="mx-auto text-3xl font-semibold text-center">
          COMPLETE INTERIOR DESIGN IN 4 EASY STEPS
        </div>
        <div className="relative">
          <div className="grid grid-flow-col">
            <StageIcon status={status1} name="1" desc="meeting" />
            <StageIcon status={status2} name="2" desc="design" />
            <StageIcon status={status3} name="3" desc="execution" />
            <StageIcon status={status4} name="4" desc="move-in" />
          </div>
          <ProgressBar
            className="absolute top-[19px]"
            progress={progressBar}
            setProgress={setProgressBar}
            duration={20000}
          />
        </div>

        <div className="grid mx-auto relative ">
          <div className="">
            <motion.div
              // layout
              // key={currentProject.id}
              // initial={{ scale: 0 }}
              // animate={{ scale: 1 }}
              // exit={{ scale: 0, opacity: 0 }}
              // transition={{ duration: 0.5 }}
              // layout
              key={currentProject.id}
              // style={{ x: -100 }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              // exit={{ y:50 }}
              // transition={{ duration: 2 }}
              className="grid "
            >
              <div className="m-auto grid gap- md:gap-4 ">
                <div className="h-[350px] md:h-[450px]">
                  <Image
                    alt=""
                    className="m-auto h-[350px] md:h-[450px] p-3 md:p-10"
                    src={currentProject.img}
                  />
                </div>
                <div className="grid">
                  <div className="mx-auto max-w-[800px] grid grid-flow-row sm:grid-flow-col gap-1 sm:gap-4 bg-surface px-6 py-10 grid rounded">
                    <div className="grid grid-flow-col mb-auto mr-auto gap-4 sm:mr-0 sm:gap-2">
                      <div className="bg-primary grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor ">
                        <div className="m-auto">{currentProject.id}</div>
                      </div>
                      <div className="uppercase font-bold text-md mb-auto my-auto whitespace-nowrap">
                        {currentProject.heading}
                      </div>
                    </div>
                    <div className="text-[14px] lg:text-md text-left opacity-60 text-onSurface mt-[6.5px] ml-14 sm:ml-0 leading-6">
                      {currentProject.content}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* // ))} */}
            {/* </AnimatePresence> */}
          </div>
        </div>

        {/* <div onClick={() => setCurrentIndex(currentIndex + 1)}>test</div> */}
      </div>
    </LeftRightAligner>
  );
}
