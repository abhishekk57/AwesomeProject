import React, { useState } from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import { View, Pressable, SafeAreaView, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from './src/util/theme-wrapper';
import {
  HomePage, SettingPage, ProfilePage, LogsPage,
  LandingPage, BottomTabStack
} from './src/screens';
import MpinPage from './src/screens/mpin';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HtmlRenderer />
    </SafeAreaView>
  );
};

const HtmlRenderer = () => {
  const [showHtml, setShowHtml] = useState(false);

  const handleButtonClick = () => {
    setShowHtml(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={handleButtonClick}>
        <Text>{"Show Html"}</Text>
      </Pressable>
      {showHtml && (
        <WebView
          originWhitelist={['*']}
          source={{ html: '<h1>Hello, this is HTML content!</h1>' }}
        />
      )}
    </View>
  );
};

export default App;







// export default function App() {



//   return (<NavigationContainer>
//     <ThemeProvider>
//       <Stack.Navigator initialRouteName="root">
//         <Stack.Screen options={{ headerShown: false }} name="root" component={MpinPage} />
//         <Stack.Screen options={{ headerShown: false }} name="tabs" component={BottomTabStack} />
//         <Stack.Screen name="HomePage" component={HomePage} />
//         <Stack.Screen options={{ headerTintColor: "#016899", title: '' }} name="WebviewA" component={SettingPage} />
//         <Stack.Screen options={{ headerTintColor: "#016899", title: '' }} name="WebviewB" component={ProfilePage} />
//         <Stack.Screen options={{ headerTintColor: "#016899", title: 'Logs' }} name="Logs" component={LogsPage} />
//         <Stack.Screen options={{ title: 'Home', headerShown: false, headerTintColor: "#016899" }} name="LandingPage" component={LandingPage} />
//       </Stack.Navigator>
//     </ThemeProvider>
//   </NavigationContainer>);
// }