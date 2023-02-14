import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '@/store/store'
import { Layout } from '@/components/common/Layout'
import '@/styles/Search.scss'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
  let persist = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}
