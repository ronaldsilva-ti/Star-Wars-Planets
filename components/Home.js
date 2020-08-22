import React from 'react';
import {
  StyleSheet,
  ImageBackground, 
  View,
  Image, 
  Text 
} from 'react-native';

import background from '../assets/img/fundo-01.png';
import logo from '../assets/img/unnamed.png';

import Card from './Card';

export default function Home(){
  return(
    <View>
      <ImageBackground  source={background} style={{width: '100%', height: '100%'}}>
         <View style={styles.containerImage}>
            <Image  style={styles.logo} source={logo} />                         
            <Card/>                        
         </View>
      </ImageBackground>   
    </View>
  )
};


const styles = StyleSheet.create({
    containerImage:{
        display:"flex",
        alignItems:"center",
        marginTop:35,        
    },  
    logo:{
        position: "absolute",
        width: 150,
        height: 90, 
    },
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

