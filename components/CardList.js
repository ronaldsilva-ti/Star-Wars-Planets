import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView   } from 'react-native';
import { useDispatch } from 'react-redux';

import { getDetailActions } from '../actions/DetailsActions'

export default function CardList({item, onOpen }){
    const dispatch = useDispatch()
    return(     
        <View style={styles.containerResult}>            
             <Text style={styles.title}>{item.name}</Text>
             <Text style={styles.populationTitle}>POPULAÇÃO</Text>
             <Text style={styles.population}>{item.population === 'unknown' ? 'Indefenida' : item.population}</Text>
             <TouchableOpacity style={styles.appButton} onPress={() => {
                 onOpen();
                 dispatch(getDetailActions(item))
             }} >
                 <Text style={styles.appButtonTitle}>VER MAIS</Text>
             </TouchableOpacity>
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
        margin:10,
        borderWidth:5,
        borderColor:'#FFC107'
    }, 
    title:{
        color:'black',
        fontSize:22,
        fontWeight:'bold',
        textTransform:"uppercase",
        textAlign:"center",      
   },
   populationTitle:{
        marginTop:5,
        color:'black',    
        fontWeight:'bold',
        textTransform:"uppercase",
        textAlign:"center",  
   },
   population:{        
        color:'black',    
        fontWeight:'bold',
        textTransform:"uppercase",
        textAlign:"center",  
    },
    appButton:{
        elevation: 8,
        backgroundColor: '#FFC107',
        borderRadius: 5,
        padding:2,
        marginHorizontal:10,
        marginTop:10
    },
    appButtonTitle:{
        color:'white',
        textAlign:'center',
        backgroundColor:'#FFC107',        
    }
});
