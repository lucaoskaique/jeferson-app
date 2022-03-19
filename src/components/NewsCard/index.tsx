/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import Link from 'next/link'

import * as S from './styles'

export type NewsCardProps = {
  slug: string
  title: string
  description: string
  date: string
  img: string
}

const NewsCard = ({ slug, title, description, date, img }: NewsCardProps) => (
  <S.Wrapper>
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
      </Link>
      <S.ReadMoreBox>
        <S.Date>{date}</S.Date>
        <Button textColor="white" size="small">
          leia mais
        </Button>
      </S.ReadMoreBox>
    </S.Content>
  </S.Wrapper>
)

export default NewsCard
