import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRoom from "../screens/ChatRoom";
import BottomNav from "./bottomTab";
import ContactSearch from "../components/contactSearch";
import React from "react";
import SplashScreenPro from "../screens/SplashScreen";

// Define the type for the navigation stack
export type RootStackParamList = {
  splash: undefined;
  homeScreen: undefined;
  contact: undefined;
  chatroom: { id: number; firstName: string; lastName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class RootNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="splash"
            component={SplashScreenPro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="homeScreen"
            component={BottomNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="contact"
            component={ContactSearch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="chatroom"
            component={ChatRoom} // This will now match the expected route params
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
