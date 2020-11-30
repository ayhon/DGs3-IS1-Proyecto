//import { StatusBar } from 'expo-status-bar';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import styles from "../components/Style.js"
import Campo from '../components/Item.js'
import { TextInput, View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Appbar, Avatar, FAB, Button, List, Menu, Subheading, Title } from "react-native-paper";
import { Profile } from '../constants/DemoUser';

const Headbar = (props) => {

  const _handleMore = () => console.log('Shown more');

  return (
      <Appbar.Header>
          <Appbar.BackAction onPress={props.goBack} />
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
            Username: Profile.name,
            biography: Profile.biography,
            editBio: false,
            editName: false,
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
         if(this.state.editName)Profile.name=this.state.Username
        this.setState({editName:!this.state.editName})
    }
      
     editBiography(){
        if(this.state.editBio)Profile.biography=this.state.biography
        this.setState({editBio:!this.state.editBio})
    }

    actualiza(name, value){
        this.setState({ [name]: value })
    }

    cancela(){
      this.setState({
        Username: Profile.name,
        biography: Profile.biography,
        editBio: false,
        editName: false,
      })
    }

    render(){
        return (
          <View>
            <Appbar.Header style={{
                zIndex: 1,
                elevation: 2
            }}>
                <Appbar.BackAction onPress={() => { this.props.nav.goBack() }} />
                <Appbar.Content title="Profile" />
            </Appbar.Header>
            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                    flexGrow: 1,
                    flexDirection: "column",
                    backgroundColor: "#fff",

                }}
            >
                <View style={{
                    padding: 15,
                    backgroundColor: "#fafafa",
                    elevation: 2,
                    display: "flex",
                    flexDirection: "row"
                }}>
                  <View style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: 15,
                        marginLeft: 10
                  }}>
                    <TouchableOpacity onPress={this.editImage}><Avatar.Image size={80} source={{ uri: Profile.avatar }} /></TouchableOpacity>
                  </View>
                    <View style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: 15,
                        marginLeft: 10
                    }}>
                      <View style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          padding: 15,
                          marginLeft: 10
                      }}>
                        <Title style={{ marginBottom: 0 }}>{this.state.Username}</Title>
                        <Button icon="pencil" onPress={this.editUserName}/>
                      </View>
                      <View style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          padding: 15,
                          marginLeft: 10
                      }}>
                        <Subheading style={{
                            color: "#999"
                        }}>{Profile.email}</Subheading>
                        <Button icon="pencil" onPress={this.editUserName}/>
                      </View>
                    </View>
                </View>

                <View style={{
                          flexDirection: "row",
                          padding: 15,
                          marginLeft: 10
                      }}>
                        <Subheading style={{
                            color: "#999"
                        }}>Biography</Subheading>
                        <Button icon="pencil" onPress={this.editBiography}/>
                        {this.state.editBio && <Button icon="cancel" onPress={this.cancela}/>}
                      </View>
                {(this.state.editBio)?(<TextInput 
                                        multiline
                                        style={{
                                          width: '85%',
                                        fontSize: 15,
                                        marginLeft: '7%',
                                      }} 
                                        onChangeText={text => this.actualiza('biography',text)} 
                                        value={this.state.biography}
                                    />):
                                    (<Text style={{
                                      width: '85%',
                                    fontSize: 15,
                                    marginLeft: '7%',
                                  }}>{this.state.biography}</Text>)}
                  <Text></Text>
            </ScrollView>
            {/*<View style={styles.container}>
              <View style={styles.contcenter}>
                <TouchableOpacity onPress={this.editImage} >
                  <Image source={{uri: Profile.avatar}} style={styles.fotoPerfil}/>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <Campo 
                  name="Username" 
                  value={this.state.Username} 
                  user={this.props.user}
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
                  user={this.props.user}
                  edit={this.state.editBio} 
                  onPress={this.editBiography} 
                  onChange={this.actualiza} 
                  label="Biography:"
                  cancel={this.cancela}
                />
              </View>
                      </View>*/}
            </View>
          )
    }
}

export default Perfil