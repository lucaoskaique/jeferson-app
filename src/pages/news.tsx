import { getNews } from 'graphql/generated/getNews'
import { QUERY_NEWS } from 'graphql/queries/news'
import NewsPageTemplate, { NewsPageTemplateProps } from 'templates/NewsPage'
import { initializeApollo } from 'utils/apollo'

export default function NewsPage(props: NewsPageTemplateProps) {
  // if (props) return <p>{JSON.stringify(props, null, 2)}</p>
  return <NewsPageTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<getNews>({
    query: QUERY_NEWS,
    variables: {
      page: 1,
      pageSize: 20
    }
  })

  if (data === null) {
    return {
      props: {}
    }
  }

  const news = data?.posts?.data.map((post) => ({
    title: post?.attributes?.title,
    description: post?.attributes?.short_description,
    slug: post?.attributes?.slug,
    content: post?.attributes?.content,
    img: `http://localhost:1337${post?.attributes?.cover?.data?.attributes?.url}`,
    date: new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(post?.attributes?.publishedAt))
  }))

  return {
    props: {
      revalidate: 60,
      news: news
    }
  }
}
