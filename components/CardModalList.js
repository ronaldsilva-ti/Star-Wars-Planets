import React,{useState, useEffect} from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';


export default  function CardModalList({item}){

  const [residentesUrl,setResidentesUrl ] = useState([])

  const residents = item.residents;

  useEffect(() => {
    (async () => {
      const arrayOfPromises = residents.map((api) => fetch(api).then(apiResponse => apiResponse.json()).then(data => data).catch(console.log));
      const responses = await Promise.all(arrayOfPromises);
      setResidentesUrl(responses);
    })();
  }, []);



//  useEffect(() => {
//   console.log("AQUI",residentesUrl)
//  },[residentesUrl])   

    return (
      <View style={styles.containerModalList}>
        <Text style={styles.textItem}>Planeta: {item.name}</Text>
        <Text style={styles.textItem}>Clima: {item.climate}</Text>
        <Text style={styles.textItem}>Terra: {item.terrain}</Text>
        <Text style={styles.textItem}>População: {item.population} habitantes</Text>  
        <Text style={styles.textItem}>Massa: {item.diameter}</Text> 
        <Text style={styles.textItem}>Residentes:</Text>  

        <FlatList
          data={residentesUrl}
          renderItem={({item}) => (
            <View style={styles.containerResidents}>
              <Text style={styles.residents}>Nome: {item.name}</Text>
              <Text style={styles.residents}>Massa: {item.mass  === 'unknown' ? 'Indefenida' : item.mass}</Text>
            </View>
          )}
        
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
  },
  containerResidents:{     
    borderWidth:2,
    margin:2,
    marginTop:10
  },  
  residents:{
    textTransform:'uppercase',
    color:'white',
    textAlign:'center',   
    margin:5
  }
})