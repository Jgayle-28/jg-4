import React from 'react'

function OverlayExample() {
  return (
    <div className='relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8'>
      <p className='text-center text-6xl font-black text-neutral-50'>
        Fuzzy Overlay Example
      </p>
      <p className='text-center text-neutral-400'>
        This is a basic example of using a lo-fi fuzzy overlay 📺
      </p>
      <div className='flex items-center justify-center gap-3'>
        <button className='text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800'>
          Pricing
        </button>
        <button className='w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50'>
          Try it free
        </button>
      </div>
    </div>
  )
}

export default OverlayExample
