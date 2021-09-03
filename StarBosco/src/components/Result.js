import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native'; 
export default function Result(props) { 
    const {cantidad, descuento, Tamano ,Tipo, total, errorMessage} = props;
    return ( 
    <View style={styles.content}> 
    {total && (
        <View style={styles.boxResult}> 
        <Text style={styles.title}>RESUMEN</Text> 
        <DataResult title="Cantidad solicitada:" value={`${cantidad}`} /> 
        <DataResult title="Tamaño:" value={`$ ${Tamano.toFixed(2).replace('.', ',')}`} />
        <DataResult title="Tipo de cafe:" value={`$ ${Tipo.toFixed(2).replace('.', ',')}`} />
        <DataResult title="Descuento total %:" value={`${descuento} %`} />
        <DataResult 
        title="Total a pagar:" 
        value={`$ ${total.totalPayable} `} 
        /> 
        </View> 
        )} 
        <View> 
            <Text style={styles.error}>{errorMessage}</Text> 
            </View>
        </View> 
        ); 
    } 
    
    function DataResult(props) { 
        const {title, value} = props;
        return ( 
        <View style={styles.value}> 
        <Text>{title}</Text> 
        <Text>{value}</Text> 
        </View> 
        );
    }
    const styles = StyleSheet.create({ 
        content: 
        { marginHorizontal: 40,
            marginVertical:-20,
        }, 
         boxResult: { 
             padding: 30, 
        },
             title: { 
                 fontSize: 25, 
                 textAlign: 'center', 
                 fontWeight: 'bold', 
                 marginBottom: 20, 
                    }, 
                value: { 
                    flexDirection: 'row',
                    justifyContent: 'space-between', 
                    marginBottom: 20, 
                        }, 
                error: { 
                    textAlign: 'center', 
                    color: '#f00', 
                    fontWeight: 'bold', 
                    fontSize: 20, 
        },
    });
    
