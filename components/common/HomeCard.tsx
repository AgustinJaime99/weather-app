import { formatTemperature } from "@/redux/services/formatTemperature";
import styles from "@/styles/HomeCard.module.scss"
import { Favorite } from "./Favorite";
import { InfoCard } from "./InfoCard";


interface Props {
  id: number;
  name: string;
  feelsLike: string;
  temperature: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  windSpeed: string;
  humidity: string;
  weatherState: string;
}

export const HomeCard = ({ id, name, weatherState, temperature, maxTemp, minTemp, feelsLike, condition, humidity, windSpeed }: Props) => {
  const date = new Date();
  const hour = date.getHours()
  let currentHour = date.getHours() + ":" + date.getMinutes();

  return (
    <article className={styles.card_container}>
      <div className={styles.fav_container}>
        <Favorite city={{ id: id, name: name, maxTemp: maxTemp, minTemp: minTemp }} />
      </div>
      <p className={styles.date}>
        Today, {currentHour} {hour > 12 ? "PM" : "AM"}
      </p>
      <h2 className={styles.text_temp}>
        {formatTemperature(feelsLike)}º
      </h2>
      <h4 className={styles.state_weather}>
        {weatherState}
      </h4>
      <div className={styles.info}>
        <InfoCard name="Temperature" info={formatTemperature(temperature)} type="temp" />
        <InfoCard name="MaxTemperature" info={formatTemperature(maxTemp)} type="temp" />
        <InfoCard name="MinTemperature" info={formatTemperature(minTemp)} type="temp" />
        <InfoCard name="Condition" type="time" info={condition} />
        <InfoCard name="WindSpeed" type="speed" info={windSpeed} />
        <InfoCard name="Humidity" type="percent" info={humidity} />
      </div>
    </article>
  )
}
