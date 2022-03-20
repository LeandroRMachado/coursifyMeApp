import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

export const styles = StyleSheet.create({
  container : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15
  },
  content: {
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.Bold,
    color: Colors.DARKGREEN
  },
  subTitle: {
    fontSize: 17,
    fontFamily: Fonts.Regular,
    marginLeft: 65
  },
  arrow: {
    marginRight: 23
  }
})