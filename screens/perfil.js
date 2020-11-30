//import { StatusBar } from 'expo-status-bar';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import UserData from '../UserData';
import styles from "../components/Style.js"
import Campo from '../components/Item.js'
import { Appbar, Avatar } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ddd56e',
    accent: 'grey',
  },
};

const Headbar = () => {
  const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
      <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Avatar.Image size={36} source={require("../assets/images/icon.png")} />
          <Appbar.Content title="Perfil de usuario" subtitle="Perfil de Usuario" />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
  );
};

class Perfil extends React.Component{

    constructor(){
        super()
        this.state={
            Username: UserData.Username,
            biography: UserData.Biografia,
            editBio: false,
            editName: false
        }
        this.editBiography=this.editBiography.bind(this)
        this.editUserName=this.editUserName.bind(this)
        this.actualiza=this.actualiza.bind(this)
        this.cancela=this.cancela.bind(this)
    }

    editImage(){
        alert("image changed")
    }
      
     editUserName(){
         if(this.state.editName)UserData.Username=this.state.Username
        this.setState({editName:!this.state.editName})
    }
      
     editBiography(){
        if(this.state.editBio)UserData.biography=this.state.biography
        this.setState({editBio:!this.state.editBio})
    }

    actualiza(name, value){
        this.setState({ [name]: value })
    }

    cancela(){
      this.setState({
            Username: UserData.Username,
            biography: UserData.Biografia,
            editBio: false,
            editName: false
      })
    }

    render(){
        return (
          <PaperProvider theme={theme}>
            <Headbar/>
            <View style={styles.container}>
              <View style={styles.contcenter}>
                <TouchableOpacity onPress={this.editImage} >
                  <Image source={require("../assets/images/emperador.jpg")} style={styles.fotoPerfil}/>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <Campo 
                  name="Username" 
                  value={this.state.Username} 
                  user={true}
                  edit={this.state.editName} 
                  onPress={this.editUserName} 
                  onChange={this.actualiza} 
                  label="Name:"
                  cancel={this.cancela}
                />
                <Text/>
                <Campo 
                  name="biography" 
                  value={this.state.biography} 
                  user={true}
                  edit={this.state.editBio} 
                  onPress={this.editBiography} 
                  onChange={this.actualiza} 
                  label="Biography:"
                  cancel={this.cancela}
                />
              </View>
            </View>
          </PaperProvider>
          )
    }
}

export default Perfil