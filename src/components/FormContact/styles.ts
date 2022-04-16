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
export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};
    > button {
      margin-top: ${theme.spacings.xxlarge};
    }
    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.medium};
      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: 0;
      }
    `}
  `}
`

export const BoxButton = styled.div`
  text-align: right;
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    justify-content: space-between;
    ${TextFieldStyles.Wrapper},
    ${TextAreaStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} auto ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      ${TextFieldStyles.Wrapper},
      ${TextAreaStyles.Wrapper} {
        margin: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
      }
    `}
  `}
`
