// import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import NewsCard, { NewsCardProps } from 'components/NewsCard'
import { useQueryNews } from 'graphql/queries/news'
import Base from 'templates/Base'

import * as S from './styles'

export type NewsPageTemplateProps = {
  news?: NewsCardProps[]
  filterItems?: string[]
}

const NewsPageTemplate = () => {
  const { data } = useQueryNews({
    variables: { limit: 10 }
  })

  if (!data) return <p>loading...</p>

  const news = data?.posts?.data.map((post) => ({
    title: post?.attributes?.title,
    description: post?.attributes?.short_description,
    slug: post?.attributes?.slug,
    content: post?.attributes?.content,
    img: `${post?.attributes?.cover?.data?.attributes?.url}`,
    date: new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(post?.attributes?.publishedAt))
  })) as NewsCardProps[]

  // const handleFilter = () => {
  //   return
  // }

  // const handleShowMore = () => {
  //   fetchMore({
  //     variables: {
  //       limit: 10,
  //       start: data?.posts?.data.length
  //     }
  //   })
  // }

  return (
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
        <section>
          {news?.length ? (
            <>
              <Grid>
                {news?.map((item) => (
                  <NewsCard
                    key={item?.slug}
                    title={item?.title}
                    description={item?.description}
                    date={item?.date}
                    img={item?.img}
                    slug={item?.slug}
                  />
                ))}
              </Grid>
              {/* <S.ShowMore>
                {loading ? (
                  <S.ShowMoreLoading
                    src="/img/dots.svg"
                    alt="Carregando mais notícias..."
                  />
                ) : (
                  <S.ShowMoreButton onClick={handleShowMore}>
                    <p>Mostre mais</p>
                    <ArrowDown size={35} />
                  </S.ShowMoreButton>
                )}
              </S.ShowMore> */}
            </>
          ) : (
            <Empty
              title="Sem notícias"
              description="Desculpe nenhuma notícia aqui"
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default NewsPageTemplate
