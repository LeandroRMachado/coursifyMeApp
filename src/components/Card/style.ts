import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

export const styles = StyleSheet.create({
    container: {
    paddingLeft: 20,
    marginTop: 25,
    flexDirection: 'column',
    maxWidth: 250,
    paddingRight: 30,
    maxHeight: 410,
    marginRight: 20
  },
  readMore: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.ORANGE,
    marginBottom: 25
  },
  imageCard: {
    width: 235,
    height: 150,
    borderRadius:8,
  },
  title: {
    fontSize: 17,
    fontFamily: Fonts.Bold,
    color: Colors.DARKGREEN,
    marginTop: 15,
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: Fonts.Regular,
    color: Colors.GRAY_TERTIARY,
    marginBottom: 30,
    textAlign: 'left',
    width: 230
  }
})