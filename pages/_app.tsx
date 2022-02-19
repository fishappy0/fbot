import '../styles/dist/global.css'
import type { AppProps } from 'next/app'

function fbot_app({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default fbot_app
