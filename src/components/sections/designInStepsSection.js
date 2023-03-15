import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LeftRightAligner from '../left-right-aligner'
import StageIcon from '../stageIcon'
import teamImage from '../../../public/SVG/team.svg'
// import SwipeableViews from 'react-swipeable-views'
// import { autoPlay } from 'react-swipeable-views-utils';
import ProgressBar from '../progressBar'

import img1 from '../../../public/images/Asset_16.png'
import img2 from '../../../public/images/Asset_14.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Carousel } from 'flowbite-react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function DesignInStepsSection() {

  const [progressBar , setProgressBar] = useState(0)

  const [count, setCount] = useState(0)
  const [status1, setStatus1] = useState('notPassed')
  const [status2, setStatus2] = useState('notPassed')
  const [status3, setStatus3] = useState('notPassed')
  const [status4, setStatus4] = useState('notPassed')
  const [currentProject, setCurrentProject] = useState(0);
  const data = [{ id: 1, src: img1 }, { id: 2, src: img2 }]
  const designSteps = [teamImage, teamImage, teamImage]

  useEffect(() => {
    let counter =0
    setInterval(() => {

      // setCount(counter++%8)
      
      console.log('gg', (counter+1)%8)

      if((counter+1)%8 > 0){
        setStatus1('passed')
      }else{
        setStatus1('notPassed')
      }

      if((counter+1)%8 > 2){
        setStatus2('passed')
      }else{
        setStatus2('notPassed')
      }

      if((counter+1)%8 > 4){
        setStatus3('passed')
      }else{
        setStatus3('notPassed')
      }

      if((counter+1)%8 > 6){
        setStatus4('passed')
      }else{
        setStatus4('notPassed')
      }
      counter++
   
    }, 2500)
  }, [])

  return (
    <LeftRightAligner>
      <div className='mx-auto grid gap-10 my-10'>
        <div className='mx-auto text-3xl font-semibold'>COMPLETE INTERIOR DESIGN IN 4 EASY STEPS</div>
        <div className='relative'>

          <div className='grid grid-flow-col'>
            <StageIcon status={status1} name='1' desc='meeting' />
            <StageIcon status={status2} name='2' desc='design' />
            <StageIcon status={status3} name='3' desc='execution' />
            <StageIcon status={status4} name='4' desc='move-in' />
          </div>

          <ProgressBar className='absolute top-6' progress={progressBar} setProgress={setProgressBar} duration={20000} />
        </div>

        <div className='grid m-auto h-[500px] w-[500px]'>
          <Carousel className='grid m-auto' indicators={false} >

            <Image className='m-auto' src={teamImage} />
            <Image className='m-auto' src={teamImage} />
            <Image className='m-auto' src={teamImage} />
            <Image className='m-auto' src={teamImage} />
          </Carousel>


        </div>

      </div>
    </LeftRightAligner>
  )
}
