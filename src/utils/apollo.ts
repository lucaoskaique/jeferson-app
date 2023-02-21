import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql/'
    }),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = {}) {
  // If the state is passed in, use it to create the client.
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // For SSG and SSR always create a new Apollo Client with clean cache.
  if (typeof window === 'undefined') return apolloClientGlobal
  // Create the Apollo Client once in the client
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

//Hook to create an Apollo Client on the server and the browser.
export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
