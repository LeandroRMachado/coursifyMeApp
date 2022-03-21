import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string
  imageUrl: string
  subTitle: string
}

export function ContentPage ({title, imageUrl,subTitle}: Props) {
  return (
    <View style={styles.container} >
      <Text style={styles.title} ></Text>
      <Image source ={{ uri : imageUrl }} style={styles.image}/>
      <Text style={styles.subTitle}></Text>
    </View>
  )
}