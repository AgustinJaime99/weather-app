import InfoIcon from "@/public/icons/Info";
import styles from "@/styles/HomeCard.module.scss"
import { InfoCard } from "./InfoCard";


interface Props {
  time: string;
  temperature: string;
  maxTemp: string;
  MinTemp: string;
}

export const HomeCard = () => {
  const date = new Date();
  const hour = date.getHours()
  let currentHour = date.getHours() + ":" + date.getMinutes();
  return (
    <article className={styles.card_container}>
      <p className={styles.date}>
        Today, {currentHour} {hour > 12 ? "PM" : "AM"}
      </p>
      <h2 className={styles.text_temp}>
        29º
      </h2>
      <h4 className={styles.state_weather}>
        Cloudy
      </h4>
      <div className={styles.info}>
        <InfoCard name="Time" />
        <InfoCard name="Temperature" />
        <InfoCard name="MaxTemperature" />
        <InfoCard name="MinTemperature" />
        <InfoCard name="Condition" />
        <InfoCard name="WindSpeed" />
        <InfoCard name="Humidity" />
      </div>
    </article>
  )
}
