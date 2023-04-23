/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import * as S from './styles'

export type ImageCardProps = {
  id?: number
  name: string
  img: string
}
const ImageCard = ({ name, img }: ImageCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image src={img} alt={`Thumb  - ${name}`} layout="fill" />
      {/* <img src={img} alt={`Thumb  - ${name}`} /> */}
    </S.ImageBox>
  </S.Wrapper>
)

export default ImageCard
