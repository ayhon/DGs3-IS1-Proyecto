import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import conversationData from "../assets/demo/DummyConversations";
import { Appbar, Avatar, Caption, FAB, List, Menu } from "react-native-paper";
import Chance from "chance";

const chance = new Chance();

interface iProfile {
    name: String,
    description?: String,
    avatar: String
}

export default function Conversations({ navigation }: any) {
    const avatarSize = 45;
    const [contacts, setContacts] = React.useState<iProfile[]>([]);

    if (!contacts.length) {
        /// Generar contactos aleatorios
        for (let i = 0; i < 20; ++i) {
            let newContact: iProfile = {
                name: chance.name(),
                avatar: `https://picsum.photos/${avatarSize}?${Math.random()}`,
            }

            if (chance.bool()) {
                newContact.description = chance.sentence();
            }
            contacts.push(newContact);
        }

        const sorted = contacts.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        })

        setContacts(sorted);
    }

    return (
        <>
            <Appbar.Header style={{
                zIndex: 1,
                elevation: 2
            }}>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Start a conversation" />
            </Appbar.Header>

            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    backgroundColor: "#fff",

                }}
            >
                {contacts.map((contact, index) => (
                    <List.Item
                        key={index.toString()}
                        style={{
                            marginBottom: 5,
                            paddingHorizontal: 10
                        }}
                        title={contact.name}
                        titleStyle={{
                            marginBottom: 2,
                            fontWeight: "bold"
                        }}
                        description={contact.description}
                        descriptionNumberOfLines={1}
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
                                        source={{ uri: contact.avatar }}
                                        style={{
                                            width: avatarSize,
                                            height: avatarSize,
                                            borderRadius: avatarSize,
                                        }}
                                    />
                                )}
                            />
                        )}
                        onPress={() => { navigation.navigate('ChatScreen') }}
                    />
                ))}
            </ScrollView>
        </>
    );
}
