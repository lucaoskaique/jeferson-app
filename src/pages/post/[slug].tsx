import newsSliderMock from 'components/NewsCardSlider/mock'
import postMock from 'components/TextContent/mock'
import Post, { PostTemplateProps } from 'templates/Post'

export default function Index(props: PostTemplateProps) {
  return <Post {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: 'democracia-teste' }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      post: postMock,
      newsSlider: newsSliderMock
    }
  }
}
