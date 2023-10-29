// import styles from './navStyles.module.scss'
import { navItems } from '../../constants/routes'
import SideNavLink from './SideNavLink'

export default function SideNavMenu() {
  return (
    <div className={'menu'}>
      <div className={'menuBody'}>
        {navItems.map((el, index) => {
          return <SideNavLink data={el} index={index} key={index} />
        })}
      </div>
    </div>
  )
}
