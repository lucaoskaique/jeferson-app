import { FacebookWithCircle as FacebookIcon } from '@styled-icons/entypo-social/FacebookWithCircle'
import { InstagramWithCircle as InstagramIcon } from '@styled-icons/entypo-social/InstagramWithCircle'
import { TwitterWithCircle as TwitterIcon } from '@styled-icons/entypo-social/TwitterWithCircle'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu as MenuIcon } from '@styled-icons/material-sharp/Menu'
import AboutDropdown from 'components/AboutDropdown'
import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'
import { useState } from 'react'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <AboutDropdown />

          <Link href="/news" passHref>
            <S.MenuLink>Notícias</S.MenuLink>
          </Link>
          <Link href="/medias" passHref>
            <S.MenuLink>Mídias</S.MenuLink>
          </Link>
          <Link href="/contact" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuGroup>
          <S.IconWrapper>
            <Link href="https://www.facebook.com/DepJeferson">
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
          <MediaMatch greaterThan="medium">
            <Link href="/" passHref>
              <Button size="small" background="ice">
                Login
              </Button>
            </Link>
          </MediaMatch>
        </S.MenuGroup>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="/">Pronunciamentos</S.MenuLink>
          <S.MenuLink href="/proposals">Propostas</S.MenuLink>
          <S.MenuLink href="/">Transparência</S.MenuLink>
          <S.MenuLink href="/news">Notícias</S.MenuLink>
          <S.MenuLink href="/medias">Mídias</S.MenuLink>
          <S.MenuLink href="/contact">Contato</S.MenuLink>
        </S.MenuNav>
        <S.RegisterBox>
          <Link href="/" passHref>
            <Button as="a" fullWidth size="large">
              Admin
            </Button>
          </Link>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
