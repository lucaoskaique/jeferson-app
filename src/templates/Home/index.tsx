import About, { AboutProps } from 'components/About'
import Banner, { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Hero from 'components/Hero'
import { ImageCardProps } from 'components/ImageCard'
import ImageCardSlider from 'components/ImageCardSlider'
import { NewsCardProps } from 'components/NewsCard'
import NewsCardSlider from 'components/NewsCardSlider'
import { VideoCardProps } from 'components/VideoCard'
import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banner: BannerProps
  heroProps: VideoCardProps[]
  aboutSection: AboutProps
  newsSlider: NewsCardProps[]
  imageSlider: ImageCardProps[]
}

const Home = ({
  banner,
  aboutSection,
  heroProps,
  newsSlider,
  imageSlider
}: HomeTemplateProps) => (
  <Base>
    <S.SectionBanner>
      <Banner
        title={banner.title}
        backgroundImage={banner.backgroundImage}
        floatImage={banner.floatImage}
      />
    </S.SectionBanner>

    <S.SectionHero>
      <Container>
        <Hero items={heroProps} />
      </Container>
    </S.SectionHero>

    <S.SectionAbout>
      <Container>
        <About {...aboutSection} />
      </Container>
    </S.SectionAbout>

    <S.SectionNews>
      <Container>
        <Heading color="primary">Notícias</Heading>
        <NewsCardSlider items={newsSlider} />
      </Container>
    </S.SectionNews>

    <S.SectionImages>
      <Container>
        <Heading color="secondary">Galeria de Fotos</Heading>
        <h4>Confira nossas imagens</h4>
        <ImageCardSlider items={imageSlider} />
      </Container>
    </S.SectionImages>
  </Base>
)

export default Home
