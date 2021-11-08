import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';

export default () => {
  const Stack = createStackNavigator();
  
  return (
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={Login} />
      </Stack.Navigator>
  )
}