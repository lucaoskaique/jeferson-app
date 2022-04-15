import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)``
export const Wrapper = styled.main``
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
