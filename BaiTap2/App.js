import React,{Fragment} from "react";
import { View, Text,StyleSheet } from "react-native";
import Down from "./src/Component/Down";
import Up from "./src/Component/Up";

export default class App extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
              <Up/>
              <Down/>
            </View>
        );
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
    }
});