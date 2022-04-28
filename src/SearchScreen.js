import React,{useState,} from "react"
import { View,Text,StyleSheet,ScrollView } from "react-native"
import SearchBar from "../Components/SearchBar"
import useResults from "./hooks/useResults";
import ResultsList from "../Components/ResultsList";


 
const SearchScreen = () => {
    const [searchText,setSearchText] = useState("");
    const [searchEnteredText,results,errorMessage] = useResults();

    const filterResultByPrice = (price) =>
    {
        return results.filter(result => {
             return result.price === price;
        })
    };

    return (
        // <Text>Search Screen</Text>
        <>
        <View style={Style.searchScreenStyle}>
            <SearchBar 
            searchText={searchText} 
            searchDidChanged={(newValue)=>{
                setSearchText(newValue)
            }}
            onSearchTextEnd = {()=>{
                searchEnteredText(searchText)
            }} 
            style={Style.searchBarStyle}
            />
            <View
            style={Style.searchResultStyle}>
                {errorMessage? <Text>{errorMessage}</Text>: null}
               {/* <Text>Search Screen {results.length}</Text> */}
               <ScrollView>
                    <ResultsList title = "Cost Effective" 
                    results = {filterResultByPrice('$')}/>
                    <ResultsList title = "Bit Pricier" 
                    results = {filterResultByPrice('$$')} />
                    <ResultsList title = "Costly 123" 
                    results = {filterResultByPrice('$$$')}/>
               </ScrollView>
            </View>
        </View>
        </>
    );
}

const Style=StyleSheet.create({
    searchBarStyle:{
        height:150,
        margin:10,
        padding:10
    },
    searchScreenStyle:{
        flexDirection:"column",
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
    searchResultStyle:{
        flex:1,
    }
});

export default SearchScreen;
