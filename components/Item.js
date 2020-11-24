import styles from './Style.js'
import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
{/*<Button onPress={this.props.onPress} style={styles.edit} title={(this.props.edit)?"Done":"Edit"} />*/}

class Campo extends Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <View>
                <Text style={styles.InfoMain}>{this.props.label}</Text>
                {(this.props.edit)?(<TextInput 
                                        style={styles.InfoChange} 
                                        name={this.props.name} 
                                        onChangeText={text=> this.props.onChange(this.props.name,text)} 
                                        value={this.props.value}
                                    />):
                                    (<Text style={styles.Info}>{this.props.value}</Text>)}
                {this.props.user && <TouchableOpacity onPress={this.props.onPress} ><Text style={styles.edit}>{(this.props.edit)?"Done":"Edit"}</Text></TouchableOpacity>}
                {this.props.user && this.props.edit && <TouchableOpacity onPress={this.props.cancel} ><Text style={styles.edit}>{"Cancel"}</Text></TouchableOpacity>}
            </View>
        )
    }
}

export default Campo