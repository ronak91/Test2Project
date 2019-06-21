import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "white"
  },

  header: {
    backgroundColor: Colors.transparent,
    height: 55,
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
    alignItems: "center"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  textTitle: {
    color: "#000",
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

  titleBar: {
    width: Metrics.WIDTH,
    height: 50,
    backgroundColor: "#fff",
    marginTop: 15,
    flexDirection: "row",
    padding: 10
  },

  textTitle: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(16),
    alignSelf: "center",
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },

  textNext: {
    color: Colors.lightgrey,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplayMedium
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 3,
    alignSelf: "center",
    marginBottom: 20
  },

  inputLabel: {
    alignSelf: "center",
    width: Metrics.WIDTH,
    backgroundColor: "white",
    marginTop: 18
  },
  formview: {
    backgroundColor: "#e6e6e6",
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  inputemail: {
    marginLeft: 5,
    marginTop: 2,
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: Colors.shadows
  },
  tandc: {
    flexDirection: "row",
    width: Metrics.WIDTH,
    justifyContent: "center"
  },
  and: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular
  },
  itememail: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,
    height: 50
  },

  inputpassword: {
    marginLeft: 5,
    marginTop: 2,
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: Colors.shadows
  },

  itempassword: {
    alignSelf: "center",
    marginTop: 5,
    width: Metrics.WIDTH * 0.8,
    height: 50
  },

  itemconpassword: {
    alignSelf: "center",
    marginTop: 5,
    width: Metrics.WIDTH * 0.8,
    height: 50,
    borderColor: "rgba(255,255,255,.4)"
  },

  iconitem: {
    color: Colors.shadows
  },

  textPolicyDescription: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    alignSelf: "center",
    marginTop: 20
  },

  textTermsCondition: {
    color: Colors.loginBlue,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  }
});

export default styles;
