import React from 'react'
// import styles from './navStyles.module.scss'
import { motion } from 'framer-motion'

export default function NavButton({ showMenu, toggleMenu }) {
  return (
    <>
      <div className={`menuBtnContainer`}>
        <div
          onClick={toggleMenu}
          className={`menuBtn ${showMenu ? `close bg-menuBg` : ''}`}
        >
          <div className={`btnLine`} />
          <div className={`btnLine`} />
          <div className={`btnLine`} />
        </div>

        {!showMenu && (
          <motion.div
            className={`menuBtnText`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial='hidden'
            animate='visible'
            transition={{
              duration: 0.3,
              ease: 'easeIn',
            }}
          >
            Menu
          </motion.div>
        )}
      </div>
    </>
  )
}
