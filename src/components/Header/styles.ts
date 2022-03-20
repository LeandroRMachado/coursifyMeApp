import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export const styles = StyleSheet.create({
  container : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
    paddingBottom: 13,
    borderBottomColor: Colors.GRAY_PRIMARY,
    borderBottomWidth: 2
  },
  imageHeader: {
    width: 169,
    height: 50,
    top: 7,
    left: 17
  },
  button: {
    backgroundColor: Colors.LIGHTGREEN,
    borderRadius: 169/2,
    marginRight: 17,  
  }
})