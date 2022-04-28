import React from "react"
import { View,Text,StyleSheet,TextInput } from "react-native"
import {Feather} from "@expo/vector-icons"

const SearchBar = (props)=> {
    return (
        <View style={Style.searchBarStyle}>
            <Feather name="search" style={Style.iconStyle}></Feather>
            <TextInput 
            style={{flex:1, fontSize:15}} 
            placeholder="Search" 
            clearButtonMode="while-editing"
            value={props.searchText}
            onChangeText={(newValue)=>{
                props.searchDidChanged(newValue)
            }}
            onEndEditing={()=>{
               props.onSearchTextEnd()
            }}
            />
        </View>
    );
}

const Style=StyleSheet.create({
    searchBarStyle:{
        backgroundColor:"lightgrey",
        alignItems:"stretch",
        flexDirection:"row",
        borderRadius:10,
        height:50,
        marginVertical:10,
        marginHorizontal:15,
    },
    iconStyle:{
        fontSize:25,
        alignSelf:"center",
        padding:10
    }
});

export default SearchBar;
