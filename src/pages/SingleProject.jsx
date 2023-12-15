import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectSections from '../components/projects/ProjectSections'
import { projects } from '../constants/projects'
import Divider from '../components/shared/Divider'

export default function SingleProject() {
  const [currentProject, setCurrentProject] = useState(null)
  const [containerHeight, setContainerHeight] = useState(0) // Default to 'auto'
  const contentRef = useRef(null) // Ref for the content div

  useEffect(() => {
    const path = window.location.pathname
    const id = path.split('/').pop()
    const project = projects.find((project) => project.id === Number(id))
    setCurrentProject(project)

    return () => {
      setCurrentProject(null)
    }
  }, [])

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContainerHeight(`${contentRef.current.offsetHeight}px`)
    }
  }, [])

  const translate = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    // enter: (i) => ({
    //   y: 0,
    //   opacity: 1,
    //   transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    // }),
    enter: (i) => console.log('enter :>> ', i),
    exit: (i) => ({
      y: '100%',
      opacity: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    }),
  }

  console.log('currentProject :>> ', currentProject)

  const getChars = (word) => {
    let chars = []

    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
          key={char + i}
        >
          {char}
        </motion.span>
      )
    })

    return chars
  }
  console.log('containerHeight :>> ', containerHeight)

  // if (!currentProject) return <p className='text-center'>...LOADING</p>
  if (!currentProject) return null
  return (
    <div
      className={`mt-10 md:mt-12 w-full h-screen max-w-6xl mx-auto px-4 md:px-8 `}
      // style={{ height: containerHeight }}
    >
      <div className='relative mb-24 w-full' ref={contentRef}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          // src={`/assets/images/projects/${currentProject.src}`}
          // alt={`${currentProject.name} header image`}
          // className='z-0 inline-block w-full h-auto'
          // style={{
          //   backgroundImage: `url(/assets/images/projects/${currentProject.src})`,
          // }}
          className='bg-cover bg-no-repeat bg-center w-full h-[50vh] inline-block'
        />
        {/* <motion.img
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          src={`/assets/images/projects/${currentProject.src}`}
          alt={`${currentProject.name} header image`}
          className='block w-full'
        /> */}
        <motion.div
          variants={{
            hidden: {
              width: 0,
            },
            visible: {
              width: 'auto',
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className='absolute bottom-0 bg-black text-white w-3/4 -mt-8 z-50 -mb-8 md:-mb-10 ml-4 h-[64px] md:h-[88px] flex items-center '
        >
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 0.7,
                  ease: 'easeInOut',
                },
              },
            }}
            initial='hidden'
            animate='visible'
            className='project-title uppercase text-4xl md:text-7xl px-4 md:px-8'
          >
            {/* {getChars(currentProject?.name)} */}
            {currentProject?.name}
            {/* {currentProject?.name.map(letter)} */}
          </motion.h1>
        </motion.div>
      </div>

      <ProjectSections
        sectionName='About'
        sectionText={currentProject.about}
        sectionImage={currentProject.previews[0].src}
      />

      <ProjectSections
        sectionName='Strategy'
        sectionText={currentProject.strategy}
        sectionImage={currentProject.previews[1].src}
      />
      <ProjectSections
        sectionName='Results'
        sectionText={currentProject.results}
        sectionImage={currentProject.previews[2].src}
      />
    </div>
  )
}
