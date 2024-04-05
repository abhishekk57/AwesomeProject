import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomePage, SettingPage, ProfilePage, LogsPage } from './screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// function RootStack(){
//     return (
//         <NavigationContainer>
//           <AppNavigator />
//         </NavigationContainer>
//       );
// }

function RootStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="root" component={DrawerScreen} />
            <Stack.Screen options={{ title: "Setting" }} name="setting" component={SettingPage} />
        </Stack.Navigator>
    );

}

function DrawerScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen options={{ title: "Home" }} name="homepage" component={HomePage} />
            <Drawer.Screen options={{ title: "Logs" }} name="logs" component={LogsPage} />
            <Drawer.Screen options={{ title: "Profile" }} name="profile" component={ProfilePage} />
        </Drawer.Navigator>
    );
}
export default RootStack;
