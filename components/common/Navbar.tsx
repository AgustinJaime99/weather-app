import { useCustomSelector } from '@/hooks'
import ArrowIcon from '@/public/icons/ArrowDown'
import BurgerMenuIcon from '@/public/icons/BurgerMenu'
import LocationIcon from '@/public/icons/Location'
import { useGetCityDetailQuery } from '@/services/getApi'
import styles from '@/styles/Layout.module.scss'

export const Navbar = () => {
  const { lat, lon } = useCustomSelector(state => state.cityDetail)
  const { data, isSuccess } = useGetCityDetailQuery({ lat, lon })
  return (
    <nav className={styles.navbar}>
      <BurgerMenuIcon />
      <div className={styles.city__info}>
        <LocationIcon />
        <h3>
          {isSuccess && data?.name}
        </h3>
        <ArrowIcon />
      </div>
    </nav>
  )
}
