import React from 'react'
import WorkSection from '../components/work/WorkSection'
import { projects } from '../constants/projects'
import SimpleBar from 'simplebar-react'

export default function Work() {
  return (
    <SimpleBar style={{ maxHeight: '100vh', width: '100%' }}>
      <WorkSection projects={[projects[0], projects[1]]} />
      <WorkSection projects={[projects[2], projects[3]]} reversed={true} />
      <WorkSection projects={[projects[4], projects[5]]} />
      <WorkSection projects={[projects[6], projects[7]]} reversed={true} />
    </SimpleBar>
  )
}
