import React from "react";
import { ScrollView, View } from "react-native";
import { CardFlatList } from "../../components/CardFlatList";
import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import { OrderList } from "../../components/OrderLIst";
import { Title } from "../../components/Title";
import { styles } from "./styles";

export function Home () {
  return (
    <ScrollView style={styles.container}>
     <Header />
     <OrderList />
     <Title title="CURSOS ONLINE" />
     <CardFlatList isMarked/>
     <Title title="MARKETING DIGITAL"/>
     <CardFlatList />
     <Title title="TUTORIAIS" />
     <CardFlatList isMarked/>
     <Footer title="O Coursify.me é uma plataforma de ensino a distância,
      onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet. " />
    </ScrollView>
  )
}
