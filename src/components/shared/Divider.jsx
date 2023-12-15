import React from 'react'

export default function Divider(props = {}) {
  return (
    <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-brandPrimary after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px' />
  )
}
