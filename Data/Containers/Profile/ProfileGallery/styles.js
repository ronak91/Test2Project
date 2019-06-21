import { Platform, StyleSheet, Dimensions } from "react-native";

// Screen Styles
const { width, height } = Dimensions.get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: Metrics.HEIGHT * 0.03,
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent
  },

  menuIconWhite: {
    justifyContent: "center",
    alignItems: "center"
  },

  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: Colors.transparent
  },
  backArrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(17),
    marginTop: Metrics.HEIGHT * 0.001,
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  right: {
    flex: 0.5
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: "column"
  },

  profileDetailBg: {
    width: Metrics.WIDTH,

    ...Platform.select({
      android: {
        height: Metrics.HEIGHT * 0.45
      },
      ios: {
        height: Metrics.HEIGHT * 0.4
      }
    }),
    backgroundColor: "#2d324f"
  },

  profileImg: {
    width: Metrics.WIDTH * 0.26,
    height: Metrics.WIDTH * 0.26,
    borderRadius: Metrics.WIDTH * 0.13,
    borderWidth: 3,
    borderColor: Colors.snow,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.03
  },

  nameTxt: {
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.02
  },

  designationTxt: {
    color: "#9699a7",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: Metrics.HEIGHT * 0.003,
    alignSelf: "center"
  },

  galleryImgOne: {
    width: Metrics.WIDTH * 0.58,
    height: Metrics.HEIGHT * 0.26,
    resizeMode: "cover"
  },

  galleryImgTwo: {
    height: Metrics.HEIGHT * 0.1225,
    width: Metrics.WIDTH * 0.375,
    resizeMode: "cover"
  },

  galleryImgThree: {
    width: Metrics.WIDTH * 0.18,
    height: Metrics.HEIGHT * 0.1225,
    resizeMode: "cover"
  },

  photoCountTxt: {
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(14),
    textAlign: "center",
    color: Colors.snow
  },

  photosTxt: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(12),
    textAlign: "center",
    color: Colors.snow,
    marginTop: -(Metrics.HEIGHT * 0.005)
  },

  photosCountBg: {
    width: Metrics.WIDTH * 0.18,
    height: Metrics.HEIGHT * 0.1225,
    backgroundColor: "#2d324f",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  photosVerticalDivider: {
    width: Metrics.WIDTH * 0.015,
    height: Metrics.HEIGHT * 0.1225,
    backgroundColor: Colors.snow
  },

  photosHorizontalDivider: {
    height: Metrics.HEIGHT * 0.015,
    width: Metrics.WIDTH * 0.375,
    backgroundColor: Colors.snow
  },

  fieldDividerBg: {
    marginLeft: Metrics.WIDTH * 0.025,
    flexDirection: "column"
  },

  fieldBg: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: Metrics.WIDTH * 0.015,
    marginTop: Metrics.HEIGHT * 0.018,
    marginBottom: Metrics.HEIGHT * 0.018,
    alignItems: "center"
  },

  fieldTitle: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  nextArrow: {
    marginLeft: Metrics.WIDTH * 0.018,
    width: Metrics.WIDTH * 0.03,
    height: Metrics.HEIGHT * 0.025,
    resizeMode: "contain"
  },

  fieldDivider: {
    backgroundColor: "#d7d7d7",
    alignSelf: "flex-end",
    height: Metrics.HEIGHT * 0.001,
    width: Metrics.WIDTH * 0.975
  },

  mailTxt: {
    color: "#6f6f6f",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginRight: Metrics.WIDTH * 0.015
  },

  galleryImgView: {
    width: Metrics.WIDTH * 0.015,
    backgroundColor: Colors.snow,
    height: Metrics.HEIGHT * 0.25
  },

  dividerHorizontal: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.001,
    backgroundColor: "#d7d7d7",
    marginTop: Metrics.WIDTH * 0.005
  }
});

export default styles;
