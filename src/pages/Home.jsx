import React from 'react'
import Socials from '../components/shared/Socials'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center relative'>
        <motion.img
          variants={{
            hidden: {
              height: 0,
              width: 0,
              scale: 0,
            },
            visible: {
              height: '50vw',
              width: '50vw',
              scale: 1,
              transition: {
                // delay: 0.4,
                duration: 1,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          src={`/assets/images/logo/logo-black.svg`}
          // className='home-logo md:absolute md:top-10 md:left-0'
          className='home-logo origin-top'
          alt='jag logo'
        />
        <Socials />
      </div>
    </>
  )
}
