import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Display from './componentes/display';
import Botao from './componentes/botao'

import { MaterialCommunityIcons } from '@expo/vector-icons';

let  estados = {
  valorTela:'', //variavel que vai guardar o valor que será exibido na tela
  resultado: 0, // guarda o resultado
  operado: false, //indica que o calculo foi operado
  ponto:false //se foi adiocionado um ponto ou não
}

export default function App() {

  const [valorTela, setValorTela] = useState(estados.valorTela)
  const [ValorResultado, setValorResultado] = useState(estados.resultado)

  const addDigito=(digito)=>{
    if(digito == '+' || digito == '-' || digito == '/' || digito == '*'){
      estados.ponto=false
    }
    if(digito == '.' && !estados.ponto){
      estados.ponto=true
      estados.operado = false
    }else if(digito == '.' && estados.ponto){
      return
    }
    if((digito == '+' || digito == '-' || digito == '/' || digito == '*') && estados.operado){
      estados.valorTela = estados.resultado
      estados.resultado=0
    }
    estados.valorTela = estados.valorTela+digito
    setValorTela(estados.valorTela)
    setValorResultado(estados.resultado)
    estados.operado = false
  }

  const limparTela=()=>{
    estados = {
      valorTela:'',
      resultado: 0, 
      operado: false, 
      ponto:false
    }
    setValorTela (estados.valorTela)
    setValorResultado(estados.resultado)
  }

  const operar=(operacao)=>{
    if(operacao == 'AC'){
      limparTela()
      return
    }
    if(operacao == 'limpar'){
      estados.valorTela = valorTela.substring(0,(valorTela.length-1))
      setValorTela(estados.valorTela)
      return
    }
    try{
      estados.resultado = eval(estados.valorTela)
      estados.operado = true
      setValorResultado(estados.resultado )
    }catch{
      estados.resultado = 'erro'
      estados.operado = true
      setValorResultado(estados.resultado )
    }
  }


  return (
    <SafeAreaView style={estilos.container}>
      
      <Text style={estilos.txt}><MaterialCommunityIcons name="calculator-variant" size={24} color="#fff" />Calculadora Marota</Text>
      
      <Display valor={valorTela} result={ValorResultado}></Display>
      <View style={estilos.botoes}>
        <Botao texto={'AC'} limpar aoClicar={()=>{operar('AC')}}></Botao>
        <Botao texto={'C'} aoClicar={()=>{limparTela()}}></Botao>
        <Botao texto={'%'} aoClicar={()=>{addDigito('%')}}></Botao>
        <Botao texto={'/'} operacao aoClicar={()=>{addDigito('/')}}></Botao>
        <Botao texto={7} aoClicar={()=>{addDigito('7')}}></Botao>
        <Botao texto={8} aoClicar={()=>{addDigito('8')}}></Botao>
        <Botao texto={9} aoClicar={()=>{addDigito('9')}}></Botao>
        <Botao texto={'x'} operacao aoClicar={()=>{addDigito('*')}}></Botao>
        <Botao texto={4} aoClicar={()=>{addDigito('4')}}></Botao>
        <Botao texto={5} aoClicar={()=>{addDigito('5')}}></Botao>
        <Botao texto={6} aoClicar={()=>{addDigito('6')}}></Botao>
        <Botao texto={'-'} operacao aoClicar={()=>{addDigito('-')}}></Botao>
        <Botao texto={1} aoClicar={()=>{addDigito('1')}}></Botao>
        <Botao texto={2} aoClicar={()=>{addDigito('2')}}></Botao>
        <Botao texto={3} aoClicar={()=>{addDigito('3')}}></Botao>
        <Botao texto={'+'} operacao aoClicar={()=>{addDigito('+')}}></Botao>
        <Botao texto={'.'} aoClicar={()=>{addDigito('.')}}></Botao>
        <Botao texto={0} aoClicar={()=>{addDigito('0')}}></Botao>
        <Botao  icon='delete' bs aoClicar={()=>{operar("limpar")}}></Botao>
        <Botao texto={'='} igual aoClicar={()=>{operar('=')}}></Botao>

      </View>
     
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container:
  {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'#000',

  },
  botoes:{
    flexDirection:'row',
    flexWrap:'wrap'

  },
  txt:
  {
    padding:10,
    backgroundColor:'#000',
    color:'#fff',
    fontSize: 25
  }
     
})

