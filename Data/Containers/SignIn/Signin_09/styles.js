import { Platform, StyleSheet, Dimensions } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Themes/";

// Screen Styles

const styles = StyleSheet.create({
  backgroundImage: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    flex: 4,
    backgroundColor: "white",
    zIndex: 0.8,
    position: "absolute"
  },
  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
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
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },
  right: {
    flex: 0.5
  },
  mainLogoSec: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.25,
    justifyContent: "center",
    alignItems: "center"
  },
  mainLogo: {
    width: Metrics.WIDTH * 0.25,
    height: Metrics.WIDTH * 0.2
  },
  inputFieldSec: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.35
  },
  formStyle: {
    paddingTop: Fonts.moderateScale(10),
    width: Metrics.WIDTH * 0.84,
    alignSelf: "center",
    backgroundColor: Colors.snow
  },
  emailText: {
    paddingBottom: 10,
    marginRight: 20
  },
  textLabel: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    paddingTop: 5
  },
  inputText: {
    width: Metrics.WIDTH,
    height: 40,
    color: "#6f6f6f"
  },
  passwordText: {
    alignItems: "center",
    paddingBottom: 10,
    marginRight: 20
  },
  TouchableOpacityStyle: {
    backgroundColor: "#ffb46c",
    alignItems: "center",
    height: Metrics.WIDTH * 0.15,
    width: Metrics.WIDTH * 0.84,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25
  },
  TouchableOpacityText: {
    fontSize: Fonts.moderateScale(16),
    color: Colors.snow,
    alignItems: "baseline"
  },
  view03: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.28,
    marginBottom: 10,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },

  bottomText: {
    width: Metrics.WIDTH,
    height: 40,
    alignItems: "center",
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center"
  },

  bottomText01: {
    fontSize: Fonts.moderateScale(14),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: "center"
  },

  bottomText02: {
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#ffb46c",
    textAlign: "center"
  },

  signUpTxtBg: {
    marginTop: -(Metrics.WIDTH * 0.01),
    paddingLeft: Metrics.WIDTH * 0.01
  }
});

export default styles;
