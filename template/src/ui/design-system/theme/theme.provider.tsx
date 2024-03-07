import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider as SCThemeProvider } from 'styled-components/native'
import { theme } from './theme.consts'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SCThemeProvider theme={theme}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </SCThemeProvider>
  )
}
