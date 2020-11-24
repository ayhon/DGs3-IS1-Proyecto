import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    contcenter: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      contracenter: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
      },
    fotoPerfil: {
      height: 100,
      width: 100,
      borderRadius: 100,
      borderColor: '#ddd56e',
      borderWidth: 1
    },
    InfoMain:{
      //flex:1,
      fontSize: 20,
      textDecorationLine: 'underline',
      marginLeft: '7%' 
    },
    Info:{
        //height: 25, 
        width: '75%',
        textAlign: 'center', 
        borderColor: '#ddd56e', 
        borderWidth: 1,
        //flex:1,
        fontSize: 15,
        marginLeft: '7%' 
    },
    InfoChange:{
      //height: 25, 
      width: '75%',
      textAlign: 'center', 
      borderColor: 'grey', 
      borderWidth: 1,
      //flex:1,
      fontSize: 15,
      marginLeft: '7%' 
  },
    edit:{
      marginLeft: '67%',
      width: '15%',
      textAlign:"center",
      borderWidth: 0,
      fontSize: 15,
      color: 'grey',
      backgroundColor: '#ddd56e',
    }
  });

  export default styles 