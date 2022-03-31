import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      display: none
    `}
  `}
`
export const BannerContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge};
  `}
`
export const Subtitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 57rem;
`
export const ContentWrapper = styled.div`
  width: 30rem;
  ${media.greaterThan('medium')`
      width: 57rem;
  `}
`
