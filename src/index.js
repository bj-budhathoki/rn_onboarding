import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Main,OnBoardingScreen } from './navigation/Main';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <OnBoardingScreen />
      </NavigationContainer>
    </>
  );
}
