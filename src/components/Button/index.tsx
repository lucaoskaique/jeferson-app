import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  background?: 'hot' | 'ice'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  icon?: React.ReactNode
  fullWidth?: boolean
  fontWeight?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'large',
  background = 'hot',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    background={background}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
