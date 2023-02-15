import React from 'react'
import styles from "@/styles/HomeCard.module.scss"
import InfoIcon from '@/public/icons/Info';

type TypeInfo = "time" | "temp" | "speed" | "percent"

interface Props {
  name: string;
  info?: string;
  type: TypeInfo;
}

export const InfoCard = ({ name, info, type }: Props) => {
  return (
    <div className={styles.info__static}>
      <div className={styles.container_svg}>
        <InfoIcon />
        <h4>
          {name}
        </h4>
      </div>
      <h4>
        {info}
        {type === 'percent' && "%"}
        {type === 'temp' && "ºC"}
        {type === 'speed' && "km/h"}
      </h4>
    </div>
  )
}
