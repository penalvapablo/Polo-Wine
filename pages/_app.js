import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AppContext from '../components/AppContext'
import { useState } from 'react'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("en");
  const languageFnEs = () => {
    setLanguage('es')
  }

  const languageFnEn = () => {
    setLanguage('en')
  }
  return (
    <AppContext.Provider value={{ language, languageFnEs, languageFnEn }}>
      <Component {...pageProps} />
    </AppContext.Provider >
  )
}

export default MyApp
