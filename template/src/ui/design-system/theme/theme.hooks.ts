import * as React from 'react'
import { Dimensions, StatusBar, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme as userSCTheme } from 'styled-components'
import { Insets, Theme, ScreenDimensions } from './theme.types'

export const useTheme = (): Theme => {
  return userSCTheme() as Theme
}

export const useInsets = (): Insets => {
  const safeAreaInsets = useSafeAreaInsets()

  const [insets, setInsets] = React.useState<Insets>({
    ...safeAreaInsets,
    ...(StatusBar.currentHeight !== undefined && safeAreaInsets.top === 0
      ? { top: StatusBar.currentHeight }
      : {}),
  })

  React.useEffect(() => {
    setInsets({
      ...safeAreaInsets,
      ...(StatusBar.currentHeight !== undefined && safeAreaInsets.top === 0
        ? { top: StatusBar.currentHeight }
        : {}),
    })
  }, [safeAreaInsets])

  return insets
}

export const useStyle = <T extends StyleSheet.NamedStyles<T>>(
  fn: (theme: Theme, insets: Insets, dimensions: ScreenDimensions) => T,
) => {
  const theme = useTheme()
  const insets = useInsets()
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

  const res = React.useMemo(
    () => fn(theme, insets, { screenWidth, screenHeight }),
    [fn, insets, screenHeight, screenWidth, theme],
  )

  return res
}
