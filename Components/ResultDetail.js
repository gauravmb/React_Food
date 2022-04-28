import React from "react";
import {View, Image,Text,StyleSheet} from "react-native";

const ResultDetail = ({result}) => {
    console.log(result);
    return (
        <View style={Style.container}>
            <Image style={Style.image} source={{uri:result.image_url}}></Image>
            <Text style={Style.name}>{result.name}</Text>
            <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
            <Text></Text>
        </View>

    );
}

const Style= StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        height:120,
        width:250,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontSize:16,
        fontWeight:"bold"
    }    
});

export default ResultDetail;
