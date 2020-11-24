import React from "react";
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Text,
} from "react-native";

const accentColor = "#0039a2";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scichat Signup</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput
        style={styles.input}
        placeholder="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCompleteType="password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat password"
        autoCompleteType="password"
        secureTextEntry
      />
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    borderColor: accentColor,
    borderBottomWidth: 1,
    margin: 10,
    padding: 5,
    width: 200,
  },
  button: {
    margin: 15,
    height: 40,
    width: 130,
    backgroundColor: accentColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80 / 12,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
  },
});
