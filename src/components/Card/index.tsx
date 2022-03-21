import React from "react";
import { TouchableOpacity, Text, Image  } from "react-native";
import { styles } from "./style";

type Props = {
  title: string,
  subTitle: string,
  imageUrl: string,
}

export function Card ({title, subTitle, imageUrl}: Props) {
  return (
     <TouchableOpacity style={styles.container}
       activeOpacity={0.8}
     >
       <Image source ={{ uri : imageUrl }} style={styles.imageCard}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
       <Text style={styles.readMore}>Leia mais</Text>
     </TouchableOpacity>
  )
}