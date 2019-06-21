import { Platform, StyleSheet, Dimensions } from 'react-native';
import {  Fonts,Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH,
		backgroundColor: Colors.snow
	},

	header: {
    backgroundColor: "#0e1130",
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		...Platform.select({
      ios: {
				paddingTop: (Metrics.HEIGHT * 0.02),
			},
      android: {
        paddingTop: Metrics.WIDTH * 0.04
      }
    }),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
  },

	left: {
		flex: 0.5,
		backgroundColor: Colors.transparent,
  },

	backArrow: {
		justifyContent: 'center',
		alignItems: 'center',
  },

	body: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.transparent
  },

	textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
    alignSelf: 'center',
		fontFamily: Fonts.type.helveticaNeueLight,
  },

	right: {
    flex: 0.5,
		backgroundColor: Colors.transparent,
    alignItems: 'center',
		...Platform.select({
      ios: {
			},
      android: {
        paddingTop: Metrics.WIDTH * 0.02
      }
    }),
  },

	alertBg: {
		width: Metrics.WIDTH * 0.03,
		height: Metrics.WIDTH * 0.03,
		borderRadius: Metrics.WIDTH * 0.015,
		backgroundColor: '#ff0000',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -(Metrics.WIDTH * 0.018),
		
	},

	alertTxt: {
		fontSize: Fonts.moderateScale(8),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		color: Colors.snow,
	},

	bagIcon: {
		marginLeft: Metrics.WIDTH * 0.04,
		color: Colors.snow
	},

	heartIcon: {
		color: Colors.snow,
		alignSelf: 'center'
	},

	heartBg: {
		width: Metrics.WIDTH * 0.054,
		height: Metrics.WIDTH * 0.054,
		borderRadius: Metrics.WIDTH * 0.027,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: Colors.snow,
		alignItems: 'center',
		justifyContent: 'center',
	},

  subHeaderBg:{
    backgroundColor: '#f3f3f3',
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingTop: Metrics.WIDTH * 0.012,
    paddingBottom: Metrics.WIDTH * 0.012,
    width: Metrics.WIDTH,
  },

  subHeaderTitle: {
    color: "#959595",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
		textAlign: 'left'
  },

  subHeaderBottomLine: {
    backgroundColor: "#e1e1e1",
    width: Metrics.WIDTH,
    height: 1
  },

  stepBg: {
    alignSelf: 'center',
    marginTop: Metrics.HEIGHT * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
  },

  stepCountBg: {
    width: Metrics.WIDTH * 0.05,
    height: Metrics.WIDTH * 0.05,
    borderRadius: Metrics.WIDTH * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
  },

  stepCountTxt: {
    color: "#fff",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.helveticaNeueBold
  },

  stepDistance: {
    width: Metrics.WIDTH * 0.37,
    height: 4,
  },

  footerBg: {
    width: Metrics.WIDTH,
    backgroundColor: "#d8d8d8",
    bottom: 0,
    position: 'absolute',
    height: Metrics.HEIGHT * 0.08,
		alignItems: 'center',
		justifyContent: 'center'
  },

  footerTxtBg: {
    backgroundColor: "#ffc700",
    width: Metrics.WIDTH * 0.9,
    alignSelf: 'center',
    paddingTop: Metrics.HEIGHT * 0.012,
    paddingBottom: Metrics.HEIGHT * 0.012,
    borderRadius: 5
  },

  footerTxt: {
    color: "#0e1130",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'center'
  },

  contentBillingInformationBg: {
    width: Metrics.WIDTH * 0.9,
    alignSelf: 'center',
  },

  filedRow: {
    flexDirection: 'row',
    marginBottom: Metrics.WIDTH * 0.05,
  },

  filedLabel: {
    color: "#959595",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
    width: Metrics.WIDTH * 0.3,
		textAlign: 'left'
  },

  fieldInfoTxt: {
    color: "#0e1130",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
  },

  fieldDivider: {
    backgroundColor: "#e1e1e1",
    marginBottom: Metrics.WIDTH * 0.03,
    height: 1
  },

  viewPaymentBg: {
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    borderColor: "#ebebeb",
    borderWidth: 1,
    alignSelf: 'center',
  },

  rowPaymentMethod: {
    paddingTop: Metrics.WIDTH * 0.03,
    paddingBottom: Metrics.WIDTH * 0.03,
    paddingLeft: Metrics.WIDTH * 0.02,
    paddingRight: Metrics.WIDTH * 0.02,
  },

  rowPaymentDetail: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  paymentMethodImage: {
    width: Metrics.WIDTH * 0.055,
    height: Metrics.WIDTH * 0.04,
    resizeMode: 'cover'
  },

  paymentListDivider: {
    width: Metrics.WIDTH * 0.9,
    height: 1,
    backgroundColor: "#e1e1e1"
  },

	productImage: {
    width: Metrics.WIDTH * 0.3,
		height: Metrics.WIDTH *0.36,
  },

	productDetailBg: {
    width: Metrics.WIDTH * 0.55,
    marginLeft: Metrics.WIDTH * 0.05,
    backgroundColor: Colors.transparent,
  },

	productTitleTxt: {
    color: "#0e1130",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaNeueLight,
		textAlign: 'left'
  },

	detailFieldRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

	priceTxt: {
    color: "#ff0000",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaNeueBold,
		textAlign: 'left'
  },

	closeIconBg: {
    backgroundColor: "#cecece",
    width: Metrics.WIDTH * 0.044,
    height: Metrics.WIDTH * 0.044,
    borderRadius: Metrics.WIDTH * 0.022,
    alignItems: 'center',
    justifyContent: 'center',
  },

	closeImg: {
    alignSelf: 'center',
    color: Colors.snow,
    ...Platform.select({
      ios: {
				paddingBottom: (Metrics.WIDTH * 0.003),
			},
      android: {}
    }),
  },

	colorViewer: {
    height: Metrics.WIDTH * 0.024,
    width: Metrics.WIDTH * 0.024,
    borderRadius: 1.5,
  },

	orderListDivider: {
		width: Metrics.WIDTH * 0.95,
    marginLeft: Metrics.WIDTH * 0.05,
    height: 1,
    backgroundColor: "#d8d8d8"
	},

	orderListRowBg: {
    width: Metrics.WIDTH * 0.90,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: Metrics.WIDTH * 0.04,
		backgroundColor: Colors.transparent
	},

	contentBg: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.67,
	},

	productTitlerow: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	totalBg: {
		backgroundColor: "#ffc700",
		width: Metrics.WIDTH,
		marginTop: Metrics.WIDTH * 0.04,
		marginBottom: Metrics.WIDTH * 0.06
	},

	totalFieldRow: {
		flexDirection: 'row',
		paddingLeft: Metrics.WIDTH * 0.05,
		paddingRight: Metrics.WIDTH * 0.05,
		paddingTop: Metrics.WIDTH * 0.02,
		paddingBottom: Metrics.WIDTH * 0.02
	},

	totalFieldDivider: {
		width: Metrics.WIDTH * 0.95,
		marginLeft: Metrics.WIDTH * 0.05,
		backgroundColor: Colors.snow,
		height: 1
	},

	totalTxt: {
		color: "#0e1130",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaNeueBold,
		textAlign: 'left'
	},

	bilingInfoBg: {
		width: Metrics.WIDTH * 0.9,
		alignSelf: 'center',
		marginTop: Metrics.WIDTH * 0.05,
		marginBottom: Metrics.WIDTH * 0.1
	},

	billingInfoHeaderBg: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: Metrics.WIDTH * 0.06
	},

	bilingInfoHeaderLabel:{
		color: "#0e1130",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight
	},

	editTxt: {
		color: "#ffc700",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight
	},

	billingInfo: {
		flexDirection: 'row',
	},

	billingInfoLabel: {
		color: "#a9a9a9",
		fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaNeueLight,
		textAlign: 'left'
	},

	paymentBg: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center',
		width: Metrics.WIDTH * 0.9,
		alignItems: 'center',
		marginTop: Metrics.WIDTH * 0.05,
		marginBottom: Metrics.WIDTH * 0.03
	},

	orderPaymentImage: {
		width: Metrics.WIDTH * 0.06,
    height: Metrics.WIDTH * 0.045,
    resizeMode: 'cover'
	},

	textInput: {
    backgroundColor: "#fff",
    borderRadius: 5,
		borderColor: '#ffc700',
		borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    width: (Metrics.WIDTH * 0.84),
		fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
		color: "#0e1130",
		marginTop: -5,
  },

	saveCancelBg: {
		flexDirection: 'row',
		width: Metrics.WIDTH * 0.84,
		marginLeft: Metrics.WIDTH * 0.03,
		marginRight: Metrics.WIDTH * 0.03,
		marginTop: Metrics.WIDTH * 0.05,
		marginBottom: Metrics.WIDTH * 0.05,
		justifyContent: 'space-between'
	},

	cancelBg: {
		backgroundColor: "#ffc700",
    width: Metrics.WIDTH * 0.4,
    paddingTop: Metrics.HEIGHT * 0.012,
    paddingBottom: Metrics.HEIGHT * 0.012,
    borderRadius: 5,
	},

	editInfoTxt: {
		fontSize: Fonts. moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
		color: '#ffc700',
		textDecorationLine: 'underline'
	},

	modalOpenView: {
    flexDirection: 'column',
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    alignItems: 'center'
  },

	modalView:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#0006",
    paddingTop: Metrics.HEIGHT * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
  },

  modal: {
    width: (Metrics.WIDTH) * 0.90,
    backgroundColor: Colors.snow,
    borderRadius: 5,
   },

   modalHeader: {
     backgroundColor: "#ebebeb",
     justifyContent: 'space-between',
     flexDirection: 'row',
     paddingBottom: Metrics.WIDTH * 0.024,
     paddingTop: Metrics.WIDTH * 0.024,
     paddingLeft: Metrics.WIDTH * 0.03,
     paddingRight: Metrics.WIDTH * 0.03,
     borderTopLeftRadius: 5,
     borderTopRightRadius: 5
   },

	 cancelApplyTxt: {
     color: "#ffc700",
     fontSize: Fonts.moderateScale(15),
     fontFamily: Fonts.type.sfuiDisplayLight
   },

   shareTxt: {
     color: "#0e1130",
     fontSize: Fonts.moderateScale(15),
     fontFamily: Fonts.type.sfuiDisplayLight
   },

});


export default styles;
