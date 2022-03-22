import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons'; 

export function SeeMore () {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
    >
      <Text style={styles.title}>VER MAIS</Text>
      <Entypo 
      name="arrow-long-right"
      size={20} color="black"
      style={styles.arrow} 
      />
    </TouchableOpacity>
  )
}