import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { Colors } from "../../theme";

export const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: getStatusBarHeight() + 14,
  }
})