import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`
export const ImageBox = styled.main`
  height: 30rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 25rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: -40rem 0;
    }
  }
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.white};
    cursor: pointer;
    width: 5.5rem;
    height: 5.5rem;
    opacity: 0.8;
    left: 50%;
    transform: translateX(-50%);
    > a {
      color: ${theme.colors.secondary};
    }
  `}
`
