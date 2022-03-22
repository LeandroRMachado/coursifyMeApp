import React from "react";
import { TouchableOpacity, Text, Image  } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { ListDivider } from "../LIstDivider";
import { styles } from "./style";

type Props = {
  title: string,
  subTitle: string,
  imageUrl: string,
  isHighlight?: boolean,
}

type Nav = {
  navigate: (value: string) => void;
}

export function Card ({title, subTitle, imageUrl, isHighlight=false}: Props) { 

  const { navigate } = useNavigation<Nav>()

  function foo() {
    navigate("Page")
  }

  return (
    <>
    {isHighlight ? (
      <TouchableOpacity
       style={styles.container}
       onPress={foo}
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