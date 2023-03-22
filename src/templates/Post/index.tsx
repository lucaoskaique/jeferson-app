import Heading from 'components/Heading'
import { NewsCardProps } from 'components/NewsCard'
import NewsCardSlider from 'components/NewsCardSlider'
import TextContent, { TextContentProps } from 'components/TextContent'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'

import * as S from './styles'

export type PostTemplateProps = {
  post: TextContentProps
  newsSlider: NewsCardProps[]
}

const Post = ({ post, newsSlider }: PostTemplateProps) => (
  <Base>
    <NextSeo
      title={`${post?.title} - Deputado Jeferson Fernandes`}
      description={post?.subtitle}
      canonical={`https://jefersonfernandes.com.br/post/${post?.slug}`}
      openGraph={{
        url: `https://jefersonfernandes.com.br/post/${post?.slug}`,
        title: `${post?.title} - Deputado Jeferson Fernandes`,
        description: post?.subtitle,
        images: [
          {
            url: post?.coverUrl,
            alt: `${post?.title}`
          }
        ]
      }}
    />
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
