import React from 'react';
import { View, FlatList,ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import CardModalList from './CardModalList';


export default function CardModal(){
    const planet = useSelector(state => state.detailsPlanet)  
    return (
    <ScrollView>
        <FlatList     
          data={ planet }
          renderItem={ ({item}) => <CardModalList item={item} /> }
          keyExtractor={planet => planet.id}            
        />  
    </ScrollView>
    )
}