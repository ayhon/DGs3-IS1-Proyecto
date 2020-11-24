import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import { Appbar, Avatar } from 'react-native-paper';

import { GiftedChat, IMessage } from 'react-native-gifted-chat'

function Example() {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        setMessages(
            [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ]
        )
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}

const MyComponent = () => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Avatar.Image size={36} source={require('../assets/images/icon.png')} />
            <Appbar.Content title="Scichat Oficial" subtitle="6 miembros" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};

export default function TabTwoScreen() {
    return (
        <PaperProvider>
            <MyComponent></MyComponent>
            <Example />
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
