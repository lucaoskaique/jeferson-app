import { Container } from 'components/Container'
import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)``

export const Cover = styled.div`
  ${({ theme }) => css`
    background: url('img/setas-banner.png'), ${theme.colors.gradHot};
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: center center;
    text-align: center;
    margin-bottom: ${theme.spacings.xxlarge};
    height: ;
    /* ${media.lessThan('medium')`
      display: none
    `} */
  `}
`
export const CoverContent = styled(Container)`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge};
    `}
  `}
`
export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
`

export const ShowMoreButton = styled.button`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.black};
    background-color: transparent;
    border: none;
    padding: ${theme.spacings.xsmall};
    transition: color ${theme.transition.default};
    > svg {
      transition: color ${theme.transition.default};
      color: ${theme.colors.primary};
    }
    &:hover {
      color: ${darken(0.3, theme.colors.white)};
      > svg {
        color: ${darken(0.2, theme.colors.primary)};
      }
    }
  `}
`
export const ShowMoreLoading = styled.img`
  width: 4rem;
`
