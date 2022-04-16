import styled, { css } from 'styled-components'

export const Nav = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: max-content;
    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.secondary};
    }
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
