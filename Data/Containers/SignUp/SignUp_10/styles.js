import { Platform, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "transparent"
  },
  header: {
    backgroundColor: "white",
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 25
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
    alignItems: "center"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  textTitle: {
    color: "black",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },
  right: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  main: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "transparent"
  },

  formview: {
    backgroundColor: Colors.backgrey,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },
  lbl: {
    paddingLeft: 15
  },
  textNext: {
    color: Colors.loginBlue,
    fontSize: Fonts.moderateScale(16)
  },

  textTitle: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(16),
    alignSelf: "center",
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },

  inputLabel: {
    alignSelf: "center",
    width: Metrics.WIDTH,
    backgroundColor: "white",
    marginTop: 20
  },

  textLabel: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.shadows
  },

  textInput: {
    fontSize: Fonts.moderateScale(18),
    color: Colors.darktext,
    fontFamily: Fonts.type.SFUIDisplayRegular,
    marginTop: -10,
    left: 15
  },

  textPolicyDescription: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    alignSelf: "center"
  },
  tandcview: {
    flexDirection: "row",
    width: Metrics.WIDTH,
    justifyContent: "center"
  },
  textTermsCondition: {
    color: Colors.blacktxt,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },
  and: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular
  }
});

export default styles;
