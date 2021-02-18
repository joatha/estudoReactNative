import React from 'react'
import {View, StyleSheet} from 'react-native'


import Pai from './components/indireta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorios from './components/Aleatoria'
//import MinMax from './components/MinMax'
//import Primeiro, {Comp1, Comp2} from './components/multi'
//import Primeira from './components/primeiro'

export default()=>(

<View style={style.App}> 


<Pai/>
{/*<Contador inicial={100}/>*/}
{/*<Botao/>*/}
{/*<Titulo principal="Cadastro Produto"
        secundario="Tela de Cadastro do Produto" />*/}
  {/*<Aleatorios min={1} max={60}/>*/}
  {/*<MinMax min={3} max={20}/>*/}  
  {/*<Primeiro/>
  <Comp1/>
  <Comp2/>
  <Primeira/>*/}

</View>
)

const style = StyleSheet.create({
  App:{
    flexGrow:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20,

  }

})