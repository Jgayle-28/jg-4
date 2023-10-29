import { useState } from 'react'
// import styles from './navStyles.module.scss'
import { motion } from 'framer-motion'
import { mountAnim, menuEntrance, blur } from './animations'
import { useHistory } from 'react-router-dom'
import GlitchText from '../shared/GlitchText'
import { useRouter } from '../../hooks/use-router'
import { useGlobalContext } from '../../context/store'

export default function SideNavLink({ data, index }) {
  const { title, href } = data

  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const { setShowMenu } = useGlobalContext()

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  const handleLinkClick = (href) => {
    router.push(href)
    setShowMenu(false)
  }

  return (
    <>
      <motion.div variants={menuEntrance} {...mountAnim} custom={index}>
        {/* <Link
          href={href}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        > */}
        <a
          onClick={() => handleLinkClick(href)}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className='cursor-pointer'
        >
          <motion.p
            // onClick={() => router.push(href)}
            variants={blur}
            className={`text-white font-bold uppercase tracking-wider text-right overflow-hidden menuLink text-6xl md:text-9xl`}
          >
            {isHovered ? <GlitchText text={title} /> : title}
          </motion.p>
        </a>
        {/* </Link> */}
      </motion.div>
    </>
  )
}
