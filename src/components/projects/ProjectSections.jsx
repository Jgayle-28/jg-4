import React from 'react'
import Divider from '../shared/Divider'

export default function ProjectSections({
  sectionName = 'About',
  section = null,
  sectionText = [],
  sectionImage = null,
}) {
  return (
    <section className='project-section mb-20'>
      <h6 className='project-section-title mb-4 text-2xl uppercase'>
        {sectionName}
      </h6>
      <Divider />
      <div className='grid grid-cols-1 md:grid-cols-2 md:space-x-8'>
        <div className='mb-4 md:mb-0'>
          {sectionText.map((text, index) => (
            <p key={index} className='mb-4'>
              {text}
            </p>
          ))}
        </div>
        {/* <div
          className='w-full h-full bg-cover bg-contain bg-center '
          style={{
            backgroundImage: `url(/assets/images/projects/${sectionImage})`,
          }}
        > */}
        <div className='w-full'>
          <img
            src={`/assets/images/projects/${sectionImage}`}
            className='w-full object-cover'
            alt={sectionName}
          />
        </div>
      </div>

      <div />
      {/* </div> */}
    </section>
  )
}
