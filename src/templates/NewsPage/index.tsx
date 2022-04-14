import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import NewsCard, { NewsCardProps } from 'components/NewsCard'
import Base from 'templates/Base'

import * as S from './styles'

export type NewsPageTemplateProps = {
  news?: NewsCardProps[]
}

const NewsPageTemplate = ({ news = [] }: NewsPageTemplateProps) => (
  <Base>
    <S.Cover>
      <S.CoverContent>
        <div>
          <Heading size="large" color="white">
            Notícias
          </Heading>
          <S.Subtitle>Acompanhe as notícias.</S.Subtitle>
        </div>
      </S.CoverContent>
    </S.Cover>
    <S.Main>
      {news.length ? (
        <Grid>
          {news?.map((item) => (
            <NewsCard
              key={item.slug}
              title={item.title}
              description={item.description}
              date={item.date}
              img={item.img}
              slug={item.slug}
            />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Sem notícias"
          description="Desculpe nenhuma noticia aqui"
        />
      )}
    </S.Main>
  </Base>
)

export default NewsPageTemplate
