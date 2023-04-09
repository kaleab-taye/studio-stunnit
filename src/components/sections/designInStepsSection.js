import React, { useEffect, useState } from 'react'
import LeftRightAligner from '../left-right-aligner'
import StageIcon from '../stageIcon'
import execution from '../../../public/SVG/Execution.svg'
import meeting from '../../../public/SVG/Meeting.svg'
import design from '../../../public/SVG/Design.svg'
import move_in from '../../../public/SVG/Move-in.svg'
import ProgressBar from '../progressBar'

import img1 from '../../../public/images/Asset_16.png'
import img2 from '../../../public/images/Asset_14.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Carousel } from 'flowbite-react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Image from 'next/image';


export default function DesignInStepsSection() {

  const [progressBar, setProgressBar] = useState(0)
  const [status1, setStatus1] = useState('notPassed')
  const [status2, setStatus2] = useState('notPassed')
  const [status3, setStatus3] = useState('notPassed')
  const [status4, setStatus4] = useState('notPassed')

  const data = [
    { id: '1', img: meeting, heading: "meeting", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },
    { id: '2', img: design, heading: "design", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },
    { id: '3', img: execution, heading: "execution", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },
    { id: '4', img: move_in, heading: "move-in", content: "Here we will delve into the details. It is the time we choose the right material, make timely decisions, keep track of your budget, trust our process and let the design manifest." },

  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentProject, setCurrentProject] = useState(data[0])

  useEffect(() => {

    if (progressBar > 12.5) {
      setStatus1('passed')
      setCurrentIndex(0)
    } else {
      setStatus1('notPassed')
    }

    if (progressBar > 37.5) {
      setStatus2('passed')
      setCurrentIndex(1)

    } else {
      setStatus2('notPassed')
    }

    if (progressBar > 62.5) {
      setStatus3('passed')
      setCurrentIndex(2)

    } else {
      setStatus3('notPassed')
    }

    if (progressBar > 87.5) {
      setStatus4('passed')
      setCurrentIndex(3)

    } else {
      setStatus4('notPassed')
    }

  }, [progressBar])

  useEffect(() => {
    setCurrentProject(data[currentIndex])
  }, [currentIndex])

  return (
    <LeftRightAligner>
      <div className='mx-auto grid gap-10 my-10'>
        <div className='mx-auto text-3xl font-semibold text-center'>COMPLETE INTERIOR DESIGN IN 4 EASY STEPS</div>
        <div className='relative'>
          <div className='grid grid-flow-col'>
            <StageIcon status={status1} name='1' desc='meeting' />
            <StageIcon status={status2} name='2' desc='design' />
            <StageIcon status={status3} name='3' desc='execution' />
            <StageIcon status={status4} name='4' desc='move-in' />
          </div>
          <ProgressBar className='absolute top-[19px]' progress={progressBar} setProgress={setProgressBar} duration={20000} />
        </div>

        <div className='grid mx-auto relative '>
          <div className=''>
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
              className='grid '
            >
              <div className='m-auto grid gap- md:gap-4 '>

                <div className='h-[350px] md:h-[450px]'>

                  <Image alt='' className='m-auto h-[350px] md:h-[450px] p-3 md:p-10' src={currentProject.img} />
                </div>
                <div className='grid'>
                  <div className='mx-auto max-w-[800px] grid grid-flow-row sm:grid-flow-col gap-1 sm:gap-4 bg-surface px-6 py-10 grid rounded'>
                    <div className='grid grid-flow-col mb-auto mr-auto gap-4 sm:mr-0 sm:gap-2'>
                      <div className='bg-primary grid rounded-full mx-auto p-2 w-10 h-10 text-sm text-primaryColor '>
                        <div className='m-auto'>
                          {currentProject.id}
                        </div>
                      </div>
                      <div className='uppercase font-bold text-md mb-auto my-auto whitespace-nowrap'>{currentProject.heading}</div>
                    </div>
                    <div className='text-sm text-onSurface mt-2 ml-14 sm:ml-0'>{currentProject.content}
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
  )
}