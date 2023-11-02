import React from 'react'
import MagneticLink from './MagneticLink'
import Twitter from '../../icons/Twitter'
import LinkedIn from '../../icons/LinkedIn'
import GitHub from '../../icons/GitHub'

function Socials() {
  return (
    <>
      <div className='absolute bottom-0 left-0 pb-12'>
        <div className='flex flex-col space-y-2 items-center py-4'>
          <MagneticLink>
            <a target='_blank' href='https://twitter.com/Jgayle28'>
              <Twitter className='mr-4 h-2 w-2 !text-brandPrimary font-normal' />
            </a>
          </MagneticLink>

          <MagneticLink>
            <a target='_blank' href='https://github.com/Jgayle-28'>
              <GitHub className='mr-4 !text-brandPrimary' />
            </a>
          </MagneticLink>
        </div>
      </div>
    </>
  )
}

export default Socials
