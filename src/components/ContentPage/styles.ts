import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 700
  },
  title: {
    fontSize: 21,
    color: Colors.DARKGREEN,
    fontFamily: Fonts.Bold,
    marginLeft: 26,
    marginRight: 50,
    textAlign: 'left',
    marginBottom: 25
  },
  subTitle: {
    fontSize: 16,
    color: Colors.GRAY_SECONDARY,
    fontFamily: Fonts.Regular,
    marginLeft: 24,
    marginRight: 36,
    textAlign: 'left'
  },
  image: {
    width: 366,
    height: 244,
    marginTop: 44,
    marginBottom: 31
  },
  contentSubTitle: {
    fontSize: 16,
    color: Colors.GRAY_SECONDARY,
    fontFamily: Fonts.Regular,
    marginLeft: 24,
    marginRight: 36,
    textAlign: 'left'
  }
})