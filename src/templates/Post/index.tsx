import Heading from 'components/Heading'
import { NewsCardProps } from 'components/NewsCard'
import NewsCardSlider from 'components/NewsCardSlider'
import TextContent, { TextContentProps } from 'components/TextContent'
import Base from 'templates/Base'

import * as S from './styles'

export type PostTemplateProps = {
  post: TextContentProps
  newsSlider: NewsCardProps[]
}

const Post = ({ post, newsSlider }: PostTemplateProps) => (
  <Base>
    <S.Main>
      <S.SectionPost>
        <TextContent {...post} />
      </S.SectionPost>

      <S.SectionNews>
        <Heading color="primary">Notícias</Heading>
        <NewsCardSlider items={newsSlider} />
      </S.SectionNews>
    </S.Main>
  </Base>
)

export default Post
