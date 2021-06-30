import React from 'react';
import { StyleSheet, Text, TouchableHighlight,Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons'

export default props=>{

    const estilosBotoes = [estilos.btn]
    if(props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(estilos.btnOperacao)
    }
    if(props.limpar){
        estilosBotoes.push(estilos.btnLimpar)
    }
    if(props.bs){
        estilosBotoes.push(estilos.btnBs)
    }
    return(
       <TouchableHighlight
        onPress={props.aoClicar}
       >
            <Text style={estilosBotoes}>
                {props.texto} <Feather name={props.icone} size={24} color="black" />
                <Feather name={props.icon} size={24} color="#fff" />
            </Text>
            
       </TouchableHighlight>
    )
}


const estilos = StyleSheet.create({
    btn:
    {
      fontSize:30, 
      height:Dimensions.get('window').width/4,
      width: Dimensions.get('window').width/4,
      padding:20,
      backgroundColor:'#000',
      color:'#fff',
      borderWidth:1,
      borderColor:'#777',
      textAlign:'center'
    },
    btnOperacao:
    {
        color:'#0f0',

    },
    btnIgual:
    {
        color:'#f00',

    },
    btnLimpar:
    {
        color:'#ff0'
    },
    btnBs:
    {
        color:'#00f'

    },
})