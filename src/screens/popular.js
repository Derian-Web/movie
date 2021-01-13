import React, {useState, useEffect} from "react";
import { StyleSheet,  View, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import {Text,Title } from "react-native-paper";
import { map }  from "lodash";
import {getPopularMoviesApi } from '../Api/movies';
import {BASE_PATH_IMG} from "../utils/constants";
import  noImage from "../assets/jpg/default-imgage.png"


export default function Popular(props){
    const { navigation } = props;
    const [movies, setMovies] = useState(null)

   useEffect(() =>{
    getPopularMoviesApi(1).then(response =>{
        setMovies(response.results);
    })
   },[]);

   return(
      <ScrollView>
        {map(movies, (movie, index)=>(
        <Movie key={index} movie={movie} navigation={ navigation }/>
        ))} 
      </ScrollView>
   );
}

function Movie(props) {
    const {movie, navigation} = props;
    const {id, poster_path, title,  } = movie;

    const goMovie = () =>{
        navigation.navigate("movie",{ id })
    }

    return(
        <TouchableWithoutFeedback onPress={goMovie}>
             <View style={styles.movie}>
            <View style={styles.left}>
                <Image
                  style={styles.image}
                  source={
                    poster_path
                      ? { uri: `${BASE_PATH_IMG}/w500${poster_path}` }
                      : noImage
                  }
                />
            </View>
            <View>
              <Title>{title}</Title>
              <Text></Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
       
    )
}

const styles = StyleSheet.create({
    movie:{
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"

    },

    left:{
        marginRight: 20,
    },
    image: {
        width: 100,
        height: 150
    }
})