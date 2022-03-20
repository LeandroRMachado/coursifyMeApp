import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Entypo } from '@expo/vector-icons'; 

type Props = {
  title: string
}

export function SeeMore ({title}: Props) {
  return (
   <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>

        <TouchableOpacity
          activeOpacity={0.7}
        >
          <Text style={styles.subTitle}>VER MAIS</Text>
        </TouchableOpacity>
        <Entypo style={styles.arrow} name="arrow-long-right" size={20} color="black" />
    </View>
  )
  
}