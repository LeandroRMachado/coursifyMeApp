import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../theme";

export const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 30
  },
  title: {
    fontSize: 17,
    fontFamily: Fonts.Regular,
    color: Colors.GRAY_TERTIARY
  },
  arrow: {
    marginLeft: 5
  }
})