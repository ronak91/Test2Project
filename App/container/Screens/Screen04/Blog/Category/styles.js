import { Platform, StyleSheet, Dimensions, I18nManager } from "react-native";
import { Fonts, Metrics, Colors } from "../../../../Themes/";

const styles = StyleSheet.create({
  mainView: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#ffffff"
  },

  header: {
    backgroundColor: "#0e1130",
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
    alignItems: "center"
  },

  textTitle: {
    color: Colors.snow,
    fontFamily: Fonts.type.helveticaNeueLight,
    fontSize: Fonts.moderateScale(20)
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

  searchViewBg: {
    flexDirection: "row",
    width: Metrics.WIDTH * 0.97,
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: Metrics.HEIGHT * 0.03
  },

  searchBg: {
    width: Metrics.WIDTH * 0.86,
    height: Metrics.HEIGHT * 0.08,
    paddingHorizontal: Metrics.WIDTH * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#eaeaef",
    shadowOpacity: 5,
    shadowOffset: { width: 2, height: 2 },
    elevation: 10
  },

  searchYellowBlog: {
    backgroundColor: "#ffc700",
    width: Metrics.WIDTH * 0.11,
    height: Metrics.HEIGHT * 0.06
  },

  searchInput: {
    textAlign: I18nManager.isRTL ? "right" : "left",
    color: "#555567",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(14)
  },

  trendingTxt: {
    textAlign: "left",
    color: "#0e1130",
    fontFamily: Fonts.type.helveticaNeueBold,
    fontSize: Fonts.moderateScale(25),
    paddingRight: Metrics.WIDTH * 0.03,
    paddingLeft: Metrics.WIDTH * 0.05,
    marginVertical: Metrics.HEIGHT * 0.025
  },

  listTrending: {
    height: Metrics.HEIGHT * 0.3
  },

  rowTrending: {
    paddingLeft: Metrics.WIDTH * 0.05
  },

  rowTrendingLast: {
    paddingHorizontal: Metrics.WIDTH * 0.05
  },

  trendingListImg: {
    height: Metrics.HEIGHT * 0.18,
    width: Metrics.WIDTH * 0.3,
    resizeMode: "cover"
  },

  trendingDescription: {
    textAlign: "left",
    color: "#0e1130",
    width: Metrics.WIDTH * 0.29,
    fontSize: Fonts.moderateScale(13),
    fontFamily: Fonts.type.helveticaRegular,
    marginTop: Metrics.HEIGHT * 0.02,
    lineHeight: Metrics.HEIGHT * 0.02
  },

  trendingDate: {
    textAlign: "left",
    color: "#b2b2b2",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.helveticaRegular,
    marginTop: Metrics.HEIGHT * 0.01
  },

  latestBlogTxt: {
    textAlign: "left",
    color: "#0e1130",
    fontFamily: Fonts.type.helveticaNeueBold,
    fontSize: Fonts.moderateScale(25),
    paddingRight: Metrics.WIDTH * 0.03,
    paddingLeft: Metrics.WIDTH * 0.05,
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.012
  },

  blogTxt: {
    textAlign: "left",
    color: "#0e1130",
    fontFamily: Fonts.type.helveticaNeueBold,
    fontSize: Fonts.moderateScale(25),
    paddingRight: Metrics.WIDTH * 0.03,
    paddingLeft: Metrics.WIDTH * 0.05,
    marginTop: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.015
  },

  sliderBG: {
    height: Metrics.HEIGHT * 0.27,
    flexDirection: "row",
    alignItems: "flex-end"
  },

  dotListBg: {
    backgroundColor: "#fdc500",
    width: Metrics.WIDTH * 0.11,
    height: Metrics.HEIGHT * 0.22,
    marginBottom: Metrics.HEIGHT * 0.01,
    alignItems: "center",
    justifyContent: "center"
  },

  dot: {
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01
  },

  rowLatestBlogBg: {
    width: Metrics.WIDTH * 0.86,
    height: Metrics.HEIGHT * 0.25,
    marginVertical: Metrics.HEIGHT * 0.01,
    // marginRight: Metrics.WIDTH * 0.03,
    // shadowColor: "#eaeaef",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    elevation: 3,
    backgroundColor: "white"
  },

  rowlatestBlog: {
    // width: Metrics.WIDTH * 0.86,
    // height: Metrics.HEIGHT * 0.25,
    // marginVertical: Metrics.HEIGHT * 0.01,
    // marginRight: Metrics.WIDTH * 0.03,
    // shadowColor: "#eaeaef",
    // shadowColor: "#000",
    // shadowOpacity: 0.3,
    // shadowOffset: { width: 0, height: 0 },
    // elevation: 3,
    paddingHorizontal: Metrics.WIDTH * 0.1,
    paddingBottom: Metrics.WIDTH * 0.12,
    paddingTop: Metrics.HEIGHT * 0.04
    // backgroundColor: "white"
  },

  flatlist: {
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingBottom: 20
  },

  latestBlogTitleDateTxt: {
    textAlign: "left",
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.helveticaRegular
  },

  latestBlogTitleDateTxt1: {
    marginLeft: Metrics.WIDTH * 0.01,
    textAlign: "left",
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.helveticaRegular
  },

  latestBlogDescTxt: {
    textAlign: "left",
    color: "#0e1130",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaRegular,
    marginTop: Metrics.HEIGHT * 0.015,
    marginBottom: Metrics.HEIGHT * 0.02,
    lineHeight: Metrics.HEIGHT * 0.03
  },

  activeDot: {
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    backgroundColor: "#0e1130"
  },

  inActiveDot: {
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    backgroundColor: "#aeaeae"
  },

  rowDot: {
    alignItems: "center",
    marginBottom: Metrics.HEIGHT * 0.01
  },

  rowBlog: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.25
  },

  evenOddBlogBg: {
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.32
      },
      android: {
        height: Metrics.HEIGHT * 0.35
      }
    }),
    flexDirection: "row",
    backgroundColor: "white"
  },

  evenOddImgBg: {
    width: Metrics.WIDTH * 0.5
  },

  evenReadMoreBg: {
    width: Metrics.WIDTH * 0.5,
    paddingRight: Metrics.WIDTH * 0.03,
    paddingLeft: Metrics.WIDTH * 0.06,
    paddingVertical: Metrics.HEIGHT * 0.04
  },

  evenReadMorepadding: {},

  oddReadMoreBg: {
    width: Metrics.WIDTH * 0.5,
    paddingRight: Metrics.WIDTH * 0.06,
    paddingLeft: Metrics.WIDTH * 0.03,
    paddingVertical: Metrics.HEIGHT * 0.04
  },

  oddReadMorepadding: {},

  titleAuthorNameTxt: {
    textAlign: "right",
    color: "#000000",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.helveticaRegular,
    lineHeight: Metrics.HEIGHT * 0.03
  },

  titleAuthorNameTxt1: {
    textAlign: "left",
    color: "#000000",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.helveticaRegular,
    lineHeight: Metrics.HEIGHT * 0.03
  },

  titleReadMoreTxt: {
    textAlign: "left",
    color: "#000000",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaRegular,
    lineHeight: Metrics.HEIGHT * 0.03
  },

  dateReadMoreTxt: {
    textAlign: "left",
    color: "#55646b",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaRegular,
    marginVertical: Metrics.HEIGHT * 0.015
  },

  descriptionReadMoreTxt: {
    textAlign: "left",
    color: "#181a30",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaRegular,
    lineHeight: Metrics.HEIGHT * 0.03
  },

  readMoreTxt: {
    textAlign: "left",
    color: "#181a30",
    fontSize: Fonts.moderateScale(13),
    fontFamily: Fonts.type.helveticaNeueBold
  },

  readMoreTxtBg: {
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.01,
    alignItems: "center"
  },

  footerStyle: {
    height: Metrics.HEIGHT * 0.12,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  paginationArrow: {
    width: Metrics.WIDTH * 0.05,
    height: Metrics.HEIGHT * 0.02,
    resizeMode: "contain"
  },

  paginationArrowBg: {
    width: Metrics.WIDTH * 0.07,
    height: Metrics.HEIGHT * 0.04,
    justifyContent: "center",
    alignItems: "center"
  },

  paginationCountTxt: {
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaRegular,
    paddingHorizontal: Metrics.WIDTH * 0.012
  },

  paginationCountBg: {
    marginHorizontal: Metrics.WIDTH * 0.012,
    alignItems: "center",
    alignSelf: "center",
    flexWrap: "wrap",
    flexDirection: "row"
  },

  readMoreArrow: {
    width: Metrics.WIDTH * 0.03,
    height: Metrics.HEIGHT * 0.015,
    resizeMode: "contain",
    marginLeft: Metrics.WIDTH * 0.03,
    marginTop: Metrics.WIDTH * 0.005
  },

  heart: {
    paddingTop: Metrics.HEIGHT * 0.01
  },

  likeBtn: {
    width: Metrics.WIDTH * 0.09,
    height: Metrics.WIDTH * 0.09
  },
  // bottom load more button
  button: {
    flexDirection: "row",
    backgroundColor: "#eee",
    paddingTop: 10,
    paddingRight: 28,
    paddingBottom: 8,
    paddingLeft: 28,
    borderRadius: 40
  },
  icon: {
    marginTop: 2
  },
  text: {
    marginBottom: 2,
    fontWeight: "600",
    color: "#666",
    fontSize: 12
  },
  more: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.5,
    borderWidth: 1,
    borderColor: "#ffc700",
    borderRadius: 5,
    paddingVertical: Metrics.HEIGHT * 0.01,
    marginVertical: Metrics.HEIGHT * 0.03
  },
  moreTxt: {
    textAlign: "center",
    fontSize: Fonts.moderateScale(15),
    color: "#ffc700"
  },
  imageOverlayLoadMore: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.1,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  imageOverlay: {
    height: Metrics.HEIGHT,
    zIndex: 11,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default styles;
