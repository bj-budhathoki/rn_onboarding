import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import OnBoarding from '../screens/OnBoarding/OnBoarding'
import { TextDemo, ButtonDemo, FormDemo } from '../screens/Demos';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen
      name="TextDemo"
      component={TextDemo}
      options={{ headerTitle: 'Text Demo' }}
    />
    <MainStack.Screen
      name="FormDemo"
      component={FormDemo}
      options={{ headerTitle: 'Button Demo' }}
    />
    <MainStack.Screen
      name="ButtonDemo"
      component={ButtonDemo}
      options={{ headerTitle: 'Button Demo' }}
    />
  </MainStack.Navigator>
);

const OnBoardingStack=createStackNavigator()

export const OnBoardingScreen=()=>{
return (
  <OnBoardingStack.Navigator screenOptions={{headerShown:false}}>
    <OnBoardingStack.Screen name="onboarding" component={OnBoarding}></OnBoardingStack.Screen>
  </OnBoardingStack.Navigator>
)
}