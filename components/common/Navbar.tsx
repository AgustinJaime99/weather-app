import { useState } from 'react'
import { useCustomSelector } from '@/hooks'
import { useGetCityDetailQuery } from '@/services/getApi'

import styles from '@/styles/Layout.module.scss'
import ArrowIcon from '@/public/icons/ArrowDown'
import BurgerMenuIcon from '@/public/icons/BurgerMenu'
import LocationIcon from '@/public/icons/Location'
import { SearchBox } from './SearchBox'


export const Navbar = () => {
  const { lat, lon } = useCustomSelector(state => state.cityDetail)
  const { data, isSuccess } = useGetCityDetailQuery({ lat, lon })
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <BurgerMenuIcon />
      <div onClick={(e) => toggleOpen()} className={isOpen ? styles.city__info__open : styles.city__info__closed}>
        <LocationIcon fill={isOpen ? '#fff' : "#000"} />
        <h3>
          {isSuccess && data?.name}
        </h3>
        <ArrowIcon fill={isOpen ? '#fff' : "#000"} />
      </div>
      <SearchBox visible={isOpen} close={setIsOpen} />
    </nav>
  )
}
