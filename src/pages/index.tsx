/* eslint-disable @typescript-eslint/no-explicit-any */
import aboutSectionMock from 'components/About/mock'
import bannersMock from 'components/Banner/mock'
import heroPropsVideos from 'components/Hero/mock'
import imageSliderMock from 'components/ImageCardSlider/mock'
import newsSliderMock from 'components/NewsCardSlider/mock'
import videoCardMock from 'components/VideoCard/mock'
import { QUERY_HOME } from 'graphql/queries/home'
import Home from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: any) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: QUERY_HOME })

  if (data === null) {
    return {
      props: {}
    }
  }

  return {
    props: {
      data: data.homePage.data,
      initialApolloState: apolloClient.cache.extract(),
      banner: bannersMock,
      videoCards: videoCardMock,
      aboutSection: aboutSectionMock,
      newsSlider: newsSliderMock,
      imageSlider: imageSliderMock,
      heroProps: heroPropsVideos
    }
  }
}
