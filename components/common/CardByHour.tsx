import React from 'react'
import Image from 'next/image';

import styles from '@/styles/CardByHour.module.scss'

import { formatTimeHours } from '@/utils/formatTimeHours';
import { formatTemperature } from '@/redux/services/formatTemperature';
import { formatIconStr } from '@/utils/formatIcon';

interface Props {
  currentHour: number;
  icon: string;
  degrees: number;
}

export const CardByHour: React.FC<Props> = ({ currentHour, icon, degrees }) => {
  return (
    <div className={styles.container}>
      <p>{formatTemperature(degrees)}ºC</p>
      <Image src={formatIconStr(icon)} alt='icon' height={70} width={70} />
      <p>{formatTimeHours(currentHour)}hs</p>
    </div>
  )
}
