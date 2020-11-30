import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ConversationCard from "../components/ConversationCard";
import conversationData from "../assets/demo/DummyConversations";
import Headbar from '../components/headbar.js'

export default function Conversations({ navigation }: any) {
    return (
        <>
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
        </>
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
