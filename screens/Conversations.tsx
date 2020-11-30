import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ConversationCard from "../components/ConversationCard";
import conversationData from "../assets/demo/DummyConversations";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Headbar from '../components/headbar.js'

// const accentColor = "#0039a2";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ddd56e',
        accent: 'grey',
    },
};

export default function Conversations({ navigation }: any) {
    return (
        <PaperProvider theme={theme}>
            <Headbar
                hasBack={false}
                back={() => alert("Adios")}
                title="Conversations"
                sub=""
                puntos={() => alert("Mas opciones")} />
            <View style={styles.container}>
                <FlatList
                    data={conversationData}
                    renderItem={({ item }) => {
                        return <ConversationCard data={item} navigation={navigation} />;
                    }}
                    keyExtractor={item => item.key.toString()}

                />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ebebeb",
    },
});
