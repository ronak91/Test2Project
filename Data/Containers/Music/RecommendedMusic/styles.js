import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa"
  },

  headerGradiant: {
    height: Metrics.HEIGHT * 0.1,
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
    fontFamily: Fonts.type.robotoRegular
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

  mainView: {
    height: Metrics.HEIGHT * 0.9,
    width: Metrics.WIDTH,
  },

  musicImg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.35
  },

  musicSliderView: {
    width: Metrics.WIDTH * 0.95,
    height: Metrics.HEIGHT * 0.07,
    alignSelf: 'center',
    bottom: 5,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },

  detailsView: {
    width: Metrics.WIDTH,
    padding: Metrics.HEIGHT * 0.025,
    backgroundColor: Colors.snow,
    shadowColor: "gray",
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 2
  },

  profileImg: {
    height: Metrics.HEIGHT * 0.06,
    width: Metrics.HEIGHT * 0.06,
    borderRadius: Metrics.HEIGHT * 0.03
  },

  detailsTxt: {
    fontFamily: Fonts.type.robotoRegular,
  },

  detailsTxtView: {
    marginLeft: Metrics.HEIGHT * 0.03,
    justifyContent: 'center',
    width: Metrics.WIDTH * 0.68
  },

  recommendedTxt: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(16),
    marginTop: Metrics.HEIGHT * 0.03,
    marginBottom: Metrics.HEIGHT * 0.02,
    color: '#272727',
    paddingLeft: Metrics.HEIGHT * 0.025
  },

  listContent: {
    backgroundColor: Colors.snow,
    width: (Metrics.WIDTH),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Metrics.HEIGHT * 0.030,
    paddingTop: Metrics.HEIGHT * 0.030,
  },

  rowdetail:{
    flexDirection: 'row',
    paddingLeft: Metrics.HEIGHT * 0.025,
    paddingRight: Metrics.HEIGHT * 0.025,
    paddingTop: Metrics.HEIGHT * 0.027,
    alignItems: 'center',
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH
  },

  musicImgView: {
    width: Metrics.HEIGHT * 0.1,
    height: Metrics.HEIGHT * 0.1,
  },

  musicDetailsView: {
    width: Metrics.WIDTH * 0.67,
    paddingLeft: Metrics.WIDTH * 0.045,
  },

  shadowView: {
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.004,
      },
      android: {
        height: Metrics.HEIGHT * 0.001,
      }
    }),
    shadowColor: "gray",
    backgroundColor: "white",
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: -3},
    elevation: 2
  },

  musicTimeTxt: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
    fontFamily: Fonts.type.helveticaNeueLight,

  },

  sliderStyle: {
		backgroundColor: '#fff',
		height: Metrics.WIDTH * 0.01,
	},

  containerStyle: {
		alignSelf: 'center',
		height:5,
	},

	trackStyle: {
		height: (Metrics.HEIGHT*0.005),
		borderRadius: 4,
	},

  sliderView: {
    width: Metrics.WIDTH * 0.5,
    height: Metrics.HEIGHT * 0.07,
    alignSelf: 'center',
    bottom: 5,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  listDropDown: {
		...Platform.select({
			ios: {
					width: Metrics.WIDTH * 0.30,
					paddingHorizontal: Metrics.WIDTH * 0.015,
					paddingVertical: Metrics.HEIGHT * 0.02,
					backgroundColor:Colors.snow,
					justifyContent: 'center',
					position: 'absolute',
					right: Metrics.WIDTH * 0.080,
					// bottom: Metrics.HEIGHT * 0.03,
					shadowColor: 'gray',
					zIndex: 10000,
			},
			android: {
				  height:Metrics.WIDTH * 0.20,
					width: Metrics.WIDTH * 0.35,
					paddingHorizontal: Metrics.WIDTH * 0.005,
					paddingVertical: Metrics.HEIGHT * 0.002,
					backgroundColor:Colors.snow,
					justifyContent: 'center',
					position: 'absolute',
					right: Metrics.WIDTH * 0.080,
					// bottom: Metrics.HEIGHT * 0.03,
					shadowColor: 'gray',
					zIndex: 10000,
				  borderColor: '#e3e3e3',
				  borderWidth: Metrics.WIDTH * 0.003,
					paddingLeft: Metrics.WIDTH * 0.003,
			},
		}),
		// shadowOpacity: 0.2,
		// shadowOffset: { width: 0, height: 2 },
		// elevation: 2
	},


	dropDownTxt: {
		fontSize: Fonts.moderateScale(15),
		fontFamily: Fonts.type.robotoRegular,
		color: '#7b7b7b',
		marginLeft: 5
	},

  listTrackRow: {
    width: Metrics.WIDTH * 0.88,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Metrics.HEIGHT * 0.027
  },

  listTrackInfoImg: {
    flexDirection: "row",
    alignItems: "center"
  },

  listTrackImage: {
    resizeMode: "cover",
    width: Metrics.WIDTH * 0.18,
    height: Metrics.HEIGHT * 0.1
  },

  listInfo: {
    width: Metrics.WIDTH * 0.62,
    marginLeft: Metrics.WIDTH * 0.03
  },

  listTitleTxt: {
    color: "#2e2e2e",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.robotoRegular
  },

  listSubTitleBg: {
    flexDirection: "row",
    marginTop: 5
  },

  listSubTitleTxt: {
    color: "#7b7b7b",
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.WIDTH * 0.002
  },
});

export default styles;
