import {
  AlternateEmail,
  DriveFileRenameOutline,
  LocationOn,
  Phone
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

// export type SubscribeCardProps = {

// }

const SubscribeCard = () => (
  <S.Wrapper>
    <S.Content>
      <S.Title>Acopanhe nosso mandato!</S.Title>
      <S.Subtitle>Fique por dentro de notícias e novidades</S.Subtitle>
      <TextField name="name" icon={<DriveFileRenameOutline />} />
      <TextField name="cidade" icon={<LocationOn />} />
      <TextField name="celular" icon={<Phone />} />
      <TextField name="E-mail" icon={<AlternateEmail />} />
      <Button size="small" background="white">
        enviar
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default SubscribeCard
