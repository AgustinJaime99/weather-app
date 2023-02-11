import ArrowIcon from '@/public/icons/ArrowDown'
import BurgerMenuIcon from '@/public/icons/BurgerMenu'
import LocationIcon from '@/public/icons/Location'
import styles from '@/styles/Layout.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <BurgerMenuIcon />
      <div className={styles.city__info}>
        <LocationIcon />
        <h3>
          Name city
        </h3>
        <ArrowIcon />
      </div>
    </nav>
  )
}
