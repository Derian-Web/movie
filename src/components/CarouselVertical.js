import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions, TouchableWithoutFeedback, Text} from "react-native";
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get("window")
const ITEM_width = Math.round(width * 0.7)

export default function CarouselVertical(props){
    const { data } = props;

    return (
        <Carousel
            layout={"default"}
            data={data}
            renderItem={(item) => <RenderItem data={item} />}
            sliderWidth={width}
            itemWidth={ITEM_width}
        />
    )
}

function RenderItem(props){
    const {} = props;

    return(
        <View>
            <Text>Pelicula</Text>
        </View>
    )
}