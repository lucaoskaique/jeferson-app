/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import Image from 'next/image'
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
    <Link href={`/post/${slug}`} passHref>
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" />
        {/* <img src={img} alt={title} /> */}
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/post/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
      </Link>
      <S.ReadMoreBox>
        <S.Date>{date}</S.Date>
        <Link href={`/post/${slug}`} passHref>
          <Button textColor="white" size="small">
            leia mais
          </Button>
        </Link>
      </S.ReadMoreBox>
    </S.Content>
  </S.Wrapper>
)

export default NewsCard
