import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";

function ConversationCard(props: any) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image style={styles.groupIcon} source={{ uri: props.data.img }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.data.name}</Text>
        <View style={{ flexWrap: "wrap" }}>
          <Text style={styles.description}>{props.data.lastMsg}</Text>
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
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 8,
    backgroundColor: "#e8e8e3",
    // shadowOffset: { width: 10, height: 10 },
    // shadowColor: "#f55",
    // shadowOpacity: 100,
    // shadowRadius: 10,
    justifyContent: "space-between",
    alignContent: "center",
    // borderColor: "black",
    // borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {},
  groupIcon: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    flexGrow: 0,
    flexBasis: 70,
    borderColor: "white",
    borderWidth: 1.5,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: "#bff",
  },
});

export default ConversationCard;
