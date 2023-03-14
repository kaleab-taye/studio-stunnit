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

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function DesignInStepsSection() {

  const [currentDesignStep, setCurrentDesignStep] = useState(0)
  const [currentProject, setCurrentProject] = useState(0);
  const data = [{ id: 1, src: img1 }, { id: 2, src: img2 }]
  const designSteps = [teamImage, teamImage, teamImage]

  useEffect(() => {
    setInterval(() => {
      console.log('gg')
      console.log('gg')
      console.log(designSteps.length, currentDesignStep)
      console.log(currentDesignStep >= designSteps.length)
      if (currentDesignStep >= designSteps.length) {
        setCurrentDesignStep(0)
      }
      else {
        setCurrentDesignStep(e => e + 1)
      }

    }, 5000)
  }, [])

  return (
    <LeftRightAligner>
      <div className='mx-auto grid gap-10 my-10'>
        <div className='mx-auto text-3xl font-semibold'>COMPLETE INTERIOR DESIGN IN 4 EASY STEPS</div>
        <div className='relative'>

          <div className='grid grid-flow-col'>
            <StageIcon status='passed' name='1' desc='meeting' />
            <StageIcon status='notPassed' name='2' desc='design' />
            <StageIcon status='passed' name='3' desc='execution' />
            <StageIcon status='passed' name='3' desc='move-in' />
          </div>

          <ProgressBar className='absolute top-50' duration={20000} />
        </div>
        <div className='grid mx-auto'>
          <div className='bg-yellow-500 p-5 max-w-[1000px]'>
            {/* <Carousel>

              <AutoPlaySwipeableViews index={currentDesignStep}  className = 'max-w-[1000px] bg-red-500 mx-auto grid ' interval={4000} >
              <Image className='max-w-[400px] mx-auto' src={teamImage} />
              <Image className='max-w-[400px] mx-auto bg-green-400' src={teamImage} />
              <Image className='max-w-[400px]' src={teamImage} />
              <Image className='max-w-[400px]' src={teamImage} />
              </AutoPlaySwipeableViews> 
            </Carousel> */}

            <div>
            </div>

          </div>
        </div>
      </div>
    </LeftRightAligner>
  )
}
