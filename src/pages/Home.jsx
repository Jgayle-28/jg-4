import React from 'react'
import Socials from '../components/shared/Socials'

export default function Home() {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center relative'>
        <img
          src={`/assets/images/logo/logo-black.svg`}
          className='home-logo md:absolute md:top-10 md:left-0'
          alt='jag logo'
        />
        <Socials />
      </div>
    </>
  )
}
