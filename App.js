import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import ThemeProvider from './src/util/theme-wrapper';

import {
  HomePage, SettingPage, ProfilePage, LogsPage,
  LandingPage, BottomTabStack
} from './src/screens';


const Stack = createStackNavigator();

import MpinPage from './src/screens/mpin';

export default function App() {



  return (<NavigationContainer theme={DefaultTheme}>
    <ThemeProvider>
      <Stack.Navigator initialRouteName="root">
        <Stack.Screen options={{ headerShown: false }} name="root" component={MpinPage} />
        <Stack.Screen options={{ headerShown: false }} name="tabs" component={BottomTabStack} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen options={{ headerTintColor: "#016899", title: '' }} name="WebviewA" component={SettingPage} />
        <Stack.Screen options={{ headerTintColor: "#016899", title: '' }} name="WebviewB" component={ProfilePage} />
        <Stack.Screen options={{ headerTintColor: "#016899", title: 'Logs' }} name="Logs" component={LogsPage} />
        <Stack.Screen options={{ title: 'Home', headerShown: false, headerTintColor: "#016899" }} name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </ThemeProvider>
  </NavigationContainer>);
}
