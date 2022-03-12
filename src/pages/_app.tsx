import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React/Nextjs - Boilerplate</title>
        <link rel="short icon" href="/img/icon-512.png"></link>
        <link rel="apple touch icon" href="/img/icon-512.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, Nextjs and 
          Styled Components"
        ></meta>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
