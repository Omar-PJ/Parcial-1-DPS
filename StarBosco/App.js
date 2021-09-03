/**
* @format
* @flow strict-local 
*/ 
import React, { useState, useEffect } from 'react';
import {
   SafeAreaView,
   StyleSheet,
   View,
   Text,
   StatusBar,
} from 'react-native';
import NumericInput from 'react-native-numeric-input'

import colors from './src/utils/colors';
import FORM from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import { CHAR_LEFT_CURLY_BRACE } from 'picomatch/lib/constants';

export default function App(){ 
  
const [cantidad,setCantidad]=useState(null);
const [descuento, setDescuento]=useState(null);
const [Tamano, setTamano]=useState(null);
const [Tipo, setTipo]=useState(null);
const [total, setTotal]=useState(null);
const [errorMessage, setErrorMessage] = useState('');

useEffect(() => { 
  if (cantidad && descuento &&Tamano &&Tipo) calculate(); 
  else reset(); 
}, 
[cantidad,Tamano,Tipo, descuento,]);
const calculate = () => { reset();
  if (!cantidad) { 
    setErrorMessage('Añade la cantidad de Cafes'); } 
    else if (!descuento) { 
      setErrorMessage('Añade metodo de pago'); 
    } else if (!Tamano) { 
      setErrorMessage('Seleccióna el tamaño'); 
    }else if (!Tipo) { 
      setErrorMessage('Seleccióna el Tipo de cafe'); }
      else { 
        const fee = descuento / 100;
        const pretotal= cantidad *(Tamano + Tipo); 
        setTotal({ 
          totalFee: (fee*pretotal).toFixed(2).replace('.', ','), 
          totalPayable:(pretotal-(fee*pretotal)).toFixed(2).replace('.', ','), 
        });
      } 
    };
    const reset = () => { 
      setErrorMessage(''); 
      setTotal(null); 
    };

  return(
     <>
     <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.Header}>
          <Text style={styles.headAPP}>StartBosco APP</Text>
          <FORM
            setCantidad={setCantidad}
            setTamano={setTamano}
            setTipo={setTipo}
            setDescuento={setDescuento}
          /> 
      </SafeAreaView> 
      <Result 
      cantidad={cantidad}
      Tamano={Tamano} 
      Tipo={Tipo}
      descuento={descuento}  
      total={total} 
      errorMessage={errorMessage} 
      />
      <Footer></Footer> 
      </> 
      );
}
const styles = StyleSheet.create({
   Header:{
      backgroundColor:colors.PRIMARY_COLOR,
      height:280,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      alignItems:'center' 
    },
    headAPP:{
      fontSize:25,
      fontWeight:'bold',
      color:'#fff',
      marginTop:10,
    },
  }
)