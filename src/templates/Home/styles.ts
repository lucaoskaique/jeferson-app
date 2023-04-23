import * as HeadingStyles from 'components/Heading/styles'
import * as ImageCardSliderStyles from 'components/ImageCardSlider/styles'
import * as NewsCardSliderStyles from 'components/NewsCardSlider/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${NewsCardSliderStyles.Wrapper},
    ${ImageCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    ${HeadingStyles.Wrapper} {
      text-align: center;
    }
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      /* margin: 0 0;
      position: relative;
      z-index: ${theme.layers.base} */
    `}
  `}
`
export const SectionHero = styled.section`
  ${({ theme }) => css`
    /* margin-bottom: calc(${theme.spacings.xxlarge} * 2); */

    ${media.greaterThan('medium')`
      /* margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base} */
    `}
  `}
`
export const SectionAbout = styled.section`
  /* ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base}
    `}
  `} */
`
export const SectionNews = styled(Sections)`
  /* ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base}
    `}
  `} */
`
export const SectionImages = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    /* padding: ${theme.spacings.xsmall}; */
    text-align: center;
    h4 {
      margin-bottom: ${theme.spacings.small};
    }
    ${media.greaterThan('medium')`
      /* margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base} */
    `}
  `}
`
export const SectionFooter = styled.section`
  ${({ theme }) => css`
    /* margin: 0 calc(-${theme.grid.gutter} / 2); */
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      /* margin: 0 0;
      position: relative;
      z-index: ${theme.layers.base} */
    `};
  `}
`
