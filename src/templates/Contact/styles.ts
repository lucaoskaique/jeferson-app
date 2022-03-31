import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  display: block;
`
export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background: url('img/setas-banner.png'), ${theme.colors.gradIce};
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: center center;
    text-align: center;
  `}
`
export const BannerContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge};
  `}
`
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`
export const Content = styled.div``
export const ContentWrapper = styled.div``
