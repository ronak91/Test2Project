import { Platform, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  screenBg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "black"
  },
  backArrow: {
    marginTop: 10,
    width: 30,
    alignItems: "center"
  },
  container: {
    alignItems: "center"
  },
  header: {
    backgroundColor: "transparent",
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 10
      }
    }),
    elevation: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },

  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "transparent"
  },

  right: {
    flex: 0.5
  },

  profileStyle: {
    width: Metrics.HEIGHT * 0.16,
    height: Metrics.HEIGHT * 0.16,
    borderRadius: Metrics.HEIGHT * 0.08,
    alignSelf: "center",
    borderWidth: 3.5,
    borderColor: "white",
    resizeMode: "cover",
    marginTop: Metrics.HEIGHT * 0.05
  },
  textemailStyle: {
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: "#fff",
    textAlign: "center",
    marginTop: Metrics.HEIGHT * 0.02
  },

  backicon: {
    alignSelf: "flex-start",
    width: 13,
    height: 22,
    marginLeft: 10,
    marginTop: 10
  },
  borderWidth: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(255,255,255,0.5)",
    marginTop: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.85
  },
  lbl: {
    color: "#fff",
    fontSize: 14,
    fontFamily: Fonts.type.SFUIDisplayRegular,
    textAlign: "center"
  },
  lightTextStyle: {
    fontFamily: Fonts.type.SFUIDisplayRegular,
    textAlign: "center",
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    marginTop: Metrics.HEIGHT * 0.065,
    width: Metrics.WIDTH * 0.85
  },
  textButtonStyle: {
    fontFamily: Fonts.type.bariol,
    color: "#fff",
    textAlign: "center",
    marginTop: Metrics.HEIGHT * 0.03
  },
  buttonStyle: {
    marginTop: Metrics.HEIGHT * 0.06,
    height: Metrics.HEIGHT * 0.07,
    width: Metrics.WIDTH * 0.88,
    borderRadius: 40,
    backgroundColor: "#4cd964",
    elevation: 5, // android shadow
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    },
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    fontFamily: Fonts.type.SFUIDisplaySemibold,
    color: "white",
    fontSize: 14
  },
  footerSec: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: Metrics.HEIGHT * 0.07,
    marginTop: Metrics.HEIGHT * 0.07
  },
  pageContent: {
    justifyContent: "center",
    alignItems: "center"
  },
  textInputStyle: {
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: "white",
    textAlign: "center",
    fontSize: 14
  }
});
export default styles;
