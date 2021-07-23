import React from "react";
import {StyleSheet, Text, View, Button } from "react-native"; 

const ToDo = ({item}) =>{
    
    return(
        <View style={styles.todo}>
            <Text>
                {item}
            </Text>
           
        </View>
    )
}
const styles = StyleSheet.create({
   todo:{
       backgroundColor:"whitesmoke",
       width:200,
       marginTop:10,
       padding:5,
       borderRadius:5
   }
  });

export default ToDo;