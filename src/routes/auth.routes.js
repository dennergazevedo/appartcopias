import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

import Loading from '../pages/Loading';
import Dashboard from '../pages/Dashboard';

function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Loading" 
        screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes;