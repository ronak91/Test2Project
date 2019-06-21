import { Platform, StyleSheet, I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	slidesec:{
		height: (Metrics.HEIGHT*0.75),
		width: Metrics.WIDTH
	},

	header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},
	backArrow:{
	  width: 30,
	  justifyContent: 'flex-start',
	  alignItems: 'flex-start',
	},
	headerLeft: {
		flex: 0.5
	},

	headerBody: {
		flex: 3,
		alignItems:'center'
	},

	headerRight: {
		flex: 0.5
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.15),
		paddingLeft: (Metrics.WIDTH * 0.06),
		paddingRight: (Metrics.WIDTH * 0.06),
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	slide: {
    backgroundColor: Colors.snow,
    height: (Metrics.HEIGHT * 0.7),
    width: (Metrics.WIDTH * 0.87),
    ...Platform.select({
      ios: {
                marginLeft:(Metrics.WIDTH * 0.02),
                marginRight: (Metrics.WIDTH * 0.02),
      },
      android: {
      }
  }),

},

	sliderImage: {
		backgroundColor: '#b7b7b7',
		resizeMode: 'cover',
		height: (Metrics.HEIGHT * 0.50),
		width: (Metrics.WIDTH * 0.87),
	},

	contentStyle: {
		padding: (Metrics.HEIGHT * 0.03),
		width: (Metrics.WIDTH * 0.87),
		alignSelf: 'center',
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		backgroundColor: Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(18),
		color:'#363636',
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(12),
		color:'#b7b7b7',
		marginTop:(Metrics.HEIGHT * 0.005)
	},

	pricetext: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(18),
		color:'#4cd964',
		marginTop:(Metrics.HEIGHT * 0.015)
	},

	dot:{
		backgroundColor:'rgba(111,111,111,0.35)',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:'#6f6f6f',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	indicatorViewPager: {
		height:(Metrics.HEIGHT * 0.75),
		width: (Metrics.WIDTH * 0.87),
		alignSelf: 'center'
	},

	addToCartBg: {
		backgroundColor:'#0691ce',
		marginTop:(Metrics.HEIGHT * 0.03),
		justifyContent: 'center',
		borderRadius: 20,
		alignItems: 'center',
		alignSelf: 'center',
		paddingLeft: (Metrics.WIDTH * 0.06),
		paddingRight: (Metrics.WIDTH * 0.06),
		paddingTop: (Metrics.WIDTH * 0.02),
		paddingBottom: (Metrics.WIDTH) * 0.02,
	},

	addToCartTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(12),
		color: Colors.snow,
		textAlign: 'center'
	},

	cartImgBg: {
		flexDirection: 'row',
		justifyContent:'flex-start',
		alignSelf: 'center',
		backgroundColor: Colors.transparent,
		...Platform.select({
	      ios: {
	      },
	      android: {
					height: Metrics.HEIGHT * 0.07
	      }
	  }),

	},

	cartImg: {
		height:(Metrics.WIDTH * 0.06),
		width:(Metrics.WIDTH * 0.06),
		alignSelf:'center',
		transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
	},

	cartItemCountBg: {
		marginLeft: -(Metrics.WIDTH * 0.01),
		...Platform.select({
	      ios: {
					marginTop: -(Metrics.HEIGHT * 0.0118),
	      },
	      android: {
					marginTop: (Metrics.HEIGHT * 0.005),
	      }
	  }),
		height:(Metrics.WIDTH * 0.05),
		width: (Metrics.WIDTH * 0.05),
		borderRadius: (Metrics.WIDTH * 0.025),
		justifyContent:'center',
		backgroundColor:'#0691ce',
		alignItems: 'center',
		padding: (Metrics.WIDTH * 0.01),
	},

	cartCountTxt: {
		fontSize:Fonts.moderateScale(11),
		color: Colors.snow,
		fontFamily: Fonts.type.sfuiDisplayRegular,

	},

});

export default styles;
