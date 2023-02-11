import InfoIcon from '@/public/icons/Info';
import React from 'react'
import styles from "@/styles/HomeCard.module.scss"

interface Props {
  name: string;
  prop?: string;
}

export const InfoCard = ({ name }: Props) => {
  return (
    <div className={styles.info__static}>
      <div className={styles.container_svg}>
        <InfoIcon />
        <h4>
          {name}
        </h4>
      </div>
      <h4>
        info
      </h4>
    </div>
  )
}
