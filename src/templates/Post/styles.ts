import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container).attrs({ as: 'section' })`
  margin-top: 4rem;
`
const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
      text-align: center;
    }
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`
export const SectionPost = styled(Section)``
export const SectionNews = styled(Section)`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`
