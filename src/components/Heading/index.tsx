import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'white'
  size?: 'small' | 'medium' | 'large'
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
