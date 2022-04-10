import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${media.greaterThan('medium')`
      background: ${theme.colors.white};
      padding: ${theme.spacings.medium};
      
    `}
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.secondary};
      margin: ${theme.spacings.xsmall} 0;
      text-align: center;
    }
    p {
      margin-bottom: ${theme.spacings.xsmall};
    }
    a {
      color: ${theme.colors.primary};
    }
    img,
    video {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }
    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
export const Title = styled.div`
  ${({ theme }) => css`
    h4 {
      color: ${theme.colors.black};
    }
  `}
`
