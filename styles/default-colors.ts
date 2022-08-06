import { ColorScheme } from "./types"

type ColorOpacity<T extends readonly any[]> = {
  [Key in T[number]]: string
}

const COLOR_OPACITY = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export type ColorSchemaType = Record<Exclude<ColorScheme, 'white'>, ColorOpacity<typeof COLOR_OPACITY>>

export const DEFAULT_COLORS: ColorSchemaType = {
  black: {
    50: '#A6A7AB',
    100: '#909296',
    200: '#C1C2C5',
    300: '#5c5f66',
    400: '#373A40',
    500: '#2C2E33',
    600: '#25262b',
    700: '#1A1B1E',
    800: '#141517',
    900: '#101113',
  },
  gray: {
    50: '#f8f9fa',
    100: '#f1f3f5',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#868e96',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },
  red: {
    50: '#fff5f5',
    100: '#ffe3e3',
    200: '#ffc9c9',
    300: '#ffa8a8',
    400: '#ff8787',
    500: '#ff6b6b',
    600: '#fa5252',
    700: '#f03e3e',
    800: '#e03131',
    900: '#c92a2a',
  },
  blue: {
    50: '#e7f5ff',
    100: '#d0ebff',
    200: '#a5d8ff',
    300: '#74c0fc',
    400: '#4dabf7',
    500: '#339af0',
    600: '#228be6',
    700: '#1c7ed6',
    800: '#1971c2',
    900: '#1864ab',
  },
}

