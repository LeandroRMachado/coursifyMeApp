import React from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { OrderList } from "../../components/OrderLIst";
import { SeeMore } from "../../components/SeeMore";
import { styles } from "./styles";

export function Home () {
  return (
    <View style={styles.container}>
     <Header />
     <OrderList />
     <SeeMore title="CURSOS ONLINE"/>
    </View>
  )
}
