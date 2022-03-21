import React from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "../Card";
import { styles } from "./styles";

export function CardFlatList () {
  return (
    <ScrollView
     horizontal
     style={styles.container}
    >
      <Card
      title='Como criar uma landing page de alta ...'
      subTitle='uma landing page de alta conversão é o que todo mundo que vende online precisa para otimizar ...'
      imageUrl='https://blog.coursify.me/wp-content/uploads/2022/02/landing-page-de-alta-conversao-vendas-coursifyme.jpg'
     />
     <Card
      title='Como criar uma landing page de alta ...'
      subTitle='uma landing page de alta conversão é o que todo mundo que vende online precisa para otimizar ...'
      imageUrl='https://blog.coursify.me/wp-content/uploads/2020/12/aplicativos-para-gravar-videos-coursifyme.jpg'
     />
     <Card
      title='Como criar uma landing page de alta ...'
      subTitle='uma landing page de alta conversão é o que todo mundo que vende online precisa para otimizar ...'
      imageUrl='https://blog.coursify.me/wp-content/uploads/2019/07/vender-nas-redes-sociais-capa-coursfiyme-1024x445.jpg'
     />
    </ScrollView>
  )
}