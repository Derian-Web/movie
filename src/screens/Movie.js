import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import ModalVideo from "../components/ModalVideo";
import {map} from 'lodash'
import { getMovieByIdApi } from "../Api/movies";
import { BASE_PATH_IMG } from "../utils/constants";
import { IconButton, Modal, Text, Title } from "react-native-paper";
import { color } from "react-native-reanimated";

export default function Movie(props) {
    const { route } = props;
    const { id } = route.params;
    const [movie, setMovie] = useState(null);
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() =>{
        getMovieByIdApi(id).then((response) =>{
            setMovie(response);
        })
    }, []);
    if (!movie) return null

   return (
    <>
      <ScrollView>
        <MovieImage posterPath={movie.poster_path} />
        <MovieTrailer setShowVideo={setShowVideo} />
        <MovieTitle movie={movie} />
        <Text style={styles.overview}>{movie.overview}</Text>
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
      
    </>
   );
}

function MovieImage(props){
    const { posterPath } = props;
    return (
        <View style={styles.viewPoster}>
          <Image
            style={styles.poster}
            source={{ uri: `${BASE_PATH_IMG}/w500${posterPath}` }}
          />
        </View>
      );
}

function MovieTrailer(props){
  const { setShowVideo} = props;

  return (
    <View style={styles.viewPlay}>
      <IconButton
      icon="play"
      color="#000"
      size={30}
      style={styles.play}
      onPress={() => setShowVideo(true)}
      />
    </View>
  )
}
function MovieTitle(props) {
  const { movie } = props;

  return (
    <View style={styles.viewInfo}>
      <Title style={styles.genr}>{movie.title}</Title>
      <View style={styles.viewGenres}>
        {map(movie.genres, (genre) => (
          <Text key={genre.id} style={styles.genre}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    viewPoster:{
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    poster:{
       width: "100%",
       height: 500,
       borderBottomLeftRadius: 30,
       borderBottomRightRadius: 30
    },
    viewPlay:{
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    play:{
      backgroundColor: "#fff",
      marginTop: -40,
      marginRight: 30,
      width: 60,
      height:60,
      borderRadius: 100
    },
    viewinfo:{
      marginHorizontal: 30
    },
    viewGenres:{
      flexDirection: "row"
    },
    genre:{
      marginLeft: 20,
      color: "#8697a5"
    },
    genr:{
      marginLeft: 20,
      
    },
    overview:{
      marginHorizontal: 30,
      marginTop:20,
      textAlign: "justify",
      color: "#8697a6"
    }
})