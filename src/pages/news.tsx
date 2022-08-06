import { QUERY_NEWS } from 'graphql/queries/news'
import NewsPageTemplate, { NewsPageTemplateProps } from 'templates/NewsPage'
import { initializeApollo } from 'utils/apollo'

export default function NewsPage(props: NewsPageTemplateProps) {
  // if (props) return <p>{JSON.stringify(props, null, 2)}</p>
  return <NewsPageTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_NEWS,
    variables: {
      page: 1,
      pageSize: 1
    }
  })

  if (data === null) {
    return {
      props: {}
    }
  }

  const news = data.posts.data.map((post) => ({
    title: post.attributes.title,
    description: post.attributes.short_description,
    slug: post.attributes.slug,
    content: post.attributes.content,
    img: `http://localhost:1337${post.attributes.cover.data.attributes.url}`,
    date: new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(post.attributes.publishedAt))
  }))

  return {
    props: {
      revalidate: 60,
      news: news
    }
  }
}

// {
//   title: 'DIREITO Á MORADIA',
//   slug: 'democracia-teste',
//   description:
//     'Moradores da Vila Nazaré pedem que CCDH acompanhe processo de realocação das famílias',
//   img: 'https://source.unsplash.com/user/willianjusten/1300x640',
//   date: '28 de novembro de 2021'
// }
