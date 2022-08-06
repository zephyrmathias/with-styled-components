import styled, { ThemeProvider } from 'styled-components'
import { DEFAULT_THEME, DarkTheme, LightTheme } from '../styles/default-theme'
import NormalizeStyles from '../styles/normalizeStyles'
import GlobalStyles from '../styles/globalStyles'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background: ${(props) => props.filled ? '#000': '#fff'};
`

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withTheme = (Story, context) => {
  const { theme } = context.globals || context.parameters
  const storyTheme = theme === 'dark'
    ? { ...DEFAULT_THEME, ...DarkTheme }
    : { ...DEFAULT_THEME, ...LightTheme }

  return (
    <ThemeProvider theme={storyTheme}>
      <NormalizeStyles />
      <GlobalStyles />
      <Background filled={theme === 'dark'}>
        <Story />
      </Background>
    </ThemeProvider>
  )
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [withTheme]