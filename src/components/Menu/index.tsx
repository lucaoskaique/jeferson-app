import { CaretDownFill } from '@styled-icons/bootstrap/CaretDownFill'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu as MenuIcon } from '@styled-icons/material-sharp/Menu'
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

      {/* <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>
              <S.MenuLinkWrapper>
                Conheça o Jeferson
                <span>
                  <CaretDownFill height={15} width={15} />
                </span>
              </S.MenuLinkWrapper>
            </S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Notícias</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Mídias</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch> */}

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">
            <S.MenuLinkWrapper>
              Conheça o Jeferson
              <span>
                <CaretDownFill height={15} width={15} />
              </span>
            </S.MenuLinkWrapper>
          </S.MenuLink>
          <S.MenuLink href="#">Notícias</S.MenuLink>
          <S.MenuLink href="#">Mídias</S.MenuLink>
          <S.MenuLink href="#">Contato</S.MenuLink>
        </S.MenuNav>
        <S.RegisterBox>
          <Button fullWidth size="large">
            Admin
          </Button>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
