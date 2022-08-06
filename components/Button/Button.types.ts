import { ColorScheme } from '../../styles/types'

export type ButtonVariant =
  | 'default'
  | 'filled'

export type ButtonStyledProps = Required<Omit<ButtonProps, 'children'>>

export type ButtonProps = {
  variant?: ButtonVariant,
  uppercase?: boolean,
  color?: ColorScheme,
  children: React.ReactNode
}
