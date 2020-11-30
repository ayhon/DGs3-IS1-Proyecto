import Perfil from './perfil';
import React from 'react';
import { StyleSheet, View, Image, ScrollView } from "react-native";

export default function PerfilScreen({ navigation }: any){
    return(
            <Perfil
                user={true}
                nav={navigation}
            />
    )

}