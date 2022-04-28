import React from "react"
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from "react-native"
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({title,results,navigation})=>{
    return (
        <View style={Style.container}>
            <Text style={Style.title}>{title}</Text>
            <FlatList
            horizontal = {true}
            data = {results}
            keyExtractor={function(result){
             return result.id
            }}
            renderItem={function({item}){
                return (
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("ResultShow",{id:item.id})
                    }}>
                        <ResultDetail result = {item}></ResultDetail>
                    </TouchableOpacity>
                
                );
            }}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const Style = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:18,
        marginHorizontal:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultsList);
