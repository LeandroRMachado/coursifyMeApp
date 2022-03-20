import React from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { SeeMore } from "../../components/SeeMore";
import { StatusBarHeader } from "../../components/StatusBarHeader";
import { styles } from "./styles";

export function Home () {
  return (
    <View style={styles.container}>
     <Header />
     <StatusBarHeader />
     <SeeMore title="CURSOS ONLINE"/>
    </View>
  )
}
