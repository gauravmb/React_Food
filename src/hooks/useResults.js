import React,{useState,useEffect} from "react";
import yelp from "../api/yelp"

export default ()=>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");
    const [showDefaultResult,setShowDefaultResult] = useState(true)

    useEffect(function()
    {
        if(showDefaultResult === true)
        {
            searchAPICall("brown");
        }
    },[showDefaultResult]);


    function searchEnteredText(searchText)
    {
        console.log("searchText",searchText)
        if(searchText)
        {
            setErrorMessage("")
            searchAPICall(searchText)
        }
        else
        {
            setShowDefaultResult(true)
        }
    }

    async function searchAPICall(searchText)
    {
        try{
        const response = await yelp.get("/search",{
            params:{
                limit:50,
                term:searchText,
                location:"san jose"
            }
        });
        setResults(response.data.businesses)
        }
        catch(err)
        {
            setErrorMessage("Something went wrong ..!!!")
            console.log(err);
        }
    }

    return [searchEnteredText,results,errorMessage];

}