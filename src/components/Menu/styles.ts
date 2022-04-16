import styled, { css } from 'styled-components'

export const Wrapper = styled.menu<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    z-index: ${isOpen ? theme.layers.menu : `calc(${theme.layers.menu} - 1)`};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    cursor: pointer;
    width: 3rem;
    height: 3rem;

    > a {
      color: ${theme.colors.secondary};
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};

    position: fixed;
    z-index: ${theme.layers.menu};

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      color: ${theme.colors.secondary};
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      a:not(:last-child) {
        margin-bottom: ${theme.spacings.small};
      }

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const LogoWrapper = styled.div``

export const MenuNav = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.large};
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
    > span {
      margin-left: 1rem;
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
export const MenuLinkWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    > span {
      color: ${theme.colors.secondary};
      margin-left: 1rem;
    }
  `}
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    z-index: ${theme.layers.menu} + 1;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
