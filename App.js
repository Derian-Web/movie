import React from "react";
import {SafeAreaView, Text} from "react-native";
import {} from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from 'react-native-paper';

export default function app(){
  console.log("momento xddddddddddd");
  return(
    <PaperProvider>
      <SafeAreaView>
         <Text>Hola mundo</Text>
         <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
      </SafeAreaView>
    </PaperProvider>
    
  );
}
