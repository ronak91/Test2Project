import { Platform, StyleSheet, Dimensions } from "react-native";

import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  bgImg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  mainview: {
    flexDirection: "column"
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
    alignItems: 'flex-start',
  },

  textTitle: {
    color: Colors.snow,
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(20),
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

  tabUnderLine: {
    backgroundColor: Colors.snow,
    height: 2
  },
  tabText: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow
  },
  container: {
    flex: 1
  },



  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: "column"
  },
  imgview: {
    height: Metrics.HEIGHT * 0.25,
    width: Metrics.WIDTH * 0.4,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.HEIGHT * 0.005
  },
  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: Metrics.WIDTH * 0.018,
    paddingVertical: Metrics.HEIGHT * 0.012,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between",
    paddingBottom: 10,
    backgroundColor: "#fafafa"
  },
  img: {
    width: Metrics.WIDTH * 0.44,
    height: Metrics.HEIGHT * 0.25,
    borderRadius: Metrics.HEIGHT * 0.005
  },
  play: {
    position: "absolute",
    top: Metrics.HEIGHT * 0.21
  },
  songtitle: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    color: "#404040",
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.01
  },
  song: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(12),
    color: "#9c9c9c",
    paddingLeft: Metrics.HEIGHT * 0.01,
    paddingTop: Metrics.HEIGHT * 0.004
  },
  listMainview: {
    width: Metrics.WIDTH * 0.47,
    height: Metrics.HEIGHT * 0.345,
    paddingLeft: Metrics.HEIGHT * 0.01,
    paddingRight: Metrics.HEIGHT * 0.01,
    backgroundColor: "#fafafa",
    paddingTop: Metrics.HEIGHT * 0.01,
    borderRadius: Metrics.HEIGHT * 0.005,
    marginBottom: Metrics.HEIGHT * 0.01,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  }
});
export default styles;
