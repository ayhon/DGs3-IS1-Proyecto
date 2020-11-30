import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {
    DefaultTheme,
    Provider as PaperProvider
} from "react-native-paper";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#2a9d8f",
        accent: "#e9c46a",
        background: "#FFF",
    }
};

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <PaperProvider theme={theme}>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </SafeAreaProvider>
            </PaperProvider>
        );
    }
}
