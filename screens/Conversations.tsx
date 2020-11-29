import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ConversationCard from "../components/ConversationCard";
import conversationData from "../assets/demo/DummyConversations";

// const accentColor = "#0039a2";

export default function Conversations({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={conversationData}
        renderItem={({ item }) => {
          return <ConversationCard data={item} navigation={navigation} />;
        }}
      />
    </View>
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
