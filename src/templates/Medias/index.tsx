import Heading from 'components/Heading'
import MediaCard, { MediaCardProps } from 'components/MediaCard'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'
export type MediasTemplateProps = {
  photos: MediaCardProps[]
  videos: MediaCardProps[]
  audios: MediaCardProps[]
  publications: MediaCardProps[]
}
const MediasTemplate = ({
  photos,
  videos,
  audios,
  publications
}: MediasTemplateProps) => (
  <Base>
    <S.Cover>
      <S.CoverContent>
        <div>
          <Heading size="large" color="white">
            Medias
          </Heading>
          <S.Subtitle>
            Para falar com o Deputado Jeferson Fernandes preencha
            <br />
            os campos do formulário abaixo que prontamente reponderemos.
          </S.Subtitle>
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
      <S.SectionVideos>
        <Showcase title="Videos">
          {videos.slice(0, 3).map((item, index) => (
            <MediaCard key={`thumb-${index}`} {...item} />
          ))}
        </Showcase>
      </S.SectionVideos>
      <S.SectionAudios>
        <Showcase title="Áudios">
          {audios.slice(0, 3).map((item, index) => (
            <MediaCard key={`thumb-${index}`} {...item} />
          ))}
        </Showcase>
      </S.SectionAudios>
      <S.SectionPublications>
        <Showcase title="Publicações">
          {publications.slice(0, 3).map((item, index) => (
            <MediaCard key={`thumb-${index}`} {...item} />
          ))}
        </Showcase>
      </S.SectionPublications>
    </S.Main>
  </Base>
)

export default MediasTemplate
