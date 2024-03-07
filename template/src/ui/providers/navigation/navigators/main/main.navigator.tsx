import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainNavigatorParams } from './main.navigator.types'

const Stack = createStackNavigator<MainNavigatorParams>()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        getComponent={() => require('@/Screens/Home/Home.coordinator').default}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
