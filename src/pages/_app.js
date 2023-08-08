import Context from '@/context/Context'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Context.Provider>
      <Component {...pageProps} />
    </Context.Provider>
  )
}
