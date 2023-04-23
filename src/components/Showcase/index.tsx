import Heading from 'components/Heading'

import * as S from './styles'

export type ShowcaseProps = {
  children: React.ReactNode
  title?: string
  page?: string
}

const Showcase = ({ title, children }: ShowcaseProps) => (
  <S.Wrapper>
    <S.Text>
      <Heading size="medium" color="primary">
        {title}
      </Heading>
    </S.Text>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Showcase
