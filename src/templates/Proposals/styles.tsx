import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import * as ImageCardSliderStyles from 'components/ImageCardSlider/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
export const Main = styled(Container).attrs({ as: 'section' })``

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    min-height: 100vh;
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
      text-align: center;
    }
    ${ImageCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`
export const SectionText = styled(Section)`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
      text-align: center;
    }
  `}
`
