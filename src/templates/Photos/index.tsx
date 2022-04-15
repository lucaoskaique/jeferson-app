import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import MediaCard, { MediaCardProps } from 'components/MediaCard'
import Base from 'templates/Base'

import * as S from './styles'

export type PhotosTemplateProps = {
  photos?: MediaCardProps[]
}

const PhotosTemplate = ({ photos = [] }: PhotosTemplateProps) => (
  <Base>
    <S.Cover>
      <S.CoverContent>
        <div>
          <Heading size="large" color="white">
            Fotos
          </Heading>
          <S.Subtitle>Galeria de fotos.</S.Subtitle>
        </div>
      </S.CoverContent>
    </S.Cover>
    <S.Main>
      {photos.length ? (
        <Grid>
          {photos?.map((item, index) => (
            <MediaCard key={`thumb-${index}`} {...item} />
          ))}
        </Grid>
      ) : (
        <Empty title="Sem fotos" description="Desculpe nenhuma foto aqui" />
      )}
    </S.Main>
  </Base>
)

export default PhotosTemplate
