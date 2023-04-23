import Heading from 'components/Heading'
import TwitterContainer from 'components/TwitterContainer'

import * as S from './styles'

const Hero = () => {
  return (
    <S.Wrapper>
      <S.Info>
        <Heading color="primary">Confira nossas redes!</Heading>
        <h4>Assista os vídeos e leia os tweets do deputado Jeferson</h4>
      </S.Info>
      <S.Content>
        <S.TwitterBox>
          <TwitterContainer />
        </S.TwitterBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default Hero
