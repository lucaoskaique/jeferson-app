import { Container } from 'components/Container'
import FormContact from 'components/FormContact'
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
    <Container>
      <S.Content>
        <S.ContentWrapper>
          <FormContact />
        </S.ContentWrapper>
      </S.Content>
    </Container>
  </Base>
)

export default ContactTemplate
