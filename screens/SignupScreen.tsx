import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";

import {
  TextInput,
  Button,
  Title,
  Provider as PaperProvider,
} from "react-native-paper";

export default function SignupScreen({ navigation }: any) {
  const register = () => {
    navigation.navigate("Conversations");
  };

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <Title style={styles.title}>Scichat Signup</Title>
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
        <Button icon="login" mode="contained" onPress={register}>
          Register
        </Button>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    width: 200,
    height: 50,
    backgroundColor: "#fff",
  },
});
