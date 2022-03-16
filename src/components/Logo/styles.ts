import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 17rem;
    height: 3.9rem;
  `,

  small: () => css`
    width: 13.1rem;
    height: 3rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`
