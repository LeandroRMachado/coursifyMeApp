import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

export const styles = StyleSheet.create({
  container : {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 18,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.Bold,
    color: Colors.DARKGREEN,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: Fonts.Regular,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    paddingLeft: 25
  }
})