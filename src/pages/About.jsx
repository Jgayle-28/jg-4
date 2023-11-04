import { motion } from 'framer-motion'
import TextReveal from '../components/shared/TextReveal'

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
}
const letter = {
  hidden: { opacity: 0, x: -2 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeInOut' },
  },
}

export default function About() {
  return (
    <section className='w-full max-w-6xl relative'>
      <motion.div
        variants={{
          hidden: {
            height: 0,
            width: 0,
            scale: 0,
          },
          visible: {
            height: '75%',
            width: '75%',
            scale: 1,
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          },
        }}
        initial='hidden'
        animate='visible'
        className='absolute border border-[14px] border-brandGray/50 h-3/4 w-full md:w-3/4 -z-10 origin-top-left'
      />
      <div className='flex items-start justify-start mt-10 ml-10'>
        <motion.svg
          variants={sentence}
          initial='hidden'
          animate='visible'
          id='Layer_1'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 251.72'
          className='h-48 '
        >
          <motion.path
            className='ml-3'
            variants={letter}
            fill='#45FED7'
            d='M67.55,229.07c-6.04-5.24-10.12-11.48-12.23-18.72-2.11-7.25-2.77-14.7-1.96-22.35-6.85,1.01-13.59,1.06-20.23,.15-6.64-.91-12.89-3.07-18.72-6.49-5.44-3.22-9.26-7.35-11.48-12.38-2.22-5.03-3.17-10.27-2.87-15.7,.3-5.44,1.61-10.82,3.93-16.16,2.31-5.33,5.28-10.01,8.91-14.04,5.44-6.24,11.57-11.32,18.42-15.25,6.84-3.93,14.09-6.89,21.74-8.91,0-8.05,1.31-16.2,3.93-24.46,2.61-8.25,6.19-16.01,10.72-23.25s9.76-13.89,15.7-19.93c5.94-6.04,12.23-10.97,18.87-14.8,9.46-5.44,19.53-8.31,30.2-8.61,10.67-.3,20.54,2.97,29.6,9.81,4.83,3.83,8.65,8.15,11.48,12.99,2.82,4.83,4.83,9.97,6.04,15.4,7.85-4.63,15.8-9.16,23.86-13.59,8.05-4.43,16.1-8.65,24.16-12.68,10.07-5.23,20.43-9.97,31.11-14.19,2.01-.8,4.33-1.66,6.95-2.57,2.61-.91,5.28-1.66,8-2.26,2.72-.6,5.38-.95,8-1.06,2.61-.1,4.93,.45,6.95,1.66,1.81,1.01,2.82,2.67,3.02,4.98,.2,2.32-.05,4.73-.75,7.25-.71,2.52-1.71,4.98-3.02,7.4-1.31,2.42-2.37,4.13-3.17,5.13-2.82,3.43-5.74,6.64-8.76,9.66-11.28,12.08-22.55,24.11-33.82,36.09-11.28,11.98-22.15,24.31-32.62,36.99-3.02,3.62-5.99,7.3-8.91,11.02-2.92,3.73-5.69,7.6-8.31,11.63,10.27,9.66,18.52,20.84,24.76,33.52,1.61-.41,3.12-.66,4.53-.75,1.41-.1,2.92-.25,4.53-.45,2.01-.2,4.93-.45,8.76-.75,3.82-.3,7.9-.45,12.23-.45s8.61,.3,12.83,.91c4.23,.6,7.9,1.71,11.02,3.32,3.12,1.61,5.33,3.78,6.64,6.49,1.31,2.72,1.16,6.19-.45,10.42-1.81,5.03-4.94,9.41-9.36,13.14-4.43,3.72-9.41,6.95-14.95,9.66-5.54,2.72-11.23,4.98-17.06,6.8-5.84,1.81-11.08,3.22-15.7,4.23-4.83,1-9.81,1.71-14.95,2.11-5.13,.4-10.12,.25-14.95-.45-4.83-.71-9.31-2.17-13.44-4.38-4.13-2.22-7.5-5.44-10.12-9.66-6.85,6.44-12.89,13.49-18.12,21.14-5.24,7.65-9.47,16-12.68,25.06-1.01-5.64-1.01-11.28,0-16.91,1-5.64,2.72-11.02,5.13-16.16,2.42-5.13,5.44-10.02,9.06-14.65,3.62-4.63,7.45-8.76,11.48-12.38l.3-.3c-.6-5.44-.5-10.92,.3-16.46,.8-5.54,2.16-10.97,4.08-16.31,1.91-5.33,4.12-10.57,6.64-15.7,2.52-5.13,5.18-10.01,8-14.65-3.43-2.21-6.9-4.27-10.42-6.19-3.53-1.91-7.2-3.67-11.02-5.28-9.47,13.69-20.74,25.87-33.82,36.54-13.09,10.67-26.88,19.22-41.37,25.67-6.45,2.82-12.99,5.13-19.63,6.95-2.42,7.04-3.53,14.24-3.32,21.59,.2,7.35,2.31,14.54,6.34,21.59Zm-8.46-64.32c4.63-11.27,10.47-21.84,17.52-31.71,7.04-9.86,14.8-19.03,23.25-27.48h-2.11c-12.89,.41-25.67,2.72-38.35,6.95,.2,3.83,.7,7.6,1.51,11.32,.8,3.73,2.01,7.6,3.62,11.63-4.43-6.24-7.65-13.39-9.66-21.44-4.03,1.61-7.9,3.43-11.63,5.44-3.73,2.01-7.3,4.23-10.72,6.64-3.62,2.62-7.4,6.09-11.32,10.42-3.93,4.33-7.1,8.91-9.51,13.74s-3.47,9.71-3.17,14.65,2.97,9.31,8,13.14c5.23,4.03,11.12,6.44,17.67,7.25,6.54,.8,13.03,.6,19.48-.6,.4-3.43,1.1-6.8,2.11-10.12,1.01-3.32,2.11-6.6,3.32-9.81Zm73.38-87.28c5.84-4.43,11.78-8.71,17.82-12.84,6.04-4.12,12.18-8.1,18.42-11.93-.41-8.65-2.82-16.56-7.25-23.71-4.43-7.14-11.28-12.03-20.54-14.65-7.05-2.01-14.25-2.16-21.59-.45-7.35,1.71-14.04,4.58-20.08,8.61-3.02,2.01-5.89,4.23-8.61,6.64-2.72,2.42-5.19,5.03-7.4,7.85-1.21,1.21-1.86,2.47-1.96,3.78-.1,1.31-.05,2.57,.15,3.78,.2,1.21,.35,2.42,.45,3.62,.1,1.21-.25,2.42-1.06,3.62-4.63,7.25-8.81,14.65-12.53,22.2-3.73,7.55-6.39,15.35-8,23.41,8.05-1.61,16.2-2.42,24.46-2.42s16.41,.5,24.46,1.51l5.74-4.83c1.21-1.61,2.31-3.12,3.32-4.53,1.01-1.41,2.01-2.92,3.02-4.53,1.01-1.61,2.06-3.67,3.17-6.19,1.1-2.52,1.06-4.68-.15-6.49,1.21,.41,2.61,1.31,4.23,2.72,1.61,1.41,2.92,3.02,3.93,4.83Zm-44.09,67.04c-4.23,5.44-8.36,11.28-12.38,17.52-4.03,6.24-7.35,12.78-9.97,19.63,5.44-2.02,10.77-4.33,16.01-6.95,10.87-5.64,20.79-12.48,29.75-20.54,8.95-8.05,17.16-16.91,24.61-26.58,2.01-2.42,3.97-4.88,5.89-7.4,1.91-2.52,3.67-5.08,5.29-7.7-7.65-2.61-16.11-4.53-25.37-5.74-6.04,6.04-11.88,12.18-17.51,18.42-5.64,6.24-11.07,12.68-16.31,19.33Zm65.83-67.65c-4.23,3.83-8.45,7.65-12.68,11.48-4.23,3.83-8.36,7.75-12.38,11.78,3.82,.81,7.55,1.77,11.17,2.87,3.62,1.11,7.25,2.37,10.87,3.77,3.82-6.44,7.2-13.08,10.12-19.93,2.92-6.84,5.08-13.89,6.49-21.14l-13.59,11.17ZM219.15,30.36c-6.44,4.23-12.89,8.41-19.33,12.53-6.45,4.13-12.89,8.51-19.33,13.14,.2,4.03,.05,8-.45,11.93-.51,3.93-1.36,7.8-2.57,11.63-1.62,5.64-3.68,11.13-6.19,16.46-2.52,5.34-5.39,10.62-8.61,15.85,7.25,3.22,14.09,7.35,20.54,12.38,9.86-16.51,21.29-32.01,34.28-46.51,12.99-14.5,25.92-28.89,38.81-43.19l12.99-13.89c.4-.6,1.46-1.71,3.17-3.32,1.71-1.61,3.57-3.32,5.59-5.13,2.01-1.81,3.82-3.37,5.44-4.68,1.61-1.31,2.52-1.86,2.72-1.66-1.21-1.21-3.02-1.76-5.44-1.66-2.42,.1-4.98,.51-7.7,1.21-2.72,.71-5.28,1.51-7.7,2.42s-4.23,1.56-5.44,1.96c-7.05,2.82-13.99,5.94-20.84,9.36-6.85,3.43-13.49,7.15-19.93,11.17Zm-50.13,155.23c7.04-5.24,14.54-9.47,22.5-12.68,7.95-3.22,16.16-5.64,24.61-7.25-3.62-6.04-7.55-11.63-11.78-16.76-4.23-5.13-8.96-9.82-14.19-14.04-1.81,2.82-3.58,5.69-5.29,8.61-1.71,2.92-3.37,5.89-4.98,8.91-2.22,4.63-4.48,9.87-6.8,15.7-2.32,5.84-3.68,11.67-4.08,17.52Zm38.35-7.55c-6.44,3.02-12.68,6.44-18.72,10.27-6.04,3.82-11.68,8.05-16.91,12.68l.91,2.12c2.21,3.82,5.18,6.69,8.91,8.61,3.72,1.91,7.7,3.12,11.93,3.63,4.23,.5,8.55,.55,12.99,.15,4.43-.41,8.46-.91,12.08-1.51,8.46-1.62,17.11-3.98,25.97-7.1,8.86-3.12,16.51-7.6,22.95-13.44,2.21-2.22,4.38-4.98,6.49-8.31,2.11-3.32,2.26-6.7,.45-10.12-1.62-3.02-4.33-5.03-8.15-6.04-3.83-1.01-7.35-1.61-10.57-1.81-8.26-.6-16.51,.2-24.76,2.42-8.26,2.21-16.11,5.03-23.56,8.46Z'
          />
          <motion.path
            variants={letter}
            fill='#000'
            d='M67.55,229.07c-6.04-5.24-10.12-11.48-12.23-18.72-2.11-7.25-2.77-14.7-1.96-22.35-6.85,1.01-13.59,1.06-20.23,.15-6.64-.91-12.89-3.07-18.72-6.49-5.44-3.22-9.26-7.35-11.48-12.38-2.22-5.03-3.17-10.27-2.87-15.7,.3-5.44,1.61-10.82,3.93-16.16,2.31-5.33,5.28-10.01,8.91-14.04,5.44-6.24,11.57-11.32,18.42-15.25,6.84-3.93,14.09-6.89,21.74-8.91,0-8.05,1.31-16.2,3.93-24.46,2.61-8.25,6.19-16.01,10.72-23.25s9.76-13.89,15.7-19.93c5.94-6.04,12.23-10.97,18.87-14.8,9.46-5.44,19.53-8.31,30.2-8.61,10.67-.3,20.54,2.97,29.6,9.81,4.83,3.83,8.65,8.15,11.48,12.99,2.82,4.83,4.83,9.97,6.04,15.4,7.85-4.63,15.8-9.16,23.86-13.59,8.05-4.43,16.1-8.65,24.16-12.68,10.07-5.23,20.43-9.97,31.11-14.19,2.01-.8,4.33-1.66,6.95-2.57,2.61-.91,5.28-1.66,8-2.26,2.72-.6,5.38-.95,8-1.06,2.61-.1,4.93,.45,6.95,1.66,1.81,1.01,2.82,2.67,3.02,4.98,.2,2.32-.05,4.73-.75,7.25-.71,2.52-1.71,4.98-3.02,7.4-1.31,2.42-2.37,4.13-3.17,5.13-2.82,3.43-5.74,6.64-8.76,9.66-11.28,12.08-22.55,24.11-33.82,36.09-11.28,11.98-22.15,24.31-32.62,36.99-3.02,3.62-5.99,7.3-8.91,11.02-2.92,3.73-5.69,7.6-8.31,11.63,10.27,9.66,18.52,20.84,24.76,33.52,1.61-.41,3.12-.66,4.53-.75,1.41-.1,2.92-.25,4.53-.45,2.01-.2,4.93-.45,8.76-.75,3.82-.3,7.9-.45,12.23-.45s8.61,.3,12.83,.91c4.23,.6,7.9,1.71,11.02,3.32,3.12,1.61,5.33,3.78,6.64,6.49,1.31,2.72,1.16,6.19-.45,10.42-1.81,5.03-4.94,9.41-9.36,13.14-4.43,3.72-9.41,6.95-14.95,9.66-5.54,2.72-11.23,4.98-17.06,6.8-5.84,1.81-11.08,3.22-15.7,4.23-4.83,1-9.81,1.71-14.95,2.11-5.13,.4-10.12,.25-14.95-.45-4.83-.71-9.31-2.17-13.44-4.38-4.13-2.22-7.5-5.44-10.12-9.66-6.85,6.44-12.89,13.49-18.12,21.14-5.24,7.65-9.47,16-12.68,25.06-1.01-5.64-1.01-11.28,0-16.91,1-5.64,2.72-11.02,5.13-16.16,2.42-5.13,5.44-10.02,9.06-14.65,3.62-4.63,7.45-8.76,11.48-12.38l.3-.3c-.6-5.44-.5-10.92,.3-16.46,.8-5.54,2.16-10.97,4.08-16.31,1.91-5.33,4.12-10.57,6.64-15.7,2.52-5.13,5.18-10.01,8-14.65-3.43-2.21-6.9-4.27-10.42-6.19-3.53-1.91-7.2-3.67-11.02-5.28-9.47,13.69-20.74,25.87-33.82,36.54-13.09,10.67-26.88,19.22-41.37,25.67-6.45,2.82-12.99,5.13-19.63,6.95-2.42,7.04-3.53,14.24-3.32,21.59,.2,7.35,2.31,14.54,6.34,21.59Zm-8.46-64.32c4.63-11.27,10.47-21.84,17.52-31.71,7.04-9.86,14.8-19.03,23.25-27.48h-2.11c-12.89,.41-25.67,2.72-38.35,6.95,.2,3.83,.7,7.6,1.51,11.32,.8,3.73,2.01,7.6,3.62,11.63-4.43-6.24-7.65-13.39-9.66-21.44-4.03,1.61-7.9,3.43-11.63,5.44-3.73,2.01-7.3,4.23-10.72,6.64-3.62,2.62-7.4,6.09-11.32,10.42-3.93,4.33-7.1,8.91-9.51,13.74s-3.47,9.71-3.17,14.65,2.97,9.31,8,13.14c5.23,4.03,11.12,6.44,17.67,7.25,6.54,.8,13.03,.6,19.48-.6,.4-3.43,1.1-6.8,2.11-10.12,1.01-3.32,2.11-6.6,3.32-9.81Zm73.38-87.28c5.84-4.43,11.78-8.71,17.82-12.84,6.04-4.12,12.18-8.1,18.42-11.93-.41-8.65-2.82-16.56-7.25-23.71-4.43-7.14-11.28-12.03-20.54-14.65-7.05-2.01-14.25-2.16-21.59-.45-7.35,1.71-14.04,4.58-20.08,8.61-3.02,2.01-5.89,4.23-8.61,6.64-2.72,2.42-5.19,5.03-7.4,7.85-1.21,1.21-1.86,2.47-1.96,3.78-.1,1.31-.05,2.57,.15,3.78,.2,1.21,.35,2.42,.45,3.62,.1,1.21-.25,2.42-1.06,3.62-4.63,7.25-8.81,14.65-12.53,22.2-3.73,7.55-6.39,15.35-8,23.41,8.05-1.61,16.2-2.42,24.46-2.42s16.41,.5,24.46,1.51l5.74-4.83c1.21-1.61,2.31-3.12,3.32-4.53,1.01-1.41,2.01-2.92,3.02-4.53,1.01-1.61,2.06-3.67,3.17-6.19,1.1-2.52,1.06-4.68-.15-6.49,1.21,.41,2.61,1.31,4.23,2.72,1.61,1.41,2.92,3.02,3.93,4.83Zm-44.09,67.04c-4.23,5.44-8.36,11.28-12.38,17.52-4.03,6.24-7.35,12.78-9.97,19.63,5.44-2.02,10.77-4.33,16.01-6.95,10.87-5.64,20.79-12.48,29.75-20.54,8.95-8.05,17.16-16.91,24.61-26.58,2.01-2.42,3.97-4.88,5.89-7.4,1.91-2.52,3.67-5.08,5.29-7.7-7.65-2.61-16.11-4.53-25.37-5.74-6.04,6.04-11.88,12.18-17.51,18.42-5.64,6.24-11.07,12.68-16.31,19.33Zm65.83-67.65c-4.23,3.83-8.45,7.65-12.68,11.48-4.23,3.83-8.36,7.75-12.38,11.78,3.82,.81,7.55,1.77,11.17,2.87,3.62,1.11,7.25,2.37,10.87,3.77,3.82-6.44,7.2-13.08,10.12-19.93,2.92-6.84,5.08-13.89,6.49-21.14l-13.59,11.17ZM219.15,30.36c-6.44,4.23-12.89,8.41-19.33,12.53-6.45,4.13-12.89,8.51-19.33,13.14,.2,4.03,.05,8-.45,11.93-.51,3.93-1.36,7.8-2.57,11.63-1.62,5.64-3.68,11.13-6.19,16.46-2.52,5.34-5.39,10.62-8.61,15.85,7.25,3.22,14.09,7.35,20.54,12.38,9.86-16.51,21.29-32.01,34.28-46.51,12.99-14.5,25.92-28.89,38.81-43.19l12.99-13.89c.4-.6,1.46-1.71,3.17-3.32,1.71-1.61,3.57-3.32,5.59-5.13,2.01-1.81,3.82-3.37,5.44-4.68,1.61-1.31,2.52-1.86,2.72-1.66-1.21-1.21-3.02-1.76-5.44-1.66-2.42,.1-4.98,.51-7.7,1.21-2.72,.71-5.28,1.51-7.7,2.42s-4.23,1.56-5.44,1.96c-7.05,2.82-13.99,5.94-20.84,9.36-6.85,3.43-13.49,7.15-19.93,11.17Zm-50.13,155.23c7.04-5.24,14.54-9.47,22.5-12.68,7.95-3.22,16.16-5.64,24.61-7.25-3.62-6.04-7.55-11.63-11.78-16.76-4.23-5.13-8.96-9.82-14.19-14.04-1.81,2.82-3.58,5.69-5.29,8.61-1.71,2.92-3.37,5.89-4.98,8.91-2.22,4.63-4.48,9.87-6.8,15.7-2.32,5.84-3.68,11.67-4.08,17.52Zm38.35-7.55c-6.44,3.02-12.68,6.44-18.72,10.27-6.04,3.82-11.68,8.05-16.91,12.68l.91,2.12c2.21,3.82,5.18,6.69,8.91,8.61,3.72,1.91,7.7,3.12,11.93,3.63,4.23,.5,8.55,.55,12.99,.15,4.43-.41,8.46-.91,12.08-1.51,8.46-1.62,17.11-3.98,25.97-7.1,8.86-3.12,16.51-7.6,22.95-13.44,2.21-2.22,4.38-4.98,6.49-8.31,2.11-3.32,2.26-6.7,.45-10.12-1.62-3.02-4.33-5.03-8.15-6.04-3.83-1.01-7.35-1.61-10.57-1.81-8.26-.6-16.51,.2-24.76,2.42-8.26,2.21-16.11,5.03-23.56,8.46Z'
          />

          <motion.path
            variants={letter}
            fill='#000'
            d='M289.21,66.6c3.62,2.82,5.59,6.75,5.89,11.78,.3,5.03-.6,10.57-2.72,16.61-2.11,6.04-5.13,12.28-9.06,18.72-3.93,6.45-8.41,12.49-13.44,18.12,5.84-1.01,10.62-3.87,14.34-8.61,3.72-4.73,6.39-12.33,8-22.8,3.02,1.41,5.03,3.93,6.04,7.55,1.01,3.62,.6,7.35-1.21,11.17-1.81,3.83-5.19,7.3-10.12,10.42-4.93,3.12-11.63,4.88-20.08,5.28-5.84,6.04-11.83,10.97-17.97,14.8-6.14,3.83-11.83,5.74-17.06,5.74s-7.7-2.31-8-6.94c-.3-4.63,1.06-10.67,4.08-18.12,3.02-7.45,7.3-15.95,12.83-25.52,5.54-9.56,11.52-19.28,17.97-29.14,6.44-9.86,12.93-19.48,19.48-28.84,6.54-9.36,12.33-17.67,17.36-24.91,.6-.8,1.1-2.01,1.51-3.62,.2-.6,.3-1.21,.3-1.81,.6-.6,1.41-.35,2.42,.75,1,1.11,1.96,2.62,2.87,4.53,.91,1.92,1.56,3.88,1.96,5.89,.4,2.01,.2,3.62-.6,4.83-2.42,3.42-6.24,8.81-11.48,16.16-5.24,7.35-10.87,15.51-16.91,24.46-6.04,8.96-12.13,18.17-18.27,27.63-6.14,9.47-11.43,18.07-15.86,25.82-4.43,7.75-7.65,14.09-9.66,19.03-2.01,4.94-1.91,7.4,.3,7.4,2.42,0,5.74-1.91,9.97-5.74,4.23-3.82,8.76-8.76,13.59-14.8-2.22-2.01-2.97-5.03-2.26-9.06,.7-4.02,2.21-8.4,4.53-13.14,2.31-4.73,5.18-9.66,8.61-14.8,3.42-5.13,6.74-9.76,9.97-13.89,3.22-4.12,6.04-7.6,8.46-10.42,2.42-2.82,3.82-4.33,4.23-4.53Zm-31.11,62.82c3.42-4.43,6.74-9.11,9.97-14.04,3.22-4.93,6.19-9.91,8.91-14.95,2.72-5.03,5.08-9.91,7.1-14.65,2.01-4.73,3.42-9.11,4.23-13.14-1.21,1.41-2.87,3.47-4.98,6.19-2.11,2.72-4.38,5.89-6.8,9.51-2.42,3.62-4.83,7.45-7.25,11.48-2.42,4.03-4.58,7.96-6.49,11.78-1.92,3.83-3.32,7.3-4.23,10.42-.91,3.12-1.06,5.59-.45,7.4Z'
          />
          <motion.path
            variants={letter}
            fill='#000'
            d='M353.84,70.83c2.42,2.82,2.87,8,1.36,15.55-1.51,7.55-6.19,16.76-14.04,27.63l-6.04,8.15c2.42,.81,4.68,.71,6.8-.3,2.11-1.01,3.97-2.57,5.59-4.68,1.61-2.11,2.87-4.68,3.77-7.7,.91-3.02,1.36-6.34,1.36-9.97,3.62,2.62,5.38,5.74,5.29,9.36-.11,3.62-1.26,6.9-3.47,9.81-2.22,2.92-5.28,5.03-9.21,6.34-3.93,1.31-7.9,1.06-11.93-.75-2.42,3.02-5.09,6.09-8,9.21-2.92,3.12-5.94,6.04-9.06,8.76-3.12,2.72-6.39,5.09-9.81,7.1-3.43,2.01-6.85,3.42-10.27,4.23-2.42,.6-4.83,.3-7.25-.91s-3.93-3.62-4.53-7.25c-.6-3.62,.1-8.65,2.11-15.1,2.02-6.44,6.14-14.8,12.38-25.07,5.03-8.05,10.37-14.8,16.01-20.23,5.63-5.44,11.02-9.56,16.16-12.38,5.13-2.82,9.76-4.33,13.89-4.53,4.13-.2,7.1,.71,8.91,2.72Zm-56.77,78.82c4.03-2.61,8.61-6.89,13.74-12.84,5.13-5.94,10.12-12.43,14.95-19.48-.41-2.01-.2-4.33,.6-6.95,.8-2.61,2.01-5.23,3.62-7.85,1.61-2.61,3.57-5.13,5.89-7.55,2.31-2.42,4.78-4.63,7.4-6.64,3.82-7.25,5.74-12.18,5.74-14.8-.2-1.21-1.16-1.86-2.87-1.96-1.71-.1-3.77,.96-6.19,3.17-3.43,2.82-7.25,6.9-11.48,12.23-4.23,5.34-8.36,11.02-12.38,17.06-4.03,6.04-7.75,12.08-11.17,18.12-3.43,6.04-6.09,11.38-8,16.01-1.91,4.63-2.97,8.11-3.17,10.42-.2,2.32,.91,2.67,3.32,1.06Z'
          />
          <motion.path
            variants={letter}
            fill='#000'
            d='M379.81,71.43c.6-.8,1.1-2.01,1.51-3.62,.2-.8,.3-1.51,.3-2.11,.6-.6,1.46-.3,2.57,.91,1.1,1.21,2.12,2.72,3.02,4.53,.91,1.81,1.51,3.77,1.81,5.89,.3,2.11,.05,3.77-.75,4.98-3.63,5.24-7.96,11.83-12.99,19.78-5.03,7.96-9.66,15.55-13.89,22.8-4.23,7.25-7.65,13.44-10.27,18.57-2.61,5.13-3.42,7.5-2.42,7.1,4.43-2.42,8.76-5.59,12.99-9.51,4.23-3.93,7.95-8.2,11.17-12.84,3.22-4.63,5.74-9.41,7.55-14.34,1.81-4.93,2.52-9.61,2.11-14.04,2.42,2.42,4.13,4.53,5.13,6.34,3.22-5.23,6.74-10.67,10.57-16.31,3.82-5.63,7.95-11.67,12.38-18.12,.6-.8,1.1-2.01,1.51-3.62,.2-.8,.3-1.51,.3-2.11,.4-.6,1.16-.3,2.26,.91,1.1,1.21,2.11,2.72,3.02,4.53,.91,1.81,1.56,3.77,1.96,5.89,.4,2.11,.2,3.77-.6,4.98-3.83,5.24-8.46,11.83-13.89,19.78-5.44,7.96-10.57,15.6-15.4,22.95-4.83,7.35-8.81,13.59-11.93,18.72-3.12,5.13-4.18,7.5-3.17,7.1,4.43-1.61,8.86-3.93,13.29-6.95,4.43-3.02,8.46-6.64,12.08-10.87s6.59-9.06,8.91-14.5c2.31-5.44,3.57-11.37,3.77-17.82,3.82,3.02,5.79,6.34,5.89,9.97,.1,3.62-1.01,7.35-3.32,11.17-2.32,3.83-5.44,7.55-9.36,11.17-3.93,3.62-7.95,6.95-12.08,9.97-4.13,3.02-8.05,5.59-11.78,7.7-3.73,2.11-6.39,3.58-8,4.38-1.41,.6-2.97,.81-4.68,.6-1.71-.2-2.77-.8-3.17-1.81-1.01-2.01-.3-6.04,2.11-12.08-2.82,2.22-5.79,4.38-8.91,6.49-3.12,2.12-6.39,4.38-9.81,6.8-1.41,1.01-3.02,1.31-4.83,.91-1.81-.4-2.92-1.1-3.32-2.11-.8-1.61-.65-4.78,.45-9.51,1.11-4.73,3.22-10.72,6.34-17.97,3.12-7.25,7.3-15.5,12.53-24.76,5.23-9.26,11.58-19.22,19.03-29.9Z'
          />
          <motion.path
            variants={letter}
            fill='#000'
            d='M475.84,54.82c-1.61,0-3.12-.05-4.53-.15-1.41-.1-2.92-.15-4.53-.15-3.63,5.44-7.75,11.63-12.38,18.57-4.63,6.95-9.31,14-14.04,21.14-4.73,7.15-9.31,14.15-13.74,20.99-4.43,6.85-8.31,12.94-11.63,18.27-3.32,5.34-5.89,9.57-7.7,12.68-1.81,3.12-2.42,4.58-1.81,4.38,4.43-1.61,8.86-3.93,13.29-6.95s8.46-6.64,12.08-10.87c3.63-4.23,6.59-9.06,8.91-14.5,2.31-5.44,3.57-11.37,3.77-17.82,3.82,3.02,5.79,6.34,5.89,9.97,.1,3.62-1.01,7.35-3.32,11.17-2.32,3.83-5.44,7.55-9.36,11.17-3.93,3.62-7.96,6.95-12.08,9.97-4.13,3.02-8.05,5.59-11.78,7.7-3.72,2.11-6.39,3.58-8,4.38-1.41,.6-3.02,.81-4.83,.6-1.81-.2-2.82-.8-3.02-1.81-.6-2.82,.66-7.7,3.77-14.65,3.12-6.95,7.3-15,12.53-24.16,5.23-9.16,11.17-19.03,17.82-29.6,6.64-10.57,13.39-20.88,20.23-30.95h-24.01c-6.95,0-11.83-.5-14.65-1.51-.2-2.21-1.21-4.12-3.02-5.74-1.81-1.61-3.67-3.07-5.59-4.38-1.91-1.31-3.57-2.61-4.98-3.93-1.41-1.31-1.71-2.77-.91-4.38,4.43,2.42,11.73,4.98,21.89,7.7,10.16,2.72,21.79,4.98,34.88,6.8,2.21-3.42,4.38-6.69,6.49-9.81,2.11-3.12,4.27-6.09,6.49-8.91,.6-.8,1.1-2.01,1.51-3.62,.2-.8,.3-1.51,.3-2.11,.6-.6,1.46-.3,2.57,.91,1.1,1.21,2.11,2.72,3.02,4.53s1.51,3.78,1.81,5.89c.3,2.11,.05,3.78-.76,4.98l-6.64,9.66c5.03,.41,10.01,.75,14.95,1.06,4.93,.3,10.01,.45,15.25,.45-.2,.6-.66,1.16-1.36,1.66-.71,.51-1.96,.91-3.77,1.21s-4.23,.45-7.25,.45-6.94-.1-11.78-.3Z'
          />
        </motion.svg>
      </div>
      <div className='w-full py-12 about-main '>
        <div className='w-[80%] mx-auto'>
          {/* <TextReveal> */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              },
            }}
            initial='hidden'
            animate='visible'
            className='pb-0 !font-bold uppercase !text-3xl'
          >
            I have a passion for creating user experiences that
            <br /> are <span>seamless,</span>
          </motion.p>
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              },
            }}
            initial='hidden'
            animate='visible'
            className='pb-0 !font-bold uppercase !text-3xl'
          >
            <span className='ml-20'>meaningful</span> and
          </motion.p>
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              },
            }}
            initial='hidden'
            animate='visible'
            className='pb-12 !font-bold uppercase !text-3xl'
          >
            <span className='text-5xl'>impactful.</span>
          </motion.p>
          <TextReveal slideDelay={0.65} animationDelay={1.2}>
            <p className='pb-12'>
              Hi there 👋, as you probably already know my name is Jerehme. But
              what you didn't know is that I can make a killer meatloaf! All
              jokes aside, I am truly passionate about designing and developing
              the web. I love creating things from scratch and bringing them to
              life with UI effects and animations creating a dynamic user
              experience. I have found my home in React and the MERN stack and
              enjoy dabbling in some Next.js
            </p>
          </TextReveal>
          <TextReveal slideDelay={0.65} animationDelay={1.2}>
            <p className='pb-12'>
              I'm a <span>selectively skilled</span> product designer with
              strong focus on producing high quality & impactful digital
              experience.
            </p>
          </TextReveal>
          <TextReveal slideDelay={0.65} animationDelay={1.2}>
            <p className='pb-12'>
              A visual designer - with skills that haven't been replaced by A.I
              (yet) - making good shit only if the paycheck is equally good.
            </p>
          </TextReveal>

          <h2 className='text-lg font-semibold'>Experience</h2>
        </div>
      </div>
    </section>
  )
}
