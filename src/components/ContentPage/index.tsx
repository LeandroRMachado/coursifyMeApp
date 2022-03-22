import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string
  imageUrl: string
  subTitle: string
  contentSubTitle: string
}

export function ContentPage ({title, imageUrl,subTitle, contentSubTitle}: Props) {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Image source ={{ uri : imageUrl }} style={styles.image}/>
      <Text style={styles.contentSubTitle}>{contentSubTitle}</Text>
    </View>
  )
}