import React from "react";
import { Text, View } from "react-native";
import { SeeMore } from "../SeeMore/Index";
import { styles } from "./styles";

type Props = {
  title: string
}

export function Title ({title}: Props) {
  return (
   <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <SeeMore />
  </View>
  )
}