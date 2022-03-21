import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import LogoCoursifyPng from '../../assets/logo-coursify-w.png'

interface Props {
  title: string
}

export function Footer ({title}: Props) {
  return (
    <View style={styles.container} >
      <Image source={LogoCoursifyPng} style={styles.image}/>
      <Text style={styles.title} >{title}</Text>
      <TouchableOpacity
       style={styles.button}
       activeOpacity={0.7}
      ><Text style={styles.textButton} >Quero conhecer a plataforma</Text>
      </TouchableOpacity>
    </View>
  )
}