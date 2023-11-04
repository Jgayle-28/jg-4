// import styles from './navStyles.module.scss'
import { navItems } from '../../constants/routes'
import SideNavLink from './SideNavLink'

export default function SideNavMenu() {
  return (
    <div className={'menu'}>
      <div className={'menuBody'}>
        {/* <img
          src={`/assets/images/logo/logo-black.svg`}
          className='home-logo md:absolute md:left-0  flicker-in-1 opacity-50'
          alt='jag logo'
        /> */}
        {navItems.map((el, index) => {
          return <SideNavLink data={el} index={index} key={index} />
        })}
      </div>
    </div>
  )
}
