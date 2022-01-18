import React,{Fragment} from "react";
import { View, Text,StyleSheet } from "react-native";

export default class Up extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                    </View>
                </View>
                <View style={[styles.box]}>
                    <View style={styles.inner}>                   
                    </View>
                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'50%',
        backgroundColor:'#A1c99A',
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:10,
        
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    box:{
        // flex:1,
        width:'100%',
        height:'40%',
        padding:20,
        marginTop:30
    },
    inner:{
        flex:1,
        backgroundColor:'#ffffc2',
        alignItems:'center',
        justifyContent:'center',

        borderTopRightRadius:20,
        borderTopLeftRadius:20,

        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    }
})