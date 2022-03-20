import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

export const styles = StyleSheet.create({
  container : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 47,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 17,
    fontFamily: Fonts.Regular
  },
  subTitle: {
    fontSize: 17,
    fontFamily: Fonts.Regular
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY_PRIMARY,
    width: 120,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    paddingLeft: 10
  }
})