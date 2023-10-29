import React from 'react'
// import styles from './navStyles.module.scss'
import { height, navBackground, mountAnim } from './animations'
import { motion } from 'framer-motion'

export default function SideNav() {
  return (
    <div className={`navMenu`}>
      {[...Array(5)].map((_, index) => {
        return <NavSection key={index} index={index} />
      })}
      <NavBackground />
    </div>
  )
}

const NavSection = ({ index }) => {
  return (
    <motion.div
      variants={height}
      {...mountAnim}
      custom={4 - index}
      className={`navSection bg-menuBg`}
    ></motion.div>
  )
}

const NavBackground = () => {
  return (
    <motion.div
      variants={navBackground}
      {...mountAnim}
      className={`navBackground bg-menuBg`}
    ></motion.div>
  )
}
