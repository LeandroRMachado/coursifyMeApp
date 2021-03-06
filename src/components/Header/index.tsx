import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import LogoPng from '../../assets/logo.png'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  arrowBack?: boolean
}

export function Header ({arrowBack=false}: Props) {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <>
    {arrowBack ? (
      <View style={styles.container} >
        <TouchableOpacity
        onPress={handleGoBack}
        activeOpacity={0.3}
        >
         <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={styles.arrow}
          />
        </TouchableOpacity>
        <Image source={LogoPng} style={styles.imageHeader}/>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.4}
        >
          <Entypo name="menu" size={40} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container} >
        <Image source={LogoPng} style={styles.imageHeader}/>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.4}
        >
          <Entypo name="menu" size={40} color="white" />
          </TouchableOpacity>
      </View>
    )}
    </>
  )
}