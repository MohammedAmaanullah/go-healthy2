import React,{Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-web";

export default class Fluidsconsumed extends Component{
    render(){
        return(
            
            <View style={styles.container}>
               <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Fluids Consumed</Text>
                    </View>
                    
            </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"skyblue"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "yellow",
        fontFamily:'arial'
        
    }
})
