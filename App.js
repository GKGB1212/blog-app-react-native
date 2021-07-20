import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

import { Provider } from './src/context/BlogContext';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FBBC04',
        },
        headerTintColor: '#fff'
      }}>
        <Stack.Screen
          name="Note"
          component={IndexScreen}
        />
        <Stack.Screen
          name="Notee"
          component={ShowScreen}
        />
        <Stack.Screen
          name="CreateBlogPost"
          component={CreateScreen}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
    <App />
  </Provider>;
};