import React, {useState} from 'react'
import { View } from 'react-native'
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Drawer, Switch , TouchableRipple,Text} from "react-native-paper";
import usePreference from "../hooks/usePreferences";


export default function DrawerContent(props) {
    const {navigation} = props;
    const [active, setActive] = useState("home");
    const {theme, toggleTheme } = usePreference();


    const onChangeScreen = (screen) =>{
        setActive(screen);
        navigation.navigate(screen);
       console.log(screen) 
    }

    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Inicio" active={active === "home"} onPress={() =>  onChangeScreen('home')} />
                <Drawer.Item label="Peliculas Populares" active={active === "popular"} onPress={() =>  onChangeScreen('popular')} />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}
