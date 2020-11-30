import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import conversationData from "../assets/demo/DummyConversations";
import { Appbar, Avatar, Caption, FAB, List, Menu, Subheading, Title } from "react-native-paper";
import { Profile } from '../constants/DemoUser';

export default function Conversations({ navigation }: any) {
    const avatarSize = 45;

    return (
        <>
            <Appbar.Header style={{
                zIndex: 1,
                elevation: 2
            }}>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Settings" />
            </Appbar.Header>

            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                    flexGrow: 1,
                    flexDirection: "column",
                    backgroundColor: "#fff",

                }}
            >
                <View style={{
                    padding: 15,
                    backgroundColor: "#fafafa",
                    elevation: 2,
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Avatar.Image size={80} source={{ uri: Profile.avatar }} />
                    <View style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: 15,
                        marginLeft: 10
                    }}>
                        <Title style={{ marginBottom: 0 }}>{Profile.name}</Title>
                        <Subheading>{Profile.email}</Subheading>
                    </View>
                </View>

                <List.Section>
                    <List.Subheader>Security</List.Subheader>
                    <List.Item title="Change Password" left={() => <List.Icon icon="onepassword" />} onPress={() => { }} />
                    <List.Item title="Set up fingerprint login" left={() => <List.Icon icon="fingerprint" />} onPress={() => { }} />
                </List.Section>


                <List.Section>
                    <List.Subheader>Account</List.Subheader>
                    <List.Item
                        title="Delete my account"
                        left={() => <List.Icon icon="delete" />}
                        onPress={() => { }}
                    />
                </List.Section>
            </ScrollView>
        </>
    );
}
