import { Platform, StyleSheet, Dimensions } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  ImageBackground: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.3,
    zIndex: 111
  },

  header: {
    backgroundColor: Colors.transparent,
    height: 50,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: Fonts.moderateScale(25)
      }
    }),
    elevation: 0
  },

  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },

  backArrow: {
    justifyContent: "center",
    alignItems: "center",
    width: 30
  },

  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  right: {
    flex: 0.5
  },

  content: {
    backgroundColor: "transparent"
  },

  userProfileSec: {
    width: Metrics.WIDTH,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    zIndex: 1111
  },

  profile: {
    borderWidth: 3,
    borderColor: Colors.snow,
    borderRadius: Metrics.WIDTH * 0.14,
    width: Metrics.WIDTH * 0.28,
    height: Metrics.WIDTH * 0.28
  },

  form: {
    marginTop: Fonts.moderateScale(20),
    width: Metrics.WIDTH * 0.9,
    alignItems: "center"
  },

  input1: {
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  forgotlabel: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(12)
  },

  forgotlabelBg: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 15
  },

  btnSec: {
    width: Metrics.WIDTH,
    justifyContent: "center",
    backgroundColor: "#4cd964"
  },

  buttontext: {
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: Colors.snow,
    fontSize: Fonts.moderateScale(17)
  }
});

export default styles;
