import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { BannerProps } from '.'

type WrapperProps = Pick<BannerProps, 'backgroundImage'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ backgroundImage }) => css`
    display: grid;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    height: 23rem;

    grid-template-areas: 'content floatimage';
    grid-template-columns: 1.3fr 2fr;

    overflow: hidden;

    ${media.greaterThan('medium')`
      height: 64rem;
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    align-self: end;
    justify-self: end;

    ${media.greaterThan('medium')`
      max-height: 23rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    align-self: center;
    text-align: center;
    z-index: ${theme.layers.base};
  `}
`
