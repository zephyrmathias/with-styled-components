import React from "react"
import StyledButton from './Button.styles'
import { ButtonProps } from './Button.types'


const Button = (props: ButtonProps) => {
  const {
    variant = 'default',
    uppercase = false,
    children,
    ...others
  } = props

  return (
    <StyledButton
      variant={variant}
      uppercase={uppercase}
      {...others}
    >
      {children}
    </StyledButton>
  )
}

export default Button
