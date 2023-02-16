import { useState } from 'react'
//components
import { SearchBox } from './SearchBox'
//redux & hooks
import { useGetCityDetailQuery } from '@/redux/services/getApi'
import { useCustomSelector } from '@/hooks'

import styles from '@/styles/Layout.module.scss'
import ArrowIcon from '@/public/icons/ArrowDown'
import LocationIcon from '@/public/icons/Location'


export const Navbar = () => {
  const { lat, lon } = useCustomSelector((state: any) => state.cityDetail)
  const { data, isSuccess } = useGetCityDetailQuery({ lat, lon })
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <span />
      <div onClick={(e) => toggleOpen()} className={isOpen ? styles.city__info__open : styles.city__info__closed}>
        <LocationIcon fill={isOpen ? '#fff' : "#000"} />
        <h3>
          {isSuccess && data?.name || 'Find a city'}
        </h3>
        <ArrowIcon fill={isOpen ? '#fff' : "#000"} />
      </div>
      <SearchBox visible={isOpen} close={setIsOpen} />
    </nav>
  )
}
