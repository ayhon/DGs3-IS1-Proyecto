import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ConversationCard from "../components/ConversationCard";
import conversationData from "../assets/demo/DummyConversations";
import Headbar from '../components/headbar.js'
import { Appbar, Avatar, Menu } from "react-native-paper";

export default function Conversations({ navigation }: any) {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction style={{ display: "none" }} />
                <Avatar.Image
                    size={36}
                    source={{ uri: "https://i.imgur.com/ibKSsXA.png" }}
                    style={{
                        marginLeft: 10
                    }}
                />
                <Appbar.Content title="Scich.at" />

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
                    <Menu.Item onPress={() => { navigation.navigate('AuthScreen') }} title="Log out" />
                </Menu>

            </Appbar.Header>
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
