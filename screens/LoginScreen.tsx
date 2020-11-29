import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Image,
} from "react-native";

import {
  TextInput,
  Button,
  Title,
  Provider as PaperProvider,
  Snackbar,
} from "react-native-paper";

const credentials = {
  username: "Scichat",
  passowrd: "12345",
};

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const logIn = () => {
    if (username == credentials.username && password == credentials.passowrd) {
      console.log(`Login successfully`);
      navigation.replace("Conversations");
    } else {
      onToggleSnackBar();
    }
  };

  const register = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <Image
          source={{ uri: "https://i.imgur.com/ibKSsXA.png" }}
          style={{ width: 100, height: 100 }}
        />
        <Title style={styles.title}>Scichat Login</Title>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <View style={{ display: "flex", flexDirection: "column" }}>
          <Button
            icon="login"
            mode="contained"
            onPress={logIn}
            style={{ marginBottom: 10 }}
          >
            Log in
          </Button>

          <Button icon="login" mode="outlined" onPress={register}>
            Register
          </Button>
        </View>

        <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
          Wrong credentials
        </Snackbar>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
