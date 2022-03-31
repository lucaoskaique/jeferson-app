import * as ButtonStyles from 'components/Button/styles'
import * as TextAreaStyles from 'components/TextArea/styles'
import * as TextFieldStyles from 'components/TextField/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const BoxEmailName = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `}
`
export const BoxCityPhone = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `}
`
export const BoxButton = styled.div`
  text-align: right;
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper},
    ${TextAreaStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      ${TextFieldStyles.Wrapper},
      ${TextAreaStyles.Wrapper} {
        margin: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
      }
    `}
  `}
`
