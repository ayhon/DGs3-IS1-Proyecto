import React, { useRef, createRef } from "react";
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
  Card,
  DefaultTheme,
  IconButton,
  Provider as PaperProvider,
  Surface,
  Caption,
} from "react-native-paper";
import Chance from "chance";

const chance = new Chance();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFC107",
    accent: "#607D8B",
    background: "#FFF",
  },
};

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
  const inputReference = useRef();
  const animatedValue = React.useState(new Animated.Value(0))[0];
  const [buttonsShown, setButtonsShown] = React.useState(false);
  const animation = (toValue: any): any => {
    return Animated.timing(animatedValue, {
      duration: 200,
      toValue,
      useNativeDriver: false,
    });
  };
  const horizontalDisplacement = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -50],
  });

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
    if (text.trim() === "") return;
    setChatHistory([
      ...chatHistory,
      {
        avatar: "https://i.imgur.com/ibKSsXA.png",
        sender: "Scich.at",
        message: text,
        date: new Date(),
      },
    ]);

    setText("");
  };
  React.useEffect(() => {
    if (buttonsShown) {
      animation(1).start();
    } else {
      animation(0).start();
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
      <SafeAreaView style={styles.container}>
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
                right={() => (
                  <Caption>{chatMessage.date.toLocaleTimeString()}</Caption>
                )}
                key={index}
              />
            ))}
          </View>
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
        <TextInput
          ref={inputReference}
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
          icon="send"
          onPress={onSubmitEditing}
          // disabled={text.trim() == ""}
          onLongPress={onLongSendPress}
        />
      </View>
    </>
  );
};

export default function ChatScreen({ navigation }: any) {
  return (
    <PaperProvider theme={theme}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ChatHeader navigation={navigation} />
        <Chat />
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-end",
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
  floatingButtonsContainer: {
    position: "absolute",
    bottom: 60,
    height: 130,
    justifyContent: "space-between",
    right: -40,
    // backgroundColor: "coral",
    // opacity: 0.8,
  },
});
