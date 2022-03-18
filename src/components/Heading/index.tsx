import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  size?: 'small' | 'medium'
}

export const Heading = ({
  children,
  color = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
