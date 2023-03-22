import { FacebookWithCircle as FacebookIcon } from '@styled-icons/entypo-social/FacebookWithCircle'
import { InstagramWithCircle as InstagramIcon } from '@styled-icons/entypo-social/InstagramWithCircle'
import { TwitterWithCircle as TwitterIcon } from '@styled-icons/entypo-social/TwitterWithCircle'
import Heading from 'components/Heading'
import Logo2 from 'components/Logo2'
import Link from 'next/link'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column aria-labelledby="social-media">
        <S.LogoWrapper>
          <Logo2 size="normal" />
        </S.LogoWrapper>
        <S.MenuGroup>
          <S.IconWrapper>
            <Link href="https://www.facebook.com/DepJeferson/">
              <a>
                <FacebookIcon aria-label="facebook" />
              </a>
            </Link>
          </S.IconWrapper>
          <S.IconWrapper>
            <Link href="https://www.instagram.com/depjeferson/">
              <a>
                <InstagramIcon />
              </a>
            </Link>
          </S.IconWrapper>
          <S.IconWrapper>
            <Link href="https://twitter.com/DepJeferson">
              <a>
                <TwitterIcon />
              </a>
            </Link>
          </S.IconWrapper>
        </S.MenuGroup>
      </S.Column>
      <S.Column aria-labelledby="site-map">
        <a>Início</a>
        <a>Notícias</a>
        <a>Mídia</a>
        <a>Transparência</a>
        <a>Propostas</a>
        <a>Contato</a>
        <a>Pronunciamentos</a>
        <a>Gabinete: (51) 3210.2470</a>
      </S.Column>
      <S.Column aria-labelledby="links-importantes">
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
    <S.Copyright aria-labelledby="copyright">
      Deputado Jeferson Fernandes 2023 © All rights reserved.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
