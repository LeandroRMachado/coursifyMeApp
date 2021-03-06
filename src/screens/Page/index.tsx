import React from "react";
import { ScrollView} from "react-native";
import { ContentPage } from "../../components/ContentPage";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { styles } from "./styles";



export function Page () {
  return (
    <ScrollView style={styles.container}>
     <Header arrowBack />
     <ContentPage
      title="Como criar uma landing page de alta conversão para o seu curso online"
      subTitle="Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar resultados.
      No mercado competitivo de hoje em dia, é justo dizer que quem tem a melhor página de venda sai na frente"
      imageUrl="https://blog.coursify.me/wp-content/uploads/2022/02/landing-page-de-alta-conversao-vendas-coursifyme.jpg"
      contentSubTitle="Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar resultados.
      No mercado competitivo de hoje em dia, é justo dizer que quem tem a melhor página de venda sai na frente"
     />
     <Footer title="O Coursify.me é uma plataforma de ensino a distância,
      onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet. " />
    </ScrollView>
  )
}