import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import conversationData from "../assets/demo/DummyConversations";
import { Appbar, Avatar, Caption, FAB, List, Menu } from "react-native-paper";
import { Profile } from '../constants/DemoUser';

export default function Conversations({ navigation }: any) {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const avatarSize = 50;

    const currentDate = new Date();

    return (
        <>
            <Appbar.Header style={{
                zIndex: 1,
                elevation: 2
            }}>
                <Appbar.BackAction style={{ display: "none" }} />
                <Avatar.Image
                    size={36}
                    source={{ uri: Profile.avatar }}
                    style={{
                        marginLeft: 10
                    }}
                />
                <Appbar.Content title="Scich.at" subtitle={Profile.name} />

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
                    <Menu.Item icon="settings" onPress={() => { closeMenu(); navigation.navigate('SettingsScreen') }} title="Settings" />
                    <Menu.Item icon="exit-to-app" onPress={() => { closeMenu(); navigation.navigate('AuthScreen') }} title="Log out" />
                    <Menu.Item icon="account" onPress={() => { closeMenu(); navigation.navigate('Perfil') }} title="My Profile" />

                </Menu>
            </Appbar.Header>

            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    paddingBottom: 50,
                    backgroundColor: "#fff",

                }}
            >
                <List.Section>
                    <List.Subheader>Chats</List.Subheader>
                    {conversationData.map((conversation, index) => (
                        <List.Item
                            key={index.toString()}
                            style={{
                                marginBottom: 5,
                                paddingHorizontal: 10
                            }}
                            title={conversation.name}
                            titleStyle={{
                                marginBottom: 5,
                                fontWeight: "bold"
                            }}
                            description={conversation.lastMsg}
                            descriptionNumberOfLines={1000}
                            left={(props) => (
                                <Avatar.Image
                                    {...props}
                                    style={{
                                        alignSelf: "center",
                                        marginRight: 5,
                                        backgroundColor: "#fff"
                                    }}
                                    size={avatarSize}
                                    source={() => (
                                        <Image
                                            source={{ uri: conversation.img }}
                                            style={{
                                                width: avatarSize,
                                                height: avatarSize,
                                                borderRadius: avatarSize,
                                            }}
                                        />
                                    )}
                                />
                            )}
                            right={(props) => {
                                const newDate = new Date(currentDate);
                                newDate.setTime(currentDate.getTime() - index * 1000 * 300);

                                return <Caption>{newDate.getHours()}:{newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()}</Caption>;
                            }}
                            onPress={() => { navigation.navigate('ChatScreen') }}
                        />
                    ))}
                </List.Section>
            </ScrollView>
            <FAB
                style={{
                    position: "absolute",
                    right: 20,
                    bottom: 20,
                }}
                small
                icon="plus"
                label="Start a conversation"
                onPress={() => navigation.navigate('AddConversation')}
            />
        </>
    );
}
