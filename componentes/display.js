import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ColorPropType } from 'react-native';

export default props=>{
    return(
        <View style={estilos.display}>
        <Text 
            style={estilos.txtDisplayOperacao}
            numberOfLines={1}
        >
            {props.valor}
        </Text>
        <Text 
            style={estilos.txtDisplayResult}
            numberOfLines={1}
        >
            {props.result}
        </Text>

    </View>
    )
}


const estilos = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:"#444",
        width: '100%'
    },
    txtDisplayResult:{
        fontSize:50,
        color:'#fff',
    },
    txtDisplayOperacao:{
        fontSize:25,
        color:'#fff',
    }

})