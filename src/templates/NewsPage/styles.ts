import { Container } from 'components/Container'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${media.greaterThan('medium')`
      display: flex;
    `}
`
