import InfoIcon from "@/public/icons/Info";
import { formatTemperature } from "@/services/formatTemperature";
import styles from "@/styles/HomeCard.module.scss"
import { InfoCard } from "./InfoCard";


interface Props {
  // time: string;
  feelsLike: string;
  temperature: string;
  maxTemp: string;
  minTemp: string;
  condition: string;
  windSpeed: string;
  humidity: string;
  weatherState: string;
}

export const HomeCard = ({ weatherState, temperature, maxTemp, minTemp, feelsLike, condition, humidity, windSpeed }: Props) => {
  const date = new Date();
  const hour = date.getHours()
  let currentHour = date.getHours() + ":" + date.getMinutes();
  // const formatTemp = temperature?.toString().slice(0, -3)
  const tempFormatted = formatTemperature(temperature)
  const maxTempFormatted = formatTemperature(maxTemp)
  const minTempFormatted = formatTemperature(minTemp)
  const feelsLikeFormatted = formatTemperature(feelsLike)

  return (
    <article className={styles.card_container}>
      <p className={styles.date}>
        Today, {currentHour} {hour > 12 ? "PM" : "AM"}
      </p>
      <h2 className={styles.text_temp}>
        {feelsLikeFormatted}º
      </h2>
      <h4 className={styles.state_weather}>
        {weatherState}
      </h4>
      <div className={styles.info}>
        {/* <InfoCard name="Time" type="time" /> */}
        <InfoCard name="Temperature" info={tempFormatted} type="temp" />
        <InfoCard name="MaxTemperature" info={maxTempFormatted} type="temp" />
        <InfoCard name="MinTemperature" info={minTempFormatted} type="temp" />
        <InfoCard name="Condition" type="time" info={condition} />
        <InfoCard name="WindSpeed" type="speed" info={windSpeed} />
        <InfoCard name="Humidity" type="percent" info={humidity} />
      </div>
    </article>
  )
}
