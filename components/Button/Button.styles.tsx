import styled, { DefaultTheme } from 'styled-components'
import { ButtonStyledProps, ButtonVariant } from './Button.types'
import { ColorScheme } from '../../styles/types'
import { ColorSchemaType, DEFAULT_COLORS } from '../../styles/default-colors'

type GetVariantStyles = {
  variant?: ButtonVariant,
  color?: ColorScheme,
  theme: DefaultTheme
}

// not a good solution
function getColor({ color, theme }: Omit<GetVariantStyles, 'variant'>) {
  if (!color) {
    return theme.colors.primary
  }

  return DEFAULT_COLORS[color][400]
}

function getVariantStyles({ variant, color, theme }: GetVariantStyles) {
  switch (variant) {
    case 'filled':
      return `
        background-color: ${getColor({ color, theme })};
        color: white;
      ` 
    default:
      return `
        border: 1px solid ${color || theme.colors.primary};
        color: ${color || theme.colors.primary};
      `
  }
}

const StyledButton = styled.button<ButtonStyledProps>`
  min-width: 120px;
  min-height: 40px;
  border-radius: 4px;
  ${(props) => getVariantStyles({ variant: props.variant, color: props.color, theme: props.theme })};
  ${(props) => props.uppercase && 'text-transform: uppercase;'}
`

export default StyledButton