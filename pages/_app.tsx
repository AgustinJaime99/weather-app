import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '@/redux/store/store'
import { Layout } from '@/components/common/Layout'
import '@/styles/Search.scss'
import { hydrate } from '@/redux/store/slices/citySlice'

export default function App({ Component, pageProps }: AppProps) {

  const getCitiesFromLocalStorage = () => {
    try {
      if (typeof window !== 'undefined') {
        const persistedData = localStorage.getItem('fav_cities')
        if (persistedData) {
          return JSON.parse(persistedData)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  const cities = getCitiesFromLocalStorage()

  if (cities) {
    store.dispatch(hydrate(cities))
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
