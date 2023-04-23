import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import * as ImageCardSliderStyles from 'components/ImageCardSlider/styles'
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
    ${ImageCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`
export const SectionPhotos = styled(Section)``
