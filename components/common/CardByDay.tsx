import React from 'react'
import Image from 'next/image';

import styles from '@/styles/CardByHour.module.scss'

import { formatIconStr } from '@/utils/formatIcon';
import { formatTemperature } from '@/redux/services/formatTemperature';

interface Props {
  icon: string;
  degrees: number;
  currentDay: string;
}

export const CardByDay: React.FC<Props> = ({ icon, degrees, currentDay }) => {
  return (
    <div className={styles.card_day}>
      <p>{currentDay}</p>
      <div className={styles.right}>
        <Image src={formatIconStr(icon)} alt='icon' height={100} width={100} />
        <p>{formatTemperature(degrees)} ºC</p>
      </div>
    </div>
  )
}
