import { useEffect } from 'react'
import '../styles/globals.css'
import { initTheme } from '../utils/theme'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initTheme()
  }, []) // Este useEffect se ejecuta solo una vez en el montaje

  return <Component {...pageProps} />
}

export default MyApp
