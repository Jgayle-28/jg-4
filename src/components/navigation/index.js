import { useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import NavButton from './NavButton'
import SideNav from './SideNav'
import SideNavMenu from './SideNavMenu'
import { useGlobalContext } from '../../context/store'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const { showMenu, setShowMenu } = useGlobalContext()

  const toggleMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState)
  }, [showMenu, setShowMenu])

  return (
    <>
      <nav className='top-0 w-full flex md:flex-row justify-between items-center py-4 px-8 main-navigation'>
        <div className='nav-logo'>
          <Link to='/'>
            <img
              className='h-8 w-8'
              src={`/assets/images/logo/logo-black.svg`}
              alt='logo'
            />
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
