import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
   <NavigationContainer>

 <Stack.Navigator>
  <Stack.Screen  name = "Login" component={Login}  options={{headerShown: false}} />
 </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App