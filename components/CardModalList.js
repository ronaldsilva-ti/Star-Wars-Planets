import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';



export default  function CardModalList({item}){
    return (
      <View style={styles.containerModalList}>
        <Text style={styles.textItem}>Nome: {item.name}</Text>
        <Text style={styles.textItem}>Clima: {item.climate}</Text>
        <Text style={styles.textItem}>Terra: {item.terrain}</Text>
        <Text style={styles.textItem}>População: {item.population} habitantes</Text>  
        <Text style={styles.textItem}>Massa: {item.diameter}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  containerModalList:{
    display:"flex",
    alignItems:"center",
    fontSize:50
  },
  textItem:{
    fontSize:20,
    color:'#EBFF00',
    marginTop:10,
    textTransform:'uppercase'
  }
})