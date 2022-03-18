import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  background?: 'hot' | 'ice'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  icon?: React.ReactNode
  fullWidth?: boolean
  fontWeight?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'large',
    background = 'hot',
    fullWidth = false,
    icon,
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
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
