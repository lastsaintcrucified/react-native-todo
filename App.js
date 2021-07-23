import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './Components/Todolist';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
});
