import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@/DesignSystem/components'
import { Theme, useStyle } from '@/DesignSystem/theme'
import { useTranslate } from '@/Hooks'

const HomePresenter = () => {
  const translate = useTranslate()
  const styles = useStyle(_styles)
  return (
    <View style={styles.screen}>
      <Text>{translate('appname')}</Text>
    </View>
  )
}

const _styles = (theme: Theme) =>
  StyleSheet.create({
    screen: {
      padding: theme.spacings.regular,
      alignItems: 'center',
    },
  })
export default HomePresenter
