import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './navigators/main/main.navigator'

export const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}
