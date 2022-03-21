import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Entypo } from '@expo/vector-icons';

export function OrderList () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORDENAR POR:</Text>

      <View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
        >
          <Text style={styles.subTitle} >A-Z</Text>
          <Entypo name="chevron-down" size={24} color="gray"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}