/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client'
import aboutSectionMock from 'components/About/mock'
import bannersMock from 'components/Banner/mock'
import heroPropsVideos from 'components/Hero/mock'
import imageSliderMock from 'components/ImageCardSlider/mock'
import newsSliderMock from 'components/NewsCardSlider/mock'
import videoCardMock from 'components/VideoCard/mock'
import Home from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

const QUERY_HOME = gql`
  query getInfo {
    homePage {
      data {
        id
        attributes {
          menu {
            socialLinks {
              title
              url
            }
          }
          sectionAbout {
            title
            description
          }
        }
      }
    }
  }
`
export default function Index(props: any) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<any>({ query: QUERY_HOME })

  return {
    props: {
      data: data,
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
