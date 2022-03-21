import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import LogoPng from '../../assets/logo.png'
import { Entypo } from '@expo/vector-icons';

export function Header () {
  return (
    <View style={styles.container} >
     <Image source={LogoPng} style={styles.imageHeader}/>

     <TouchableOpacity
       style={styles.button}
       activeOpacity={0.4}
     >
       <Entypo name="menu" size={40} color="white" />
      </TouchableOpacity>
    </View>
  )
}