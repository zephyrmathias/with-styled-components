import styled from 'styled-components'
import { ButtonStyledProps, ButtonVariant } from './Button.types'
import { ColorScheme } from '../../styles/types'
import { DEFAULT_COLORS } from '../../styles/default-colors'

type GetVariantStyles = {
  variant: ButtonVariant,
  color: ColorScheme
}

function getVariantStyles({ variant, color }: GetVariantStyles) {
  switch (variant) {
    case 'filled':
      return `
        background-color: ${DEFAULT_COLORS[color][400]};
        color: white;
      ` 
    default:
      return `
        border: 1px solid ${color};
        color: ${color};
      `
  }
}

const StyledButton = styled.button<ButtonStyledProps>`
  min-width: 120px;
  min-height: 40px;
  border-radius: 4px;
  ${(props) => getVariantStyles({ variant: props.variant, color: props.color })};
  ${(props) => props.uppercase && 'text-transform: uppercase;'}
`

export default StyledButton