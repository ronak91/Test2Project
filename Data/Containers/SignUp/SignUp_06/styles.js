import { Platform, StyleSheet, Dimensions, I18nManager } from "react-native";

import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  screenBg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
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
  backArrow: {
    width: 30,
    alignItems: "center"
  },
  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "transparent"
  },

  right: {
    flex: 0.5
  },
  container: {
    alignItems: "center"
  },
  logostyle: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.4,
    height: Metrics.WIDTH * 0.3
  },
  headertext: {
    fontFamily: Fonts.type.PlayfairDisplayBold,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    width: Metrics.WIDTH * 0.9,
    color: "white",
    marginTop: Metrics.HEIGHT * 0.08
  },
  desctext: {
    fontFamily: Fonts.type.bariol,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    width: Metrics.WIDTH * 0.65,
    color: "white",
    marginTop: Metrics.HEIGHT * 0.03
  },
  form: {
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.05
  },
  buttonlogin: {
    backgroundColor: Colors.loginBlue,
    alignSelf: "center",
    borderRadius: 40,
    width: Metrics.WIDTH * 0.4,
    height: Metrics.HEIGHT * 0.1,
    justifyContent: "center"
  },
  loginbutton: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    color: "white",
    textAlign: "center"
  },

  buttonsignup: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "transparent",
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.4,
    height: Metrics.HEIGHT * 0.1,
    borderRadius: 40,
    justifyContent: "center"
  },

  signupbutton: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    color: "white",
    textAlign: "center"
  },

  View2: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    alignItems: "center",
    justifyContent: "center"
  },

  view3: {
    borderRadius: 5,
    width: Metrics.WIDTH * 0.95,
    height: Metrics.HEIGHT * 0.7,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center"
  },

  view4: {
    backgroundColor: "transparent",
    width: Metrics.WIDTH * 0.85,
    top: 0,

    ...(I18nManager.isRTL
      ? {
          alignItems: "flex-start"
        }
      : {
          alignItems: "flex-end"
        }),
    alignSelf: "center"
  },

  dialogtitle: {
    color: Colors.darktext,
    fontSize: 25,
    fontFamily: Fonts.type.SFUIDisplayRegular,
    justifyContent: "center",
    alignSelf: "center"
  },

  itemname: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.02,
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.065,
    borderRadius: 5
  },

  inputname: {
    marginLeft: 5,
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: Colors.shadows
  },

  terms: {
    alignSelf: "center",
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: Colors.darktext,
    marginTop: Metrics.HEIGHT * 0.03,
    fontSize: 12,
    textAlign: "center",
    width: Metrics.WIDTH * 0.8,
    lineHeight: 18
  },

  termstwo: {
    alignSelf: "center",
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: Colors.loginBlue,
    fontSize: 12,
    textAlign: "center"
  },

  termsthree: {
    marginLeft: 5,
    fontFamily: Fonts.type.SFUIDisplayRegular,
    fontSize: 12,
    color: Colors.darktext
  },

  buttondialogsignup: {
    backgroundColor: Colors.loginGreen,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.04,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.08,
    justifyContent: "center"
  },
  btntxt: {
    alignSelf: "center",
    fontFamily: Fonts.type.SFUIDisplaySemibold,
    color: "white"
  }
});
export default styles;
