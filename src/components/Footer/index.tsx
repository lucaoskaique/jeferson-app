import { FacebookWithCircle as FacebookIcon } from '@styled-icons/entypo-social/FacebookWithCircle'
import { InstagramWithCircle as InstagramIcon } from '@styled-icons/entypo-social/InstagramWithCircle'
import { TwitterWithCircle as TwitterIcon } from '@styled-icons/entypo-social/TwitterWithCircle'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <S.LogoWrapper>
          <Logo color={true} size="large" />
        </S.LogoWrapper>
        <S.MenuGroup>
          <S.IconWrapper>
            <Link href="/cart">
              <a>
                <FacebookIcon aria-label="facebook" />
              </a>
            </Link>
          </S.IconWrapper>
          <S.IconWrapper>
            <Link href="/cart">
              <a>
                <InstagramIcon />
              </a>
            </Link>
          </S.IconWrapper>
          <S.IconWrapper>
            <Link href="/cart">
              <a>
                <TwitterIcon />
              </a>
            </Link>
          </S.IconWrapper>
        </S.MenuGroup>
      </S.Column>
      <S.Column>
        <a>Início</a>
        <a>Notícias</a>
        <a>Mídia</a>
        <a>Transparência</a>
        <a>Propostas</a>
        <a>Contato</a>
        <a>Pronunciamentos</a>
        <a>Gabinete: (51) 3210.2470</a>
      </S.Column>
      <S.Column>
        <Heading size="small" color="white">
          Links Importantes
        </Heading>
        <a>ptsul.org.br</a>
        <a>gov.br</a>
        <a>pt.org.br</a>
        <a>democraciasocialista.org.br</a>
        <a>marchamulheres.wordpress.com</a>
      </S.Column>
    </S.Content>
    <S.Copyright>
      Deputado Jeferson Fernandes 2022 © All rights reserved.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
