import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import ChatScreen from "../screens/ChatScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import Conversations from "../screens/Conversations";

const Stack = createStackNavigator();

export default function BottomTabNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Conversations"
                component={Conversations}
            />
            <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
            />
        </Stack.Navigator>
    );
}