import { Platform, StyleSheet, Dimensions } from "react-native";

// Screen Styles
const { width, height } = Dimensions.get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: Metrics.HEIGHT * 0.05,
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05
  },

  left: {
    flex: 0.5
  },

  body: {
    flex: 3,
    alignSelf: "center"
  },

  right: {
    flex: 0.5
  },

  title: {
    fontFamily: Fonts.type.SFUIDisplaySemibold,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "white"
  },
  profileImage: {
    width: Metrics.HEIGHT * 0.15,
    height: Metrics.HEIGHT * 0.15,
    borderRadius: Metrics.HEIGHT * 0.075,
    borderColor: "white",
    borderWidth: 3,
    alignSelf: "center",
    marginBottom: Metrics.HEIGHT * 0.065,
    marginTop: Metrics.HEIGHT * 0.05
  },

  backArrow: {
    width: 30,
    alignItems: "center"
  },

  ImageBackground: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  content: {
    alignSelf: "center"
  },

  form: {
    width: Metrics.WIDTH,
    alignItems: "center",
    backgroundColor: "#ebebeb"
  },

  input1: {
    color: "#828282",
    marginLeft: 30,
    fontSize: 14,
    fontFamily: Fonts.type.SFUIDisplayRegular
  },

  buttonlogin: {
    backgroundColor: "#4cd964",
    alignSelf: "center",
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 40,
    marginTop: 40,
    width: Metrics.WIDTH * 0.8
  },

  buttonsignup: {
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "transparent",
    alignSelf: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.8
  },

  loginbutton: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    color: "white",
    alignSelf: "center"
  },

  signupbutton: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    color: "white",
    alignSelf: "center"
  },

  itemstyle: { width: Metrics.WIDTH }
});

export default styles;
