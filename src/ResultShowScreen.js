import React,{useState,useEffect} from "react"
import {View,StyleSheet,Text,FlatList,Image} from "react-native"
import yelp from "./api/yelp"

const ResultShowScreen = ({navigation}) => {
    const [result,setResult]=useState(null);
    const id = navigation.getParam("id")

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    };

    useEffect(()=>{
        getResult(id)
    })

    if(!result)
    {   
        return null;
    }

    return (
        <FlatList
        keyExtractor={(item)=>{
           return item;
        }} 
        data = {result.photos}
        renderItem = {({item})=>{
            // return <Text>{item}</Text>
            return  <Image source={{uri:item}} style={{height:100,width:100}}/>
        }}
        />
    );
}

const Style = StyleSheet.create({

});

export default ResultShowScreen;