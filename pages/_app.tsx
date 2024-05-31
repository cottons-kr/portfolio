import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Footer } from '@/components/Footer'
import Head from 'next/head'

import '@/styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'

function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Taeyeong Kim</title>
      <meta name='description' content={`Taeyeong Kim's Portfolio`} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#9BE8D8' />
      <meta name='author' content='Taeyeong Kim' />
      <meta name='keywords' content='Taeyeong Kim, Portfolio, Software Engineer, Web Developer, Full Stack Developer' />
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />
      <meta property='og:title' content='Taeyeong Kim' />
      <meta property='og:description' content={`Taeyeong Kim's Portfolio`} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://tyeongkim.me/' />
      <meta property='og:site_name' content='Taeyeong Kim' />
    </Head>
    <main>
      <Component {...pageProps} />
      <Footer />
    </main>
  </>
}

export default appWithTranslation(App)
