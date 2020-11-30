import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View,
    Image,
    ImageBackground,
} from "react-native";

import {
    TextInput,
    Button,
    Title,
    Provider as PaperProvider,
    Snackbar,
    Surface,
} from "react-native-paper";

const credentials = {
    username: "Scichat",
    passowrd: "12345",
};

const LoginForm = ({ navigation, setCurrentScreen }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const logIn = () => {
        if (username == credentials.username && password == credentials.passowrd) {
            console.log(`Login successfully`);
            navigation.replace("Conversations");
        } else {
            onToggleSnackBar();
        }
    };

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    const register = () => {
        setCurrentScreen("register")
    };

    return <>
        <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
                setUsername(text);
            }}
        />

        <TextInput
            style={styles.input}
            mode="outlined"
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
                style={{ marginVertical: 10 }}
            >
                Log in
            </Button>

            <Button icon="creation" mode="outlined" onPress={register}>
                Register
            </Button>
        </View>

        <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
            Wrong credentials
        </Snackbar>
    </>
}

const RegisterForm = ({ navigation, setCurrentScreen }) => {
    const onRegister = () => {
        navigation.navigate("Conversations");
    };

    return <>
        <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Name" />
        <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCompleteType="email"
        />
        <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry
        />
        <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Repeat password"
            autoCompleteType="password"
            secureTextEntry
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
            <Button icon="login" mode="contained" onPress={onRegister} style={{ marginVertical: 10 }}>
                Register
            </Button>

                <Button icon="account" mode="outlined" onPress={() => { setCurrentScreen("login") }}>
                    I have an account
            </Button>
        </View>
    </>
}

export default function AuthScreen({ navigation }: any) {
    const [currentScreen, setCurrentScreen] = React.useState("login");

    return (
        <PaperProvider>
            <ImageBackground
                source={{ uri: "https://i.imgur.com/6MMrZRV.png" }}
                style={{
                    width: 1648,
                    height: 1165,
                    flex: 1,
                    justifyContent: "center",
                    position: "absolute",
                    opacity: 0.5
                }}
            >
            </ImageBackground>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : undefined}
                style={styles.container}
            >
                <Image
                    source={{ uri: "https://i.imgur.com/ibKSsXA.png" }}
                    style={{ width: 60, height: 60 }}
                />
                <Title style={{
                    ...styles.title
                }}>Welcome to Scich.at</Title>

                <Surface style={{
                    padding: 20,
                    elevation: 1,
                    borderRadius: 8
                }}>
                    {currentScreen == "login" ?
                        <LoginForm navigation={navigation} setCurrentScreen={setCurrentScreen} />
                        :
                        <RegisterForm navigation={navigation} setCurrentScreen={setCurrentScreen} />
                    }
                </Surface>
            </KeyboardAvoidingView>


        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: 500,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
        backgroundColor: "#fff",
        borderColor: "#fff"
    },
});
