import aboutSectionMock from 'components/About/mock'
import bannersMock from 'components/Banner/mock'
import heroPropsVideos from 'components/Hero/mock'
import imageSliderMock from 'components/ImageCardSlider/mock'
import newsSliderMock from 'components/NewsCardSlider/mock'
import videoCardMock from 'components/VideoCard/mock'
import Home from 'templates/Home'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Index(props: any) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banner: bannersMock,
      videoCards: videoCardMock,
      aboutSection: aboutSectionMock,
      newsSlider: newsSliderMock,
      imageSlider: imageSliderMock,
      heroProps: heroPropsVideos
    }
  }
}
