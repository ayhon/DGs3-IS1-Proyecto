import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import ChatScreen from "../screens/ChatScreen";
import AuthScreen from "../screens/AuthScreen";
import Conversations from "../screens/Conversations";
import AddConversation from '../screens/AddConversation';

const Stack = createStackNavigator();

export default function BottomTabNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="AuthScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
            />
            <Stack.Screen
                name="AuthScreen"
                component={AuthScreen}
            />
            <Stack.Screen
                name="Conversations"
                component={Conversations}
            />
            <Stack.Screen
                name="AddConversation"
                component={AddConversation}
            />
        </Stack.Navigator>
    );
}