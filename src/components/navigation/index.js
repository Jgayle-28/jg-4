import { useCallback, useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import NavButton from './NavButton'
import SideNav from './SideNav'
import SideNavMenu from './SideNavMenu'
import { useGlobalContext } from '../../context/store'
import logo from '../../assets/logo/logo-white.svg'
import { Link } from 'react-router-dom'

export default function Navigation() {
  // const [showMenu, setShowMenu] = useState(false)
  // console.log('showMenu :>> ', showMenu)
  const { showMenu, setShowMenu } = useGlobalContext()
  console.log('showMenu :>> ', showMenu)

  const toggleMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState)
  }, [showMenu, setShowMenu])

  return (
    <>
      <nav className='w-full flex md:flex-row justify-between items-center py-4 px-8'>
        <div>
          <Link to='/'>
            <img className='h-8 w-8' src={logo} alt='logo' />
          </Link>
        </div>

        <NavButton showMenu={showMenu} toggleMenu={toggleMenu} />
      </nav>
      <AnimatePresence mode='wait'>
        {showMenu && (
          <>
            <SideNav isOpen={showMenu} />
            <SideNavMenu isOpen={showMenu} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
