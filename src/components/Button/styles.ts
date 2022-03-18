import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'
export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'background' | 'fullWidth' | 'textColor'>

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
    &:hover {
      background: linear-gradient(90deg, #ffbf3a -40%, #d90726 185.31%);
    }
  `,
  hot: () => css`
    background: linear-gradient(90deg, #ffbf3a -40%, #d90726 185.31%);
    &:hover {
      background: linear-gradient(90deg, #72c042 -99.98%, #0092d3 193.73%);
    }
  `,
  white: () => css`
    background: '#FAFAFA';
    &:hover {
      background: linear-gradient(90deg, #72c042 -99.98%, #0092d3 193.73%);
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 3rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, background, hasIcon, textColor }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors[textColor!]};
    border: 0;
    cursor: pointer;
    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)}
    ${!!background && wrapperModifiers[background]}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()};
  `}
`
