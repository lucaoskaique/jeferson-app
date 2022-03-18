import Button from 'components/Button'

import * as S from './styles'

// export type SubscribeCardProps = {

// }

const SubscribeCard = () => (
  <S.Wrapper>
    <S.Content>
      <S.Title>Acopanhe nosso mandato!</S.Title>
      <S.Subtitle>Fique por dentro de notícias e novidades</S.Subtitle>
      <div>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </div>
      <Button size="small" background="white">
        enviar
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default SubscribeCard
