import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ImageCardSlider from 'components/ImageCardSlider'
import Base from 'templates/Base'

import * as S from './styles'
export type GaleryTemplateProps = {
  title: string
  photos: [
    {
      id: number
      name: string
      img: string
    }
  ]
}

const Galery = ({ title, photos }: GaleryTemplateProps) => (
  <Base>
    <S.Main>
      <S.SectionPhotos>
        <Container>
          <Heading color="primary">{title}</Heading>
          <ImageCardSlider items={photos} />
        </Container>
      </S.SectionPhotos>
    </S.Main>
  </Base>
)

export default Galery
