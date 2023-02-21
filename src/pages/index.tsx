/* eslint-disable @typescript-eslint/no-explicit-any */
import bannersMock from 'components/Banner/mock'
import heroPropsVideos from 'components/Hero/mock'
import imageSliderMock from 'components/ImageCardSlider/mock'
import newsSliderMock from 'components/NewsCardSlider/mock'
import videoCardMock from 'components/VideoCard/mock'
import { getInfo } from 'graphql/generated/getInfo'
import { QUERY_HOME } from 'graphql/queries/home'
import Home from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: any) {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<getInfo>({
    query: QUERY_HOME
  })

  if (data === null) {
    return {
      props: {}
    }
  }

  const aboutSection = {
    title: data.homePage?.data?.attributes?.sectionAbout.title,
    img: `http://localhost:1337${data.homePage?.data?.attributes?.sectionAbout.media?.data?.attributes?.url}`,
    description: data.homePage?.data?.attributes?.sectionAbout.description
  }

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      banner: bannersMock,
      videoCards: videoCardMock,
      aboutSection: aboutSection,
      newsSlider: newsSliderMock,
      imageSlider: imageSliderMock,
      heroProps: heroPropsVideos
    }
  }
}
