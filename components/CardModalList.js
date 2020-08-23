import React from 'react';
import { Text } from 'react-native';



export default  function CardModalList({item}){
    console.log(item)
    return (
    <Text>{item.name}</Text>
    )
}