import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section``
export const Content = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const ImageBox = styled.div`
  width: 100%;
  height: 22rem;

  ${media.greaterThan('medium')`
    height: 41rem;
    width: 30rem;
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: calc(100% - 1);
    word-break: break-word;
    margin-left: 0;
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.medium};
    `}
  `}
`
export const Title = styled.div`
  text-align: center;
  ${media.greaterThan('medium')`
    text-align: left;
  `}
`

export const Description = styled.div`
  text-align: justify;
  text-justify: inter-word;

  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const BoxButton = styled.div`
  ${({ theme }) => css`
    > button {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    `}
  `}
`
