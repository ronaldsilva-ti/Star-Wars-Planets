import React, { useState, useEffect } from 'react';
import { StyleSheet,View, ScrollView, FlatList } from 'react-native';
import CardList from './CardList';

export default function Card({onOpen}){

    const [ planets, setPlanets ] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            data.id = Math.random()
            setPlanets(data.results)
        })
    },[])    

    return(
        <View style={styles.containerList}>               
        <ScrollView style={styles.scroll}>     
                <FlatList 
                    style={ styles.list }
                    data={ planets }
                    renderItem={ ({item}) => <CardList item={item} onOpen={onOpen}/> }
                    keyExtractor={planets => planets.id}            
                />     
        </ScrollView> 
    </View>
    )
}

const styles = StyleSheet.create({
    containerList:{
        display:"flex",
        justifyContent:"center",
        alignContent:"center", 
        width: 350,
        height: 614,
        borderWidth:1,
        borderColor:'#FFC107'       
    },
    containerResult: {         
        backgroundColor:'#EBFF00',
        width: 150,
        height: 122,      
        borderRadius:10,
        marginHorizontal:5,         
        margin:10
    },
    scroll:{        
        marginTop:100,
        alignContent:"center",
        marginHorizontal:90,
    },
    list:{
        color:'white'
    },
    title:{
        color:'white',
    }
});