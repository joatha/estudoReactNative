import React from 'react'
import {Text} from 'react-native'

import Estilo from './estilo'


export default function Comp()
{
    return <Text style={Estilo.Grande}>Com Principal</Text>
}

export function Comp1()
{
    return <Text style={Estilo.Medio}>Comp1 #01</Text>
}
export function Comp2()
{
    return<Text style={Estilo.Pequeno}>Comp2 #02</Text>
}
