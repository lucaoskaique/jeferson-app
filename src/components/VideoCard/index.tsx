/* eslint-disable @next/next/no-img-element */
import { PlayCircleFilled } from '@styled-icons/material-outlined/PlayCircleFilled'

import * as S from './styles'
export type VideoCardProps = {
  title: string
  img: string
}

const VideoCard = ({ title, img }: VideoCardProps) => (
  <S.Wrapper>
    <S.IconWrapper>
      <PlayCircleFilled />
    </S.IconWrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
  </S.Wrapper>
)

export default VideoCard
