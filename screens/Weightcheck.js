import React,{Component} from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

export default class WeightCheck extends Component{
    constructor(props){
        super(props);
        this.state={
            lastrecord:"",
            Weight:""
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Weight Check</Text>
                    </View>
                    <TextInput
                    placeholder="Weight(in kg)"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            lastrecord: text,
                            Weight
                        })
                    }}
                    style= {styles.inputbox}
                    />
                    <TextInput
                    placeholder="Height(in cm)"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            lastrecord: text,
                            nexttimeExercise: lastrecord+18
                        })
                    }}
                    style= {styles.inputbox}
                    />
            </View>
        )
    }
 }

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightgreen"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white",
        fontFamily:'italics'
    },
    inputbox:{
        fontWeight:'bold',
        Height: 40,
        Width: 20,
        fontSize:18
    },
})
