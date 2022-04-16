import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section``
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
    justify-content: space-between;
    align-items: center;
  `}
`
export const Videos = styled.div`
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
