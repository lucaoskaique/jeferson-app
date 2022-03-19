/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'

import * as S from './styles'

export type NewsCardProps = {
  title: string
  description: string
  date: string
  img: string
}

const NewsCard = ({ title, description, date, img }: NewsCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
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
