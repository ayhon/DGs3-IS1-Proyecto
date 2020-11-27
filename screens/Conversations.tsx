import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ConversationCard from "../components/ConversationCard";

type conversation = {
    key: number;
    name: string;
    lastMsg: string;
    img: string;
};

// const accentColor = "#0039a2";

export default function TabTwoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={conversations}
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
    },
});

const conversations: conversation[] = [
    {
        key: 1,
        name: "Naruto Uzumaki",
        lastMsg: "¡Quiero ser hokage!",
        img:
            "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/01/Child-Naruto-Hoodie.jpg",
    },
    {
        key: 2,
        name: "Ash Ketchup",
        lastMsg: "Llevo 9 años teniendo 12 años",
        img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.v5P16H71ZP_-X6O0Pwrb4wHaFi%26pid%3DApi&f=1",
    },
    {
        key: 3,
        name: "Mario",
        lastMsg: "Itsa me, Mario!",
        img: "https://sickr.files.wordpress.com/2017/07/mario.jpg",
    },
    {
        key: 4,
        name: "William Shakespeare",
        lastMsg: "To be or not to be",
        img: "https://www.williamshakespeare.net/images/shakespeare.jpg",
    },
    {
        key: 5,
        name: "Cumpleaños Pablo",
        lastMsg: "¿A cual de los 4?",
        img:
            "https://www.domusvi.es/blog/wp-content/uploads/2020/05/71qhGMM77BL._SS500_.jpg",
    },
    {
        key: 6,
        name: "Papa Noel",
        lastMsg: "Me temo que no tendrás regalos",
        img:
            "https://upload.wikimedia.org/wikipedia/commons/4/49/Jonathan_G_Meath_portrays_Santa_Claus.jpg",
    },
    {
        key: 7,
        name: "UCppM",
        lastMsg: "✅ AC by jriolopez on 69420 - La Vida",
        img:
            "https://informatica.ucm.es/data/cont/media/www/pag-78821/escudofdigrande.png",
    },
    {
        key: 8,
        name: "Learn React!",
        lastMsg: "Learn React in these 5 easy steps",
        img:
            "https://i.pinimg.com/originals/d7/cb/4e/d7cb4e0d3addc62b82eb18bfcb32c4d3.jpg",
    },
    {
        key: 9,
        name: "Giuseppe Vitali",
        lastMsg: "I discovered non-measurable sets in ℝ",
        img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Giuseppe_Vitali.jpg/220px-Giuseppe_Vitali.jpg",
    },
    {
        key: 10,
        name: "Me",
        lastMsg: "Si, soy yo",
        img:
            "https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg",
    },
];
