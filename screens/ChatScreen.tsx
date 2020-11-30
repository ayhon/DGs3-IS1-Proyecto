import React, { useRef } from "react";
import {
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import {
    FAB,
    Appbar,
    Avatar,
    List,
    Caption,
    Chip,
    Surface
} from "react-native-paper";
import Chance from "chance";
import { Profile } from "../constants/DemoUser";

const chance = new Chance();

const SectionList = () => {
    const [sections, setSections] = React.useState([
        {
            name: "All",
            selected: true,
            icon: "all-inclusive"
        },
        {
            name: "Gaming",
            icon: "cards-playing-outline"
        },
        {
            name: "Anime",
            icon: "video-vintage"
        },
        {
            name: "Just talking",
            icon: "phone-in-talk"
        },
        {
            name: "Coding",
            icon: "code-tags"
        }
    ]);


    return <Surface style={{
        elevation: 1,
        zIndex: 1
    }}>
        <ScrollView horizontal={true} style={{
            flexGrow: 0,
            backgroundColor: "#fff",
            padding: 10,
        }}>
            {
                sections.map((item, index) => (
                    <Chip
                        icon={item.icon ? item.icon : "tag"}
                        selected={item.selected} key={index.toString()}
                        style={{ marginRight: 10 }}
                        onPress={() => console.log('WIP xD')}
                    >
                        {item.name}
                    </Chip>
                ))
            }
        </ScrollView >

    </Surface>

}

const ChatHeader = ({ navigation }: any) => {
    const _goBack = () => {
        console.log("Went back");
        navigation.navigate("Conversations");
    };

    const _handleSearch = () => console.log("Searching");

    const _handleMore = () => console.log("Shown more");

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Avatar.Image
                size={36}
                source={{ uri: "https://i.imgur.com/ibKSsXA.png" }}
            />
            <Appbar.Content title="Scichat Oficial" subtitle="6 miembros" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};

interface ChatMessage {
    sender: String;
    message: String;
    avatar: String;
    date: Date;
}

const Chat = () => {
    const [chatHistory, setChatHistory] = React.useState<ChatMessage[]>([]);
    const [text, setText] = React.useState("");
    const scrollViewRef = useRef<ScrollView>();

    const avatarSize = 40;

    if (!chatHistory.length) {
        /// Generar mensajes de chat aleatorios
        for (let i = 0; i < 10; ++i) {
            chatHistory.push({
                sender: chance.name(),
                message: chance.sentence(),
                avatar: `https://picsum.photos/${avatarSize}?${Math.random()}`,
                date: new Date(),
            });
        }
    }

    const onSubmitEditing = () => {
        setChatHistory([
            ...chatHistory,
            {
                avatar: Profile.avatar,
                sender: Profile.name,
                message: text,
                date: new Date(),
            },
        ]);

        setText("");
    };

    return (
        <>
            <SafeAreaView style={
                {
                    ...styles.container,
                    alignContent: "flex-end",
                    flexGrow: 1
                }
            }>
                <ScrollView
                    onContentSizeChange={() =>
                        scrollViewRef?.current?.scrollToEnd({ animated: true })
                    }
                    ref={scrollViewRef}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "space-between",
                        flexDirection: "column",
                    }}
                    style={styles.scrollView}
                >
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        {chatHistory.map((chatMessage, index) => (
                            <List.Item
                                title={chatMessage.sender}
                                titleStyle={styles.chatTitle}
                                description={chatMessage.message}
                                descriptionStyle={styles.chatBody}
                                descriptionNumberOfLines={1000}
                                left={(props) => (
                                    <Avatar.Image
                                        {...props}
                                        style={{ alignSelf: "center", marginRight: 5 }}
                                        size={avatarSize}
                                        source={() => (
                                            <Image
                                                source={{ uri: chatMessage.avatar }}
                                                style={{
                                                    width: avatarSize,
                                                    height: avatarSize,
                                                    borderRadius: avatarSize,
                                                }}
                                            />
                                        )}
                                    />
                                )}
                                right={(props) => (
                                    <Caption>{chatMessage.date.toLocaleTimeString()}</Caption>
                                )}
                                key={index}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <TextInput
                    style={{
                        height: 40,
                        flex: 1,
                        backgroundColor: "white",
                        borderRadius: 40,
                        borderWidth: 0,
                        paddingHorizontal: 15,
                        marginRight: 5,
                    }}
                    value={text}
                    placeholder="Type a message..."
                    onChangeText={(text) => setText(text)}
                    onSubmitEditing={onSubmitEditing}
                />
                <FAB
                    small
                    icon="send-circle"
                    onPress={onSubmitEditing}
                    disabled={text.trim() == ""}
                />
            </View>
        </>
    );
};

export default function ChatScreen({ navigation }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : undefined}
            style={styles.container}
        >
            <ChatHeader navigation={navigation} />
            <SectionList />
            <Chat />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: "white",
        paddingHorizontal: 5,
    },
    chatTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        marginTop: 0,
    },
    chatBody: {
        fontSize: 12,
        fontWeight: "400",
        color: "#1a1a1a",
    },
});

