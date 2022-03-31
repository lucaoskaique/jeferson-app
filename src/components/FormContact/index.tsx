import {
  Email,
  LocationCity,
  Person,
  Phone
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextArea from 'components/TextArea'
import TextField from 'components/TextField'

import * as S from './styles'

const FormContact = () => (
  <S.Wrapper>
    <form>
      <S.BoxEmailName>
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          icon={<Email />}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <TextField
          name="name"
          type="text"
          placeholder="Nome e sobrenome"
          icon={<Person />}
          pattern="[a-z\s]+$"
        />
      </S.BoxEmailName>
      <S.BoxCityPhone>
        <TextField
          name="city"
          type="text"
          placeholder="Cidade"
          icon={<LocationCity />}
          pattern="[a-z\s]+$"
        />
        <TextField
          name="phone"
          type="tel"
          placeholder="(99)99999-9999"
          icon={<Phone />}
          pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
          maxLength={15}
        />
      </S.BoxCityPhone>

      <TextArea name="message" placeholder="Sua mensagem aqui" />
      <S.BoxButton>
        <Button size="small">Enviar</Button>
      </S.BoxButton>
    </form>
  </S.Wrapper>
)

export default FormContact
