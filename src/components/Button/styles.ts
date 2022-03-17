import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'background' | 'fontWeight'>

const wrapperModifiers = {
  xlarge: (theme: DefaultTheme) => css`
    height: 7rem;
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
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, background, fontWeight }) => css`
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    ${!!size && wrapperModifiers[size](theme)}
    ${!!background && wrapperModifiers[background]}
    ${!!fontWeight && wrapperModifiers.fontWeight(theme)}
  `}
`
