/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import * as S from './styles'

export type MediaCardProps = {
  id: number
  title: string
  img: string
}

const MediaCard = ({ id, title, img }: MediaCardProps) => (
  <S.Wrapper>
    <Link href={`/galery/${id}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
      </S.Info>
    </S.Content>
  </S.Wrapper>
)

export default MediaCard
