import Heading from 'components/Heading'
import Base from 'templates/Base'

import * as S from './styles'

const ContactTemplate = () => (
  <Base>
    <S.BannerBlock>
      <S.BannerContent>
        <div>
          <Heading size="large" color="white">
            Contato
          </Heading>
          <S.Subtitle>
            Para falar com o Deputado Jeferson Fernandes preencha
            <br />
            os campos do formulário abaixo que prontamente reponderemos.
          </S.Subtitle>
        </div>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <h1>formulário</h1>
    </S.Content>
  </Base>
)

export default ContactTemplate
