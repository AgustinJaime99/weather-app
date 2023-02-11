import React, { FC } from 'react';
import styles from '@/styles/Layout.module.scss'
import { Navbar } from './Navbar';
import { AsideMenu } from './AsideMenu';

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
