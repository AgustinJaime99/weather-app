import Image from 'next/image'
import Logo from '@/public/images/icon_image.png'
import DashboardIcon from '@/public/icons/Dashboard'
import ReportIcon from '@/public/icons/Report'
import styles from '@/styles/Layout.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const AsideMenu = () => {
  const route = useRouter()
  return (
    <aside className={styles.aside}>
      <div className={styles.logo__container}>
        <h3>Forecasting</h3>
      </div>
      <p className={styles.p}>Main</p>
      <div className='menu'>
        <Link passHref href='/' className={route.pathname === '/' ? styles.item__selected : styles.item}>
          <DashboardIcon color={route.pathname === '/' ? '#47BFDF' : '#001E50'} />
          <h6> Dashboard</h6>
        </Link>
        <Link passHref href='/forecast' className={route.pathname === '/forecast' ? styles.item__selected : styles.item}>
          <ReportIcon color={route.pathname === '/forecast' ? '#47BFDF' : '#001E50'} />
          <h6>Forecast report</h6>
        </Link>
      </div>
    </aside>
  )
}
