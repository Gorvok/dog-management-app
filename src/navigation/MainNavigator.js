import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddDogScreen from '../screens/AddDogScreen';
import EditDogScreen from '../screens/EditDogScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Dog" component={AddDogScreen} />
        <Stack.Screen name="Edit Dog" component={EditDogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
