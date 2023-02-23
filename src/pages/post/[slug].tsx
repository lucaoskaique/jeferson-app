import newsSliderMock from 'components/NewsCardSlider/mock'
// import { TextContentProps } from 'components/TextContent'
// import postMock from 'components/TextContent/mock'
import { getNews, getNewsVariables } from 'graphql/generated/getNews'
import {
  getNewsBySlug,
  getNewsBySlugVariables
} from 'graphql/generated/getNewsBySlug'
import { QUERY_NEWS, QUERY_NEWS_BY_SLUG } from 'graphql/queries/news'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Post, { PostTemplateProps } from 'templates/Post'
import { initializeApollo } from 'utils/apollo'

const apolloClient = initializeApollo()

export default function Index(props: PostTemplateProps) {
  const router = useRouter()
  // se rota não tiver sido gerada ainda pode mostrar o que quisermos
  if (router.isFallback) return null

  return <Post {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<getNews, getNewsVariables>({
    query: QUERY_NEWS,
    variables: {
      limit: 9
    }
  })

  const paths = data?.posts?.data.map((post) => ({
    params: { slug: post?.attributes?.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    getNewsBySlug,
    getNewsBySlugVariables
  >({
    query: QUERY_NEWS_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  })
  if (!data.posts?.data.length) {
    return {
      notFound: true
    }
  }

  const post = {
    title: data?.posts?.data[0]?.attributes?.title,
    content: `${data?.posts?.data[0]?.attributes?.content}`,
    subtitle: data?.posts?.data[0]?.attributes?.short_description
  }

  return {
    props: {
      revalidate: 60,
      post: post,
      newsSlider: newsSliderMock
    }
  }
}
