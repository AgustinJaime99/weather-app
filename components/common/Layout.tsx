import React, { FC } from 'react';
import { AsideMenu } from './AsideMenu';
import { Navbar } from './Navbar';
import styles from '@/styles/Layout.module.scss'

interface MyProps {
  children: React.ReactNode;
}

export const Layout: FC<MyProps> = (props) => {
  return (
    <>
      <div className={styles.main}>
        <AsideMenu />
        <Navbar />
        {props.children}
      </div>
    </>
  )
}
