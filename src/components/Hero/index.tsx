import Heading from 'components/Heading'
import TwitterContainer from 'components/TwitterContainer'
import VideoCard, { VideoCardProps } from 'components/VideoCard'

import * as S from './styles'

export type HeroProps = {
  items: VideoCardProps[]
}

const Hero = ({ items }: HeroProps) => {
  return (
    <S.Wrapper>
      <S.Info>
        <Heading color="primary">Confira nossas redes!</Heading>
        <h4>Assista os vídeos e leia os tweets do deputado Jeferson</h4>
      </S.Info>
      <S.Content>
        <S.Videos>
          {items.map((item, index) => (
            <div key={index} style={{ maxWidth: '47rem', margin: '0 auto' }}>
              <VideoCard {...item} />
            </div>
          ))}
        </S.Videos>
        <S.TwitterBox>
          <TwitterContainer />
        </S.TwitterBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default Hero
