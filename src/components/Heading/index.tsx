import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
}

export const Heading = ({ children, color = 'primary' }: HeadingProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Heading
