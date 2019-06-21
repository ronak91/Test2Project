import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
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
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  logosec: {
    width: Metrics.WIDTH,
    height: Metrics.WIDTH * 0.3,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logostyle: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.25,
    height: Metrics.WIDTH * 0.2
  },
  form: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.45,
    backgroundColor: "rgba(255,255,255,0)",
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center"
  },
  inputStyle: {
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8
  },
  inputmain: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow,
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.8,
    backgroundColor: "rgba(255,255,255,0.4)"
  },
  signInbtn: {
    backgroundColor: "#4cd964",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.8,
    marginTop: 35
  },
  buttongetstarted: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: Colors.snow
  },
  buttongettext: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: Colors.white,
    marginTop: 25
  },
  bottomView: {
    marginTop: 30
  },
  fbButton: {
    backgroundColor: "#3b5998",
    height: Metrics.HEIGHT * 0.07,
    width: Metrics.WIDTH * 0.8,
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  fbview: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  fbButtonText: {
    color: "#fff",
    fontSize: Fonts.moderateScale(17),
    left: 10,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignItems: "center",
    alignSelf: "center"
  },
  bottomText: {
    width: "100%",
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row"
  },

  bottomText01: {
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  bottomText02: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#969696"
  }
});
export default styles;
