import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CardModalList from './CardModalList';


export default function CardModal(){
    const planet = useSelector(state => state.detailsPlanet)  
    return (
    <View>
        <FlatList     
          data={ planet }
          renderItem={ ({item}) => <CardModalList item={item} /> }
          keyExtractor={planet => planet.id}            
        />  
    </View>
    )
}