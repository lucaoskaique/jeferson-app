import Heading from 'components/Heading'
import MediaCard, { MediaCardProps } from 'components/MediaCard'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'
export type MediasTemplateProps = {
  photos: MediaCardProps[]
}
const MediasTemplate = ({ photos }: MediasTemplateProps) => (
  <Base>
    <S.Cover>
      <S.CoverContent>
        <div>
          <Heading size="large" color="white">
            Galeria de Fotos
          </Heading>
          <S.Subtitle>Confira nossa galeria de fotos</S.Subtitle>
        </div>
      </S.CoverContent>
    </S.Cover>
    <S.Main>
      <S.SectionPhotos>
        <Showcase title="Fotos" page="photos">
          {photos.slice(0, 3).map((item, index) => (
            <MediaCard key={`thumb-${index}`} {...item} />
          ))}
        </Showcase>
      </S.SectionPhotos>
    </S.Main>
  </Base>
)

export default MediasTemplate
