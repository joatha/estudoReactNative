import React, {Fragment} from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default props =>(

       <Fragment>
            <Text style={Estilo.Grande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
   
   )