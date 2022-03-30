import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { BannerProps } from '.'

export type WrapperProps = Pick<BannerProps, 'backgroundImage'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundImage }) => css`
    display: grid;
    position: relative;

    height: 23rem;

    background: url(${backgroundImage});
    background-size: cover;
    background-position: center center;

    grid-template-areas: 'content floatimage';
    grid-template-columns: 1.5fr 2fr;

    overflow: hidden;

    ${media.greaterThan('medium')`
      height: 64rem;
    `}
  `}
`

export const FloatImageWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 18rem;
    align-self: end;
    justify-self: end;

    img {
      object-fit: contain;
      max-width: 100%;
    }

    ${media.greaterThan('medium')`
      max-height: 52rem;
      max-width: 82.6rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    position: absolute;

    height: 8.2rem;
    width: 21rem;

    text-align: left;
    align-self: center;
    margin-left: 4rem;
    margin-bottom: 10%;
    z-index: ${theme.layers.base + 1};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xsmall};

      height: 26.1rem;
      width: 67.2rem;
    `}
  `}
`
