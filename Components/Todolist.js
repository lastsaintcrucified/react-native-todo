import React,{useState} from "react";
import { StyleSheet,View,Text, TouchableOpacity,ScrollView, TextInput } from "react-native"; 
import ToDo from "./ToDo";

const ToDoList = () =>{
    const [title,setTitle] = useState("To do list");
    const [text,setText] = useState("");
    const [list,setList] = useState(["Hello there!"]);

    const handleAdd=()=>{
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText("");
    }
    const handleDelete = () => {
        const updatedList = list;
        updatedList.pop();
        console.log(updatedList)
        setList(updatedList)
    }
    
    return(
        <View style={styles.list}>
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
            <View style={styles.scrollWrapper}>
                <ScrollView style={styles.scroll} contentContainerStyle={styles.scrCon}>
                {list.map((item,index)=><ToDo key={index} item={item} index={index}/>)} 
                </ScrollView>
            </View>
               
            <View >
                <TextInput
                    value={text}
                    onChangeText={(text)=>setText(text)}
                    style={styles.inp}
                />
                <TouchableOpacity
                    style={styles.btn}
                onPress={handleAdd}    
                 >
                    <Text style={ styles.btnTxt}> Add item </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                onPress={handleDelete}    
                 >
                    <Text style={ styles.btnTxt1}> Delete item </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
   list:{
       flex:1,
       alignItems:"center",
       justifyContent:"center"
    },
    inp: {
        borderColor: "grey",
        borderWidth: 1,
        width: 200,
        marginTop:10
    },
    btn: {
        marginTop: 10,
        alignItems: "center"
    },
    btnTxt:{
        color:"blue",
        fontWeight:"bold"
    },
    btnTxt1:{
        color:"red",
        fontWeight:"bold"
    },
    scrollWrapper: {
        height: 100,
       
    },
    scroll: {
        flex: 1,
        
    },
    scrCon: {
        flexGrow: 1,
        justifyContent: "center",
        
    }
  });

export default ToDoList;