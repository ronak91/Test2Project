import { Platform, StyleSheet, Dimensions } from "react-native";
import Metrics from "../../Themes/Metrics";
import Colors from "../../Themes/Colors";
import Fonts from "../../Themes/Fonts";

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
  textTitle: {
    color: "#000",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: "center"
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
  right: {
    flex: 0.5
  },
  containMainBg: {
    backgroundColor: "#fff",
    height: Metrics.HEIGHT * 0.85,
    width: Metrics.WIDTH,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    elevation: 3,
    position: "absolute",
    bottom: 15
  },
  titleBar: {
    width: Metrics.WIDTH,
    height: 40,
    backgroundColor: Colors.loginBlue,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },

  textTitle: {
    color: "white",
    fontSize: Fonts.moderateScale(16),
    alignSelf: "center"
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: Colors.greys,
    borderRadius: 5,
    height: Metrics.HEIGHT * 0.07,
    alignSelf: "center",
    width: Metrics.WIDTH * 0.9,
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: Colors.loginBlue,
    paddingLeft: 15,
    marginTop: Metrics.HEIGHT * 0.02
  },
  ands: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular
  },
  buttonSignUp: {
    backgroundColor: Colors.loginGreen,
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    width: Metrics.WIDTH * 0.85,
    height: Metrics.HEIGHT * 0.065,
    marginTop: Metrics.HEIGHT * 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: Colors.shadows,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    justifyContent: "center"
  },

  textWhite: {
    color: "white",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },

  textPolicyDescription: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(11),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    alignSelf: "center"
  },

  textTermsCondition: {
    color: Colors.loginBlue,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },

  textAlreadyHaveAccount: {
    color: Colors.darktext,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  viewAlreadyHaveAccount: {
    borderWidth: 0.5,
    borderColor: Colors.greys,
    borderRadius: 20,
    backgroundColor: "transparent",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.85,
    height: Metrics.HEIGHT * 0.065,
    marginTop: Metrics.HEIGHT * 0.075,
    justifyContent: "center",
    alignItems: "center"
  },

  tandcView: {
    flexDirection: "row",
    width: Metrics.WIDTH,
    justifyContent: "center"
  },
  inputsv: {
    marginTop: Metrics.HEIGHT * 0.1
  },
  tcview: {
    marginTop: Metrics.HEIGHT * 0.07
  }
});

export default styles;
