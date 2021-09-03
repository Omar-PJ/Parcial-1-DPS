import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; 
import colors from '../utils/colors';
import NumericInput from 'react-native-numeric-input'
export default function Form(props) { 
    const {setTamano,setTipo,setCantidad, setDescuento} = props; 
    
return ( 
    <View style={styles.viewForm}> 

    <RNPickerSelect 
    style={picketSelectStyles}
    onValueChange={(value) => setTamano(value)}
    placeholder={{ label: 'Seleccione tamaños de cafe...',
    value: null,
    }}
     items={[ 
         {label: 'Short 8 onz', value: 1},
         {label: 'Tall 12 onz ', value: 1.50}, 
         {label: 'Grande 16 onz', value: 2}, 
        ]}
         />

    <RNPickerSelect 
    style={picketSelectStyles}
    onValueChange={(value) => setTipo(value)}
    placeholder={{ label: 'Seleccione Tipos de cafe',
    value: null,
    }}
     items={[ 
         {label: 'Mocha', value: 2},
         {label: 'Te chai', value: 2.50}, 
         {label: 'Americano', value: 1.50}, 
         {label: 'Frapper', value: 3}, 
        ]}
         />


    <View style={styles.viewInputs}> 
    <RNPickerSelect 
    style={picketSelectStyles2}
    onValueChange={(value) => setDescuento(value)}
    placeholder={{ label: 'Tipo de pago',
    value: null,
    }}
     items={[ 
         {label: 'Efectivo', value: 15},
         {label: 'Tarjeta de credito', value: 5}, 
        ]}
         />
        <NumericInput
        
        style={picketSelectStyles2}
        totalHeight={54} 
          onChange={(value) => setCantidad(value)} 
          minValue={0}
          maxValue={9999}
          step={1}
          rightButtonBackgroundColor='#FFFFFF'
          leftButtonBackgroundColor='#ffffff'
          iconStyle={{ fontSize: 15, color: 'black' }}
          inputStyle={{ fontSize: 25, color: '#FFFFFF' }}
        />
    </View> 
    </View> 
    ); 
}

const styles = StyleSheet.create({ 
    viewForm: { 
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        paddingHorizontal: 50, 
        backgroundColor: colors.PRIMARY_COLOR_DARK, 
        borderRadius: 30, 
        height: 240, 
        justifyContent: 'center', 
    }, 
    viewInputs: { 
        justifyContent:'space-around',
        flexDirection: 'row',    
        
    }, 
    input: {
        margin:10, 
        backgroundColor: '#fff', 
        borderColor: colors.PRIMARY_COLOR, 
        width: '30%', 
        color: '#000', 
        paddingHorizontal: 20, 
        borderWidth: 0.5,
        paddingHorizontal: 8, 
        paddingVertical: 8,
        textAlign:'center',  
    },  
});
const picketSelectStyles = StyleSheet.create({ 
    inputIOS: { 
        fontSize: 16,
        paddingVertical: 12, 
        paddingHorizontal: 10, 
        borderWidth: 1, 
        borderColor: 'grey', 
        borderRadius: 4, 
        color: 'black', 
        paddingRight: 30, 
        backgroundColor: '#fff', 
        marginLeft: -5, 
        marginRight: -5, 
    }, 
    inputAndroid: { 
        fontSize: 16, 
        paddingHorizontal: 10, 
        paddingVertical: 8, 
        borderWidth: 0.5, 
        borderColor: 'grey', 
        borderRadius: 8, 
        color: 'black', 
        paddingRight: 30, 
        backgroundColor: '#fff',
        margin:8, 
    }, 
});
const picketSelectStyles2 = StyleSheet.create({ 
    inputIOS: { 
        fontSize: 16,
        paddingVertical: 12, 
        paddingHorizontal: 10, 
        borderWidth: 1, 
        borderColor: 'grey', 
        borderRadius: 4, 
        color: 'black', 
        paddingRight: 30, 
        backgroundColor: '#fff', 
        marginLeft: -5, 
        marginRight: -5, 
    }, 
    inputAndroid: { 
        width:180,
        fontSize: 16, 
        paddingHorizontal: 8, 
        paddingVertical: 8, 
        borderWidth: 0, 
        borderColor: 'grey', 
        borderRadius: 8, 
        color: 'black', 
        paddingRight: 30, 
        backgroundColor: '#fff',
    }, 
});