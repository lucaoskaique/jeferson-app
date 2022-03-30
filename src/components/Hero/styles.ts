import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``
export const Info = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`
export const Videos = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
      width: 50%;
  `}
`
export const TwitterBox = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
    width: 50%;
  `}
`
