import React from 'react'
import { ThemeProvider } from '@/DesignSystem/theme'
import { NavigationProvider } from '@/Providers'

import '@/Utils/i18n'

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <NavigationProvider />
    </ThemeProvider>
  )
}

export default App
