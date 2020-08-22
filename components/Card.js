import React, { useEffect } from 'react';
import { StyleSheet,View, ScrollView } from 'react-native';

export default function Card(){

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => console.log(data.results))
    },[])

    return(
        <View style={styles.containerList}>   
        <ScrollView style={styles.scroll}>     
            <View style={styles.containerResult}>
               
            </View>            
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
    }
});
