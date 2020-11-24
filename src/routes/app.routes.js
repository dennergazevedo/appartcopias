import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

// COMPONENTS
import Loading from '../pages/Loading';
import Homepage from '../pages/Homepage';

function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Loading" 
        screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes;