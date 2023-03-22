/* eslint-disable @typescript-eslint/no-explicit-any */
import { getNews, getNewsVariables } from 'graphql/generated/getNews'
import { QUERY_NEWS } from 'graphql/queries/news'
import { GetServerSidePropsContext } from 'next'
import NewsPageTemplate from 'templates/NewsPage'
import { initializeApollo } from 'utils/apollo'
import { parseQueryStringToGql } from 'utils/filter'
import { categoriesFields } from 'utils/filter/fields'
export default function NewsPage(props: any) {
  // if (props) return <p>{JSON.stringify(props, null, 2)}</p>
  return <NewsPageTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterCategories = {
    title: 'Categories',
    name: 'categories',
    type: 'radio',
    fields: categoriesFields
  }

  const filterItems = [filterCategories]

  const filterCategoriesSelected = parseQueryStringToGql({
    queryString: query,
    filterItems
  })

  await apolloClient.query<getNews, getNewsVariables>({
    query: QUERY_NEWS,
    variables: {
      limit: 10,
      category: filterCategoriesSelected
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
