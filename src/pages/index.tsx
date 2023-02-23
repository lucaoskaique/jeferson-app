/* eslint-disable @typescript-eslint/no-explicit-any */
import bannersMock from 'components/Banner/mock'
import heroPropsVideos from 'components/Hero/mock'
// import imageSliderMock from 'components/ImageCardSlider/mock'
import videoCardMock from 'components/VideoCard/mock'
import { getGaleries } from 'graphql/generated/getGaleries'
import { getInfo } from 'graphql/generated/getInfo'
import { getNews } from 'graphql/generated/getNews'
import { QUERY_GALERIES } from 'graphql/queries/galery'
import { QUERY_HOME } from 'graphql/queries/home'
import { QUERY_NEWS } from 'graphql/queries/news'
import Home from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: any) {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data: infoData } = await apolloClient.query<getInfo>({
    query: QUERY_HOME
  })

  const { data: newsProps } = await apolloClient.query<getNews>({
    query: QUERY_NEWS,
    variables: {
      page: 1,
      pageSize: 20
    }
  })

  const { data: galeryProps } = await apolloClient.query<getGaleries>({
    query: QUERY_GALERIES,
    variables: {
      page: 1,
      pageSize: 20
    }
  })

  const news = newsProps.posts?.data?.map((post) => ({
    title: post.attributes?.title,
    description: post.attributes?.short_description,
    slug: post.attributes?.slug,
    content: post.attributes?.content,
    img: `http://localhost:1337${post.attributes?.cover?.data?.attributes?.url}`,
    date: new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(post.attributes?.publishedAt))
  }))

  const aboutSection = {
    title: infoData.homePage?.data?.attributes?.sectionAbout.title,
    img: `http://localhost:1337${infoData.homePage?.data?.attributes?.sectionAbout.media?.data?.attributes?.url}`,
    description: infoData.homePage?.data?.attributes?.sectionAbout.description
  }

  const imageSlider = galeryProps.galeries?.data?.map((galery) => ({
    title: galery.attributes?.title,
    img: `http://localhost:1337${galery.attributes?.media?.data[0]?.attributes?.url}`
  }))

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      banner: bannersMock,
      videoCards: videoCardMock,
      aboutSection: aboutSection,
      newsSlider: news,
      imageSlider: imageSlider,
      heroProps: heroPropsVideos
    }
  }
}
