import '../styles/globals.scss'
import type { AppProps } from 'next/app'

// use apptsx as layout
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
