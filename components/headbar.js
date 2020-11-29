import { Appbar, Avatar } from 'react-native-paper';
import React from 'react';

function Headbar(props){
  
    return (
        <Appbar.Header>
            {props.hasBack && <Appbar.BackAction onPress={props.back} />}
            <Avatar.Image size={36} source={require("../assets/images/icon.png" )} />
            <Appbar.Content title={props.title} subtitle={props.subtitle} />
            <Appbar.Action icon="dots-vertical" onPress={props.puntos} />
        </Appbar.Header>
    );
  };

  export default Headbar;