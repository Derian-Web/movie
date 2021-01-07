import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './src/Navigation/Navigation';

export default function app(){
  return(
    <PaperProvider>
      <NavigationContainer>
      <Navigation />
      </NavigationContainer> 
    </PaperProvider>
    
  );
}
