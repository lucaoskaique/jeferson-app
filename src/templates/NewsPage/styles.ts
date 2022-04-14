import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
      text-align: left;
    }
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`
export const Main = styled(Container)``

export const Cover = styled.div`
  ${({ theme }) => css`
    background: url('img/setas-banner.png'), ${theme.colors.gradHot};
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: center center;
    text-align: center;
    margin-bottom: ${theme.spacings.xxlarge};
    height: ;
    /* ${media.lessThan('medium')`
      display: none
    `} */
  `}
`
export const CoverContent = styled(Container)`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge};
    `}
  `}
`
export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const SectionNews = styled(Section)``
