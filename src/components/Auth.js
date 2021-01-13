import React, { useState} from "react";
import {StyleSheet,View, Text, Image} from "react-native";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Title } from 'react-native-paper';


export default function Auth(){
    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () =>{
        setIsLogin(!isLogin);
    }

    return(
        <View style={styles.view}>
             <Title style={styles.newsTitle}>THE MOVIE BD</Title>
            <Image style={styles.logo} source={require("../assets/jpg/movie.jpg")}/>
            {isLogin?(
                <LoginForm changeForm={changeForm}/>
            ): (
                <RegisterForm  changeForm={changeForm}/>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: "center" , 
    },
    logo:{
        width: "80%",
        height: 240,
        marginTop:50,
        marginBottom: 20

    },
    newsTitle:{
        marginTop: 30,
        marginHorizontal: 20,
        fontWeight: "bold",
        fontSize: 22

    },
})