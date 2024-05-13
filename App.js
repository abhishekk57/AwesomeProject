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
 const [data, setData] = useState([]);
  const handleButtonClick = () => {
    setData(['Item 1', 'Item 2', 'Item 3']); // here we can add dymanically data to html
    setShowHtml(true);
  };

  const handleMessage = (event) => {
    const newData = JSON.parse(event?.nativeEvent?.data);
    setData(newData);
  };

  const generateHtml = () => {
    return `
      <html>
        <head>
          <script>
            function handleClick(item) {
              const newData = ['New Item 1', 'New Item 2', 'New Item 3'];
              window.ReactNativeWebView.postMessage(JSON.stringify(newData));
            }
          </script>
        </head>
        <body>
          <h1>List of Items</h1>
          <ul>
            ${data.map((item, index) => `
              <li key=${index} onclick="handleClick('${item}')">${item}</li>
            `).join('')}
          </ul>
        </body>
      </html>
    `;
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={handleButtonClick}>
        <Text>{"Show Html"}</Text>
      </Pressable>
      {showHtml && (
        <WebView
          originWhitelist={['*']}
          source={{ html: generateHtml() }}
          onMessage={handleMessage}
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