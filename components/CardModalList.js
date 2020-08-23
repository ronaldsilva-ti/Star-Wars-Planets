import React,{useState, useEffect} from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';


export default  function CardModalList({item}){

  
  

  const [residentesUrl,setResidentesUrl ] = useState([])

  const residents = item.residents;

  // useEffect(() => {
  //   (async () => {
  //     const arrayOfPromises = residents.map(async (api) => await fetch(api));
  //     const responses = await Promise.all(arrayOfPromises);
  //     setResidentesUrl(responses);
  //   })();
  // }, [])

  useEffect(() => {
    (async () => {
      const arrayOfPromises = residents.map((api) => fetch(api).then(apiResponse => apiResponse.json()).then(data => data).catch(console.log));
      const responses = await Promise.all(arrayOfPromises);
      setResidentesUrl(responses);
    })();
  }, []);



 useEffect(() => {
  console.log("AQUI",residentesUrl)
 },[residentesUrl])





 
   

    return (
      <View style={styles.containerModalList}>
        <Text style={styles.textItem}>Nome: {item.name}</Text>
        <Text style={styles.textItem}>Clima: {item.climate}</Text>
        <Text style={styles.textItem}>Terra: {item.terrain}</Text>
        <Text style={styles.textItem}>População: {item.population} habitantes</Text>  
        <Text style={styles.textItem}>Massa: {item.diameter}</Text>  
        <FlatList
          data={residentesUrl}
          renderItem={({item}) => <Text>{item.name}</Text>}
        
        />
      </View>
    )
}

const styles = StyleSheet.create({
  containerModalList:{
    display:"flex",
    alignItems:"center",
    fontSize:50,   
  },
  textItem:{
    fontSize:20,
    color:'#EBFF00',
    marginTop:10,
    textTransform:'uppercase'
  }
})