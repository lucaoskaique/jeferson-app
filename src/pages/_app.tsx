import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Deputado Jeferson Fernandes</title>
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
    </ApolloProvider>
  )
}

export default App
