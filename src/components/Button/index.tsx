import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  background?: 'hot' | 'ice' | 'white'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  icon?: React.ReactNode
  fullWidth?: boolean
  fontWeight?: boolean
  textColor?: 'primary' | 'secondary' | 'white' | 'black'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'large',
    background = 'hot',
    fullWidth = false,
    icon,
    textColor,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    background={background}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    textColor={textColor}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
