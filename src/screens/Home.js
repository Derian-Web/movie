import React, { useState, useEffect} from "react";
import {StyleSheet, View, ScrollView, Text} from "react-native";
import { Title } from 'react-native-paper';
import CarouselVertical from '../components/CarouselVertical' 
import {getNewsMoviesApi} from "../Api/movies"


export default function Home(){
    const [newMovies, setNewMovies] = useState(null);

    useEffect( () => {
      getNewsMoviesApi().then((response) =>{
          setNewMovies(response.results)
      });
    }, [])

   return(
    <ScrollView showsVerticalScrollIndicator={false}>
       {newMovies && (
           <View style={styles.news}>
               <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
               <CarouselVertical data={newMovies} />
           </View>
       )} 
    </ScrollView>
   ) 
}

const styles = StyleSheet.create({
    news: {
        marginVertical: 10,
    },
    newsTitle:{
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: "bold",
        fontSize: 22

    }
})