import * as HeadingStyles from 'components/Heading/styles'
import * as MediaCardStyles from 'components/MediaCard/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Text = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};
      text-align: left;
    }
  `}
`
export const Subtext = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmall};
      text-align: right;
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  ${MediaCardStyles.Wrapper} {
    margin-right: 1rem;
  }
`
