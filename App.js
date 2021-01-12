import React, {useMemo, useState, useEffect} from "react";
import { SatusBar, StatusBar, SafeAreaView, Text, StyleSheet, View, Button } from "react-native"
import { Provider as PaperProvider,  DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper } from "react-native-paper";
import {NavigationContainer, DarkTheme as DarkThemeNavigation, DefaultTheme as DefaultThemeNavigation} from "@react-navigation/native";
import Navigation from './src/Navigation/Navigation';
import Auth from "./src/components/Auth"
import firebase from "./src/utils/firebase";
import 'firebase/auth';
import PreferencesContext from './src/context/PreferencesContext';
import Home from "./src/screens/Home"

export default function app(){
 

  // Dark Mod
  const [theme, setTheme] = useState("dark");

  DefaultThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.accent = '#1ae1f2';

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = "#15212b";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "ligth": "dark");
  };

const preference = useMemo(
  () => ({
    toggleTheme,
    theme,
  }),
  [theme],
 );
 const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) =>{
      setUser(response);
    })
  }, []) ;

  if(user === undefined) return null;
  return(
    <PreferencesContext.Provider value={preference}>
        <PaperProvider theme={theme === 'dark' ? DarkThemePaper :  DefaultThemePaper}>
        <StatusBar barStyle={theme === "dark" ? "ligth-content": "dark-content"}></StatusBar>
          <NavigationContainer theme={theme === "dark" ? DarkThemeNavigation : DefaultThemeNavigation }>
          <SafeAreaView style={styles.background}>
          {user ? <Navigation />: <Auth />}
          {/* // <Navigation ></Navigation> */}
        </SafeAreaView>
           
           
            
          </NavigationContainer> 
        </PaperProvider>
        {/* <StatusBar />
        <SafeAreaView style={styles.background}>
          {user ? <Logout />: <Auth />}
        </SafeAreaView> */}
    </PreferencesContext.Provider>
      
  );
}



const styles = StyleSheet.create({
  background:{
    backgroundColor: "#15212b",
    height: "100%"
  }
})