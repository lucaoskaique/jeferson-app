import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  background?: 'hot' | 'ice'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  fontWeight?: boolean
  icon?: React.ReactNode
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'large',
  background = 'hot',
  fontWeight = true,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    background={background}
    fontWeight={fontWeight}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
