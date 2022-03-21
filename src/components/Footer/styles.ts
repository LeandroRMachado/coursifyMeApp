import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

export const styles = StyleSheet.create({
  container : {
    flex: 1,
    height: 260,
    backgroundColor: Colors.GREENFOOTER,
    marginTop: 45
  },
  image: {
    marginTop: 19,
    marginHorizontal: 95
  },
  button: {
    height: 44,
    backgroundColor: Colors.ORANGE,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 28,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    textAlign: 'center',
    marginTop: 11,
    color: Colors.WHITE,
    marginHorizontal: 9
  },
  textButton: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Colors.WHITE,
    paddingHorizontal: 35
  }
})