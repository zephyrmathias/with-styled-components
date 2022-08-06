import 'styled-components';
import { ColorScheme, ThemeBase } from './styles/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    base: ThemeBase
    colors: {
      primary: ThemeColor
      secondary: ThemeColor
    }
  }
}
