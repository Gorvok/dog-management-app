import 'react-native-gesture-handler'; // Ensure this is the first import
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {REACT_APP_BACKEND_URL} from '@env';

// Log the backend URL to ensure it's being read correctly
console.log('Backend URL:', REACT_APP_BACKEND_URL);

const App = () => {
  return <MainNavigator />;
};

export default App;
