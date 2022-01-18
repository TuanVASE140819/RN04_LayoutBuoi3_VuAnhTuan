import React,{Fragment} from "react";
import { View, Text,StyleSheet } from "react-native";

export default class Down extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        
                    </View>
                </View>
                <View style={styles.box}>
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
        backgroundColor:'#c8c8fA',
        width:'100%',
        height:'50%',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        
    },
    box:{
        width:'50%',
        height:'50%',
        padding:20,
    },
    inner:{
        flex:1,
        backgroundColor:'#4f82c0',
        alignItems:'center',
        justifyContent:'center',
        
        borderTopRightRadius:20,
        borderTopLeftRadius:20,

        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    }
})