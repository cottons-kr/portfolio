import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import '@/styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Footer } from '@/components/Footer'

function App({ Component, pageProps }: AppProps) {
  return <>
    <main>
      <Component {...pageProps} />
      <Footer />
    </main>
  </>
}

export default appWithTranslation(App)
