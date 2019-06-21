import { Platform, StyleSheet, Dimensions, I18nManager } from "react-native";
import { Fonts, Metrics, Colors } from "../../../../Themes/";

const styles = StyleSheet.create({
  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "red"
  },

  header: {
    backgroundColor: "transparent",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: Metrics.HEIGHT * 0.02
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent
  },

  backArrow: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Metrics.WIDTH * 0.01
  },

  body: {
    flex: 3,
    alignItems: "flex-start"
  },

  textTitle: {
    color: Colors.snow,
    fontFamily: Fonts.type.helveticaNeueLight,
    fontSize: Fonts.moderateScale(22),
    alignSelf: "center"
  },

  right: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: Metrics.WIDTH * 0.02
      }
    })
  },

  featuredTextView: {
    width: Metrics.WIDTH * 0.25,
    height: Metrics.HEIGHT * 0.35
  },

  featuredText: {
    transform: [{ rotate: "270deg" }],
    width: Metrics.HEIGHT * 0.2,
    bottom: Metrics.HEIGHT * 0.14,
    position: "absolute",
    marginLeft: -25,
    fontSize: Fonts.moderateScale(18),
    color: Colors.snow,
    fontFamily: Fonts.type.helveticaRegular
  },

  swiperView: {
    width: Metrics.WIDTH * 0.75,
    height: Metrics.HEIGHT * 0.4,
    alignSelf: "flex-end",
    marginTop: Metrics.HEIGHT * 0.05,
    zIndex: 10,
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "visible",
    marginRight: Metrics.WIDTH * 0.02
  },

  swiperTextView: {
    width: Metrics.WIDTH * 0.75,
    height: Metrics.HEIGHT * 0.35,
    backgroundColor: Colors.snow,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    zIndex: 10,
    paddingLeft: Metrics.WIDTH * 0.1,
    paddingRight: Metrics.WIDTH * 0.03,
    paddingTop: Metrics.WIDTH * 0.07,
    paddingBottom: Metrics.WIDTH * 0.07,
    ...Platform.select({
      ios: {},
      android: {
        marginBottom: Metrics.HEIGHT * 0.02,
        elevation: 6
      }
    })
  },

  dot: {
    backgroundColor: Colors.transparent,
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
    borderWidth: 1,
    borderColor: "#d0d0db"
  },

  activeDot: {
    backgroundColor: "#ffc700",
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005
  },

  pagination: {
    bottom: 5,
    left: null,
    right: 15
  },

  swiperCategoryName: {
    textAlign: "left",
    color: "#959595",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaRegular
  },

  swiperCategoryDes: {
    textAlign: "left",
    color: "#0e1130",
    fontSize: Fonts.moderateScale(17),
    fontFamily: Fonts.type.helveticaRegular,
    lineHeight: Metrics.HEIGHT * 0.036
  },

  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: Metrics.WIDTH * 0.04,
    paddingTop: Metrics.HEIGHT * 0.1
  },

  rowMain: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: Metrics.WIDTH * 0.44,
    height: Metrics.WIDTH * 0.445,
    marginBottom: Metrics.WIDTH * 0.04
  },

  imageBG: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  imagebg: {
    width: Metrics.WIDTH * 0.44,
    height: Metrics.WIDTH * 0.445,
    justifyContent: "center",
    alignItems: "center"
  },

  catName: {
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(16),
    color: Colors.snow
  },

  menuItemTxt: {
    color: "white",
    fontSize: Fonts.moderateScale(18),
    textAlign: "left",
    paddingLeft: I18nManager.isRTL ? 0 : Metrics.WIDTH * 0.05,
    paddingRight: I18nManager.isRTL ? Metrics.WIDTH * 0.05 : 0,
    fontFamily: Fonts.type.helveticaNeueBold
  },

  menuIcon: {
    paddingLeft: I18nManager.isRTL ? 0 : Metrics.WIDTH * 0.1,
    paddingRight: I18nManager.isRTL ? Metrics.WIDTH * 0.1 : 0
  },

  sideListBg: {
    height: Metrics.HEIGHT,
    paddingTop: Metrics.HEIGHT * 0.1
  },

  imageOverlay: {
    height: Metrics.HEIGHT,
    zIndex: 11,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default styles;
