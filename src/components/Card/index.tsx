import React from "react";
import { TouchableOpacity, Text, Image  } from "react-native";

import { ListDivider } from "../LIstDivider";
import { styles } from "./style";

type Props = {
  title: string,
  subTitle: string,
  imageUrl: string,
  isHighlight?: boolean,
}

export function Card ({title, subTitle, imageUrl, isHighlight=false}: Props) { 

  return (
    <>
    {isHighlight ? (
      <TouchableOpacity
       style={styles.container}
       activeOpacity={0.8}
      >
       <Image source ={{ uri : imageUrl }} style={styles.imageCard}/>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.subTitle}>{subTitle}</Text>
       <Text style={styles.readMore}>Leia mais</Text>
       <ListDivider />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
       style={styles.container}
       activeOpacity={0.8}
       >
       <Image source ={{ uri : imageUrl }} style={styles.imageCard}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
       <Text style={styles.readMore}>Leia mais</Text>
       <ListDivider />
      </TouchableOpacity>
    )}
    </>
  )
}