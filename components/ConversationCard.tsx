import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";

function ConversationCard({ data, navigation }: any) {
  const handlePress = () => {
    navigation.navigate("ChatScreen");
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <Image style={styles.groupIcon} source={{ uri: data.img }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{data.lastMsg}</Text>
        </View>
      </View>
    </TouchableOpacity>
    // <View style={styles.cardContainer}>
    //   <Img></Img>
    //   <Text style={styles.title}></Text>
    //   <Text style={styles.description}></Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    height: 85,
    width: 350,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 8,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    borderWidth: 0.6,
    borderColor: "#eee",
    borderRadius: 10,
    elevation: 1,
  },
  groupIcon: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    // flexGrow: 0,
    // flexBasis: 70,
    borderColor: "white",
    borderWidth: 1.5,
  },
  textContainer: {
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#bff",
    height: "70%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
  },
  descriptionBox: {
    // backgroundColor: "brown",
    flex: 1,
    flexWrap: "wrap",
  },
  description: {
    // backgroundColor: "green",
  },
});

export default ConversationCard;
