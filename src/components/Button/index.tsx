import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  background?: 'hot' | 'ice'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  fontWeight?: boolean
}

const Button = ({
  children,
  size = 'large',
  background = 'hot',
  fontWeight = true
}: ButtonProps) => (
  <S.Wrapper size={size} background={background} fontWeight={fontWeight}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
