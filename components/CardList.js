import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CardList({item}){
    return(
        <View style={styles.containerResult}>
             <Text>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerResult: {         
        backgroundColor:'#EBFF00',
        width: 150,
        height: 122,      
        borderRadius:10,
        marginHorizontal:5,         
        margin:10
    }, 
});
