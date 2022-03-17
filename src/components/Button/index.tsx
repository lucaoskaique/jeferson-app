import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  background?: 'hot' | 'ice'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  fontWeight?: boolean
  icon?: React.ReactNode
  fullWidth?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'large',
  background = 'hot',
  fontWeight = true,
  icon,
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    background={background}
    fullWidth={fullWidth}
    fontWeight={fontWeight}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
