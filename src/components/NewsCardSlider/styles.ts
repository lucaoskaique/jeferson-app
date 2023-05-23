import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
    .slick-track,
    .slick-list {
      display: flex;
      padding: ${theme.spacings.small} 0;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }

      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.primary};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
    }

    li {
      background: ${theme.colors.primary};
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 ${theme.spacings.xxsmall};
      cursor: pointer;
      &.slick-active {
        background: ${theme.colors.white};
      }
      &:focus-within {
        box-shadow: 0 0 0 0.3rem ${theme.colors.primary};
      }
    }

    button {
      opacity: 0;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
    }
  `}
`
