import React from "react";
import { ScrollView, View } from "react-native";
import { Card } from "../Card";
import { styles } from "./styles";

type Props = {
  isMarked?: boolean
}

export function CardFlatList ({isMarked = false}: Props) {
  return (
    <View>
    {isMarked ? (
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
      >
        <Card
        title='Como criar uma landing page de alta ...'
        subTitle='uma landing page de alta conversão é o que todo mundo que vende online precisa para otimizar ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2022/02/landing-page-de-alta-conversao-vendas-coursifyme.jpg'
        isHighlight
      />
      <Card
        title='12 melhores aplicativos para gravar vídeo'
        subTitle='Há dezenas de aplicativos para gravar vídeos que permitem que você faça de tudo com a sua gravação. As opções ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2020/12/aplicativos-para-gravar-videos-coursifyme.jpg'
      />
      <Card
        title='Como criar uma landing page de alta ...'
        subTitle='uma landing page de alta conversão é o que todo mundo que vende online precisa para otimizar ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2022/02/landing-page-de-alta-conversao-vendas-coursifyme.jpg'
      />
      <Card
        title='12 melhores aplicativos para gravar vídeo'
        subTitle='Há dezenas de aplicativos para gravar vídeos que permitem que você faça de tudo com a sua gravação. As opções ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2020/12/aplicativos-para-gravar-videos-coursifyme.jpg'
      />
      </ScrollView>
    ) : (
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
      >
        <Card
        title='Como criar uma landing page de alta ...'
        subTitle='uma landing page de alta conversão é o que todo mundo que vende online precisa para otimizar ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2019/07/vender-nas-redes-sociais-capa-coursfiyme-1024x445.jpg'
      />
      <Card
        title='12 melhores aplicativos para gravar vídeo'
        subTitle='Há dezenas de aplicativos para gravar vídeos que permitem que você faça de tudo com a sua gravação. As opções ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2022/03/pre-lancamento-de-cursos-online-coursfiyme.jpg'
      />
      <Card
        title='Como criar uma landing page de alta ...'
        subTitle='uma landing page de alta conversão é o que todo mundo que vende online precisa para otimizar ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2022/02/landing-page-de-alta-conversao-vendas-coursifyme.jpg'
      />
      <Card
        title='12 melhores aplicativos para gravar vídeo'
        subTitle='Há dezenas de aplicativos para gravar vídeos que permitem que você faça de tudo com a sua gravação. As opções ...'
        imageUrl='https://blog.coursify.me/wp-content/uploads/2020/12/aplicativos-para-gravar-videos-coursifyme.jpg'
      />
      </ScrollView>
    )}
    </View>
  )
}