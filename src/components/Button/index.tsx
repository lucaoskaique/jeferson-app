import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  background?: 'hot' | 'ice'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
}

const Button = ({
  children,
  size = 'large',
  background = 'hot'
}: ButtonProps) => (
  <S.Wrapper size={size} background={background}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
