import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    display: grid;
    height: 29.7rem;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`
export const Subtitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
