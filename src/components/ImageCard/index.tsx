/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import * as S from './styles'

export type ImageCardProps = {
  title: string
  img: string
}
const ImageCard = ({ title, img }: ImageCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image src={img} alt={`Thumb  - ${title}`} layout="fill" />
      {/* <img src={img} alt={`Thumb  - ${title}`} /> */}
    </S.ImageBox>
  </S.Wrapper>
)

export default ImageCard
