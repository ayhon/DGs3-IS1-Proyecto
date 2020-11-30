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
    Snackbar,
    Surface,
} from "react-native-paper";

import * as LocalAuthentication from 'expo-local-authentication';

import { Credentials } from '../constants/DemoUser';

import {
    useFonts,
    MajorMonoDisplay_400Regular,
} from '@expo-google-fonts/major-mono-display';
import { AppLoading } from "expo";

const LoginForm = ({ navigation, setCurrentScreen, toggleSnackBar }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const logIn = async () => {
        if (!(username == Credentials.username && password == Credentials.passowrd)) {
            toggleSnackBar();
            return;
        }

        const localAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login to Scich.at"
        });

        console.log(localAuth);

        if (!localAuth.success) {
            toggleSnackBar();
            return;
        }

        navigation.replace("Conversations");
    };

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
                contentStyle={{ paddingVertical: 2 }}
            >
                Log in
            </Button>

            <Button icon="creation" mode="outlined" onPress={register} contentStyle={{ paddingVertical: 2 }}>
                Register
            </Button>
        </View>
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
            <Button icon="login" mode="contained" onPress={onRegister} style={{ marginVertical: 10 }} contentStyle={{ paddingVertical: 2 }}>
                Register
            </Button>

            <Button icon="account" mode="outlined" onPress={() => { setCurrentScreen("login") }} contentStyle={{ paddingVertical: 2 }}>
                I have an account
            </Button>
        </View>
    </>
}

export default function AuthScreen({ navigation }: any) {
    const [currentScreen, setCurrentScreen] = React.useState("login");
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    let [fontsLoaded] = useFonts({
        MajorMonoDisplay_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    else {
        return (
            <>
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
                        ...styles.title,
                        fontFamily: 'MajorMonoDisplay_400Regular',
                        lineHeight: 35
                    }}>Welcome to {"\n"}
                    scich.at</Title>

                    <Surface style={{
                        padding: 20,
                        elevation: 1,
                        borderRadius: 8
                    }}>
                        {currentScreen == "login" ?
                            <LoginForm navigation={navigation} setCurrentScreen={setCurrentScreen} toggleSnackBar={onToggleSnackBar} />
                            :
                            <RegisterForm navigation={navigation} setCurrentScreen={setCurrentScreen} />
                        }
                    </Surface>
                </KeyboardAvoidingView>

                <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
                    Wrong credentials
                </Snackbar>
            </>
        );
    }

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
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
        backgroundColor: "#fff",
        borderColor: "#fff"
    },
});
