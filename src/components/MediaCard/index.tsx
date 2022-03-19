/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export type MediaCardProps = {
  title: string
  img: string
}

const MediaCard = ({ title, img }: MediaCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
      </S.Info>
    </S.Content>
  </S.Wrapper>
)

export default MediaCard
