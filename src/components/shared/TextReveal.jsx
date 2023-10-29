import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function TextReveal({
  children,
  width = 'fit-content',
  animationDelay = null,
  slideDelay = null,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const colorSLiceControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      colorSLiceControls.start('visible')
    }
  }, [isInView])

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: animationDelay ? animationDelay : 0.4,
        }}
        style={{ width }}
      >
        {children}
      </motion.div>
      {/* Color Slide */}
      <motion.div
        variants={{
          hidden: { opacity: 0, left: 0 },
          visible: { opacity: 1, left: '100%' },
        }}
        initial='hidden'
        animate={colorSLiceControls}
        transition={{
          duration: 0.45,
          ease: 'easeIn',
          delay: slideDelay ? slideDelay : 0,
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
        className='bg-brandPrimary'
      />
    </div>
  )
}
