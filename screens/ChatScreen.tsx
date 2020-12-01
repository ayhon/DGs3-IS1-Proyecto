import React, { useRef } from "react";
import {
    Animated,
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
    Surface,
} from "react-native-paper";
import Chance from "chance";
import { Profile } from "../constants/DemoUser";

const chance = new Chance();

const SectionList = () => {
    const [sections, setSections] = React.useState([
        {
            name: "All",
            selected: true,
            icon: "all-inclusive",
        },
        {
            name: "Gaming",
            icon: "cards-playing-outline",
        },
        {
            name: "Anime",
            icon: "video-vintage",
        },
        {
            name: "Just talking",
            icon: "phone-in-talk",
        },
        {
            name: "Coding",
            icon: "code-tags",
        },
    ]);

    return (
        <Surface
            style={{
                elevation: 1,
                zIndex: 1,
            }}
        >
            <ScrollView
                horizontal={true}
                style={{
                    flexGrow: 0,
                    backgroundColor: "#fff",
                    padding: 10,
                }}
            >
                {sections.map((item, index) => (
                    <Chip
                        icon={item.icon ? item.icon : "tag"}
                        selected={item.selected}
                        key={index.toString()}
                        style={{ marginRight: 10 }}
                        onPress={() => console.log("WIP xD")}
                    >
                        {item.name}
                    </Chip>
                ))}
            </ScrollView>
        </Surface>
    );
};

const avatarSize = 40;

const ChatHeader = ({ navigation, conversation }: any) => {
    const _goBack = () => {
        console.log("Went back");
        navigation.navigate("Conversations");
    };

    const _handleSearch = () => console.log("Searching");

    const _handleMore = () => console.log("Shown more");

    let subtitle;

    if (conversation.group) {
        subtitle = conversation.group.members + ` members`;
    }

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Avatar.Image
                size={36}
                source={{ uri: conversation.img }}
            />
            <Appbar.Content title={conversation.name} subtitle={subtitle} />
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
    isMine?: boolean
}

const Chat = ({ conversation }: any) => {
    const [chatHistory, setChatHistory] = React.useState<ChatMessage[]>([]);
    const [text, setText] = React.useState("");
    const scrollViewRef = useRef<ScrollView>();

    const inputReference = useRef<TextInput>();
    const toolbarXPos = React.useState(new Animated.Value(0))[0];
    const [buttonsShown, setButtonsShown] = React.useState(false);

    const toolbarAnimation = (toValue: any): any => {
        return Animated.timing(toolbarXPos, {
            duration: 200,
            toValue,
            useNativeDriver: false,
        });
    };
    const horizontalDisplacement = toolbarXPos.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50],
    });



    const currentDate = new Date();

    if (!chatHistory.length) {
        /// Generar mensajes de chat aleatorios
        for (let i = 0; i < 20; ++i) {
            const newDate = new Date(currentDate);
            newDate.setTime(currentDate.getTime() - 1000 * 30 * (20 - i));

            if (conversation.isGroup) {
                chatHistory.push({
                    sender: chance.name(),
                    message: chance.sentence(),
                    avatar: `https://picsum.photos/seed/${Math.random()}/${avatarSize}/${avatarSize}`,
                    date: newDate,
                });
            }
            else {
                if (chance.bool()) {
                    chatHistory.push({
                        sender: conversation.name,
                        message: chance.sentence(),
                        avatar: conversation.img,
                        date: newDate,
                    });
                }
                else {
                    chatHistory.push({
                        sender: Profile.name,
                        message: chance.sentence(),
                        avatar: Profile.avatar,
                        date: newDate,
                        isMine: true
                    });
                }
            }
        }
    }

    const onSubmitEditing = () => {
        if (text.trim() === "") return;
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

    const opacityValue = React.useState(new Animated.Value(1))[0];
    const opacityAnimation = (toValue: any): any => {
        return Animated.timing(opacityValue, {
            duration: 200,
            toValue,
            useNativeDriver: false,
        });
    };

    React.useEffect(() => {
        if (buttonsShown) {
            toolbarAnimation(1).start();
            opacityAnimation(0.2).start();
        } else {
            toolbarAnimation(0).start();
            opacityAnimation(1).start();
        }
    }, [buttonsShown]);

    const onLongSendPress = () => {
        setButtonsShown((prevVal) => !prevVal);
        console.log("Options for LaTeX, Graph and Code");
    };

    const focusTextInput = () => {
        setButtonsShown(false);
        if (inputReference.current) inputReference?.current?.focus();
        console.log("Focus text input");
    };

    return (
        <>
            <SafeAreaView
                style={[
                    styles.container,
                    {
                        alignContent: "flex-end",
                        flexGrow: 1,
                    },
                ]}
            >
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
                    <Animated.View style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        opacity: opacityValue
                    }} >
                        {chatHistory.map((chatMessage, index) => (
                            <ChatMessage message={chatMessage} isGroup={conversation.isGroup} key={index.toString()} />
                        ))}
                    </Animated.View>
                </ScrollView>
            </SafeAreaView>

            <Animated.View
                style={[
                    styles.floatingButtonsContainer,
                    {
                        transform: [{ translateX: horizontalDisplacement }],
                    },
                ]}
            >
                <FAB small onPress={focusTextInput} icon="math-integral" />
                <FAB small onPress={focusTextInput} icon="xml" />
                <FAB small onPress={focusTextInput} icon="graphql" />
            </Animated.View>

            <View style={{ flexDirection: "row", padding: 10 }}>
                <FAB
                    small
                    icon="plus"
                    onPress={onLongSendPress}
                />
                <TextInput
                    style={{
                        height: 40,
                        flex: 1,
                        backgroundColor: "white",
                        borderRadius: 40,
                        borderWidth: 0,
                        paddingHorizontal: 15,
                        marginHorizontal: 5,
                    }}
                    value={text}
                    placeholder="Type a message..."
                    onChangeText={(text) => setText(text)}
                    onSubmitEditing={onSubmitEditing}
                    ref={inputReference}
                />
                <FAB
                    small
                    icon="send"
                    onPress={onSubmitEditing}
                    disabled={text.trim() == ""}
                />
            </View>
        </>
    );
};

const ChatMessage = ({ message, isGroup }: any) => {
    const MessageDate = () => (
        <Caption>
            {message.date.getHours()}:
            {message.date.getMinutes() < 10
                ? "0" + message.date.getMinutes()
                : message.date.getMinutes()}
        </Caption>
    )

    const MessageAvatar = () => (
        <Avatar.Image
            style={{ alignSelf: "center", marginRight: 5 }}
            size={avatarSize}
            source={() => (
                <Image
                    source={{ uri: message.avatar }}
                    style={{
                        width: avatarSize,
                        height: avatarSize,
                        borderRadius: avatarSize,
                    }}
                />
            )}
        />
    )

    return <List.Item
        title={message.sender}
        titleStyle={(message.isMine) ? styles.userChatTitle : styles.chatTitle}
        description={message.message}
        descriptionStyle={(message.isMine) ? styles.userChatBody : styles.chatBody}
        descriptionNumberOfLines={1000}
        left={() => {
            if (!message.isMine) return (
                <MessageAvatar />
            )
            else return (
                <MessageDate />
            )
        }}
        right={() => {
            if (message.isMine) return (
                <MessageAvatar />
            )
            else return (
                <MessageDate />
            )
        }}
    />
}

export default function ChatScreen({ navigation, route }: any) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : undefined}
            style={styles.container}
        >
            <ChatHeader navigation={navigation} conversation={route.params} />
            {route.params.group && <SectionList />}
            <Chat isGroup={route.params.isGroup} conversation={route.params} />
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
    userChatTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        marginTop: 0,
        textAlign: "right",
        marginRight: "5%"
    },
    chatBody: {
        fontSize: 12,
        fontWeight: "400",
        color: "#1a1a1a",
    },
    userChatBody: {
        textAlign: "right",
        marginRight: "5%",
        fontSize: 12,
        fontWeight: "400",
    },
    floatingButtonsContainer: {
        position: "absolute",
        bottom: 70,
        height: 130,
        justifyContent: "space-between",
        left: -40,
        // backgroundColor: "coral",
        // opacity: 0.8,
    },
});
