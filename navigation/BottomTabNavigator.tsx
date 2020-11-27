import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatScreen from "../screens/ChatScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import Conversations from "../screens/Conversations";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="ChatScreen"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <BottomTab.Screen
                name="ChatScreen"
                component={ChatScreenNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-chatbubbles" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="LoginScreen"
                component={LoginScreenNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Conversations"
                component={ConversationsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="SignupScreen"
                component={SignupScreenNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const ChatScreenStack = createStackNavigator();

function ChatScreenNavigator() {
    return (
        <ChatScreenStack.Navigator>
            <ChatScreenStack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ headerShown: false }}
            />
        </ChatScreenStack.Navigator>
    );
}

const LoginScreenStack = createStackNavigator();

function LoginScreenNavigator() {
    return (
        <LoginScreenStack.Navigator>
            <LoginScreenStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </LoginScreenStack.Navigator>
    );
}

const SignupScreenStack = createStackNavigator();

function SignupScreenNavigator() {
    return (
        <SignupScreenStack.Navigator>
            <SignupScreenStack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
            />
        </SignupScreenStack.Navigator>
    );
}

const ConversationsStack = createStackNavigator();

function ConversationsNavigator() {
    return (
        <ConversationsStack.Navigator>
            <ConversationsStack.Screen
                name="Conversations"
                component={Conversations}
                options={{ headerShown: false }}
            />
        </ConversationsStack.Navigator>
    );
}
