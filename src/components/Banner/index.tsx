/* eslint-disable @next/next/no-img-element */
import Logo2 from 'components/Logo2'
// import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export type BannerProps = {
  title: string
  backgroundImage: string
  floatImage: string
}

const Banner = ({ backgroundImage, floatImage, title }: BannerProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Content>
      <Link href="/" passHref>
        <a>
          <Logo2 size="xlarge" />
        </a>
      </Link>
    </S.Content>
    {/* <Image src={backgroundImage} alt={`${title} background`} layout="fill" /> */}
    {/* <img src={backgroundImage} alt={`${title} background`} /> */}
    {!!floatImage && (
      <S.FloatImageWrapper>
        {/* <Image src={floatImage} alt={title} width={400} height={300} /> */}
        <img src={floatImage} alt={`${title} background`} />
      </S.FloatImageWrapper>
    )}
  </S.Wrapper>
)

export default Banner
