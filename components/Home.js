import React, {  useRef } from 'react';
import {
  StyleSheet,
  ImageBackground, 
  View,
  Image, 
  Text,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import { useDispatch } from 'react-redux';

import background from '../assets/img/fundo-01.png';
import logo from '../assets/img/unnamed.png';

import Card from './Card';
import { Modalize } from 'react-native-modalize';
import CardModal from './CardModal';
import {clearDetailActions} from '../actions/DetailsActions';

export default function Home(){

const dispatch = useDispatch()

const modalizeRef = useRef(null);  

function onOpen(){
      modalizeRef.current?.open();   
}

function onExit(){
  modalizeRef.current?.close();
  dispatch(clearDetailActions())  
}


  return(
    
    <TouchableWithoutFeedback onPress={() => onExit()}>
    <View>
      <ImageBackground  source={background} style={{width: '100%', height: '100%'}}>
         
         <View style={styles.containerImage}>
            <Image  style={styles.logo} source={logo} />
            <ScrollView style={{ flexGrow : 2, Height: "auto",marginTop:100}}>                           
              <Card  onOpen={onOpen} />    
            </ScrollView>                           
         </View>         
      </ImageBackground>

      <Modalize style={{ backgroundColor:'black' }} ref={modalizeRef} snapPoint={300}>
            <CardModal/>        
      </Modalize>      
    </View>
    </TouchableWithoutFeedback>
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