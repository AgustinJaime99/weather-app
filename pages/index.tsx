import { Error } from '@/components/common/Error'
import { HomeCard } from '@/components/common/HomeCard'
import { Loader } from '@/components/common/Loader'
import { useCustomSelector } from '@/hooks'
import { useGetCityDetailQuery } from '@/services/getApi'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  const { lat, lon } = useCustomSelector((state) => state.cityDetail)
  const { data, error, isLoading, isSuccess, isFetching } = useGetCityDetailQuery({ lat, lon })
  const URL_ICONS: string = "http://openweathermap.org/img/wn/"
  const urlIcon: string = URL_ICONS + data?.weather[0]?.icon + "@2x.png"
  return (
    <>
      <Head>
        <title>Weather App | Zeleri</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='main'>
        {!isFetching && !isLoading && error && <Error />}
        {isLoading && <Loader /> || isFetching && <Loader />}
        {!isFetching && isSuccess &&
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            <Image src={urlIcon} alt='Weather icon' width={100} height={100} />
            <HomeCard
              weatherState={data?.weather[0]?.main}
              humidity={data?.main?.humidity}
              windSpeed={data?.wind?.speed}
              condition={data?.weather[0]?.description}
              feelsLike={data?.main?.feels_like}
              temperature={data?.main?.temp}
              maxTemp={data?.main?.temp_max}
              minTemp={data?.main?.temp_min} />
          </div>
        }
      </div>
    </>
  )
}
