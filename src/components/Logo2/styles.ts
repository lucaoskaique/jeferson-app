import styled from 'styled-components'

import { Logo2Props } from '.'

export type WrapperProps = Pick<Logo2Props, 'size'>

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
`
