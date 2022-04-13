import Heading from 'components/Heading'
import Base from 'templates/Base'

import * as S from './styles'

const MediasTemplate = () => (
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
        <Heading size="small" color="primary">
          Fotos
        </Heading>
      </S.SectionPhotos>
      <S.SectionVideos>
        <Heading size="small" color="primary">
          Videos
        </Heading>
      </S.SectionVideos>
      <S.SectionAudios>
        <Heading size="small" color="primary">
          Audios
        </Heading>
      </S.SectionAudios>
      <S.SectionPublications>
        <Heading size="small" color="primary">
          Publicações
        </Heading>
      </S.SectionPublications>
    </S.Main>
  </Base>
)

export default MediasTemplate
