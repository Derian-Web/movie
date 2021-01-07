import React, { useState, useEffect} from "react";
import {View, Text} from "react-native";
import {getNewsMoviesApi} from "../Api/movies"


export default function Home(){
    const [newMovies, setNewMovies] = useState(null);

    useEffect( () => {
      getNewsMoviesApi().then((response) =>{
          setNewMovies(response.results)
      });
    }, [])

   return(
    <View>
        <Text>Estamos en Home</Text>
    </View>
   ) 
}