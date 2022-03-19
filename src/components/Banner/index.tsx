/* eslint-disable @next/next/no-img-element */
import Logo from 'components/Logo'
import Link from 'next/link'

import * as S from './styles'

export type BannerProps = {
  title: string
  backgroundImage: string
  floatImage: string
}

const Banner = ({ backgroundImage, floatImage, title }: BannerProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.FloatImage src={floatImage} alt={title} />
    <S.Content>
      <Link href="/" passHref>
        <a>
          <Logo color={true} size="normal" />
        </a>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default Banner
