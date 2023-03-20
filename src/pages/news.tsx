import { getNews, getNewsVariables } from 'graphql/generated/getNews'
import { QUERY_NEWS } from 'graphql/queries/news'
import NewsPageTemplate, { NewsPageTemplateProps } from 'templates/NewsPage'
import { initializeApollo } from 'utils/apollo'

export default function NewsPage(props: NewsPageTemplateProps) {
  // if (props) return <p>{JSON.stringify(props, null, 2)}</p>
  return <NewsPageTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<getNews, getNewsVariables>({
    query: QUERY_NEWS,
    variables: {
      limit: 10
    }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
