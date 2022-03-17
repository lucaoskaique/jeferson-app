import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'background' | 'fontWeight'>

const wrapperModifiers = {
  xlarge: (theme: DefaultTheme) => css`
    height: 6rem;
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxlarge};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  ice: () => css`
    background: linear-gradient(90deg, #72c042 -99.98%, #0092d3 193.73%);
  `,
  hot: () => css`
    background: linear-gradient(90deg, #ffbf3a -40%, #d90726 185.31%);
  `,
  fontWeight: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 3rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, background, fontWeight, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    ${!!size && wrapperModifiers[size](theme)}
    ${!!background && wrapperModifiers[background]}
    ${!!fontWeight && wrapperModifiers.fontWeight(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
