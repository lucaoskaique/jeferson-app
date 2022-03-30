import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
      justify-content:space-between;
    `}
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    a,
    span {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`
export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.small};
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    > a {
      color: ${theme.colors.white};
    }
  `}
`
export const LogoWrapper = styled.div`
  height: 12rem;

  ${media.greaterThan('medium')`
    height: 13.9rem;
    width: 36.9rem;
  `}
`
