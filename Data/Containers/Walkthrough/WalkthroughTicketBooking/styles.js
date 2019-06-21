
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	imgContainer: {
		height:(Metrics.HEIGHT),
		width: (Metrics.WIDTH)
	},

	dotListBg: {
		height:(Metrics.HEIGHT*0.073),
		marginTop: (Metrics.HEIGHT * 0.01)
	},

	header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
	},
	backArrow:{
	  width: 30,
	  justifyContent: 'flex-start',
	  alignItems: 'flex-start',
	},
	left: {
		flex: 0.5
	},

	body: {
		flex: 3,
		alignSelf: 'center'
	},

	right: {
		flex: 0.5
	},


	slidesec:{
		height: (Metrics.HEIGHT*0.81),
		paddingLeft: (Metrics.WIDTH * 0.06)
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.09),
		borderTopWidth: 0,
		bottom: 0,
		paddingLeft: (Metrics.WIDTH * 0.06)
	},

	slide: {
		backgroundColor: 'gray',
		height: (Metrics.HEIGHT*0.8),
	},

	sliderImage: {
		resizeMode: 'cover',
		height: (Metrics.HEIGHT * 0.8),
		width: Metrics.WIDTH,
		backgroundColor: 'gray'
	},

	headertext: {
		width: (Metrics.WIDTH * 0.6),
		fontFamily: Fonts.type.sfuiDisplayThin,
		backgroundColor:'transparent',
		textAlign:'left',
		alignSelf:'flex-start',
		fontSize:Fonts.moderateScale(20),
		color:Colors.snow,
		marginTop: (Metrics.HEIGHT * 0.12),
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize: Fonts.moderateScale(42),
		color:Colors.snow,
		marginRight: (Metrics.WIDTH * 0.1),
	},

	dot:{
		backgroundColor:'rgba(255,255,255,0.4)',
		width: (Metrics.WIDTH * 0.015),
		height: (Metrics.WIDTH * 0.015),
		borderRadius: 5,
		marginTop: (Metrics.HEIGHT * 0.006),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width: (Metrics.WIDTH * 0.015),
		height: (Metrics.WIDTH * 0.015),
		borderRadius: 5,
		marginTop: (Metrics.HEIGHT * 0.006),
	},

	dataStyle:{
		marginRight: (Metrics.WIDTH * 0.03),
		elevation: 5,
		shadowColor: Colors.black,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			height: (Metrics.WIDTH * 0.015),
			width: (Metrics.WIDTH * 0.015)
		},
		alignItems: 'center',
	},

	dataImage:{
		height: (Metrics.WIDTH * 0.365),
		width: (Metrics.WIDTH * 0.365),
		borderRadius: 4,
		resizeMode: 'cover'
	},

	selectedDataImage:{
		height: (Metrics.WIDTH * 0.365),
		width: (Metrics.WIDTH * 0.365),
		borderRadius: 4,
		borderWidth: 2,
		borderColor: Colors.snow,
		resizeMode: 'cover'
	},

	dataText:{
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(20),
		color: '#6f6f6f',
	},

	contentTxt:{
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		fontSize: Fonts.moderateScale(18),
		color: '#0691ce',
		marginTop: (Metrics.HEIGHT * 0.02)
	},

	searchbarStyle: {
		backgroundColor:'#fff2',
		alignItems: 'center',
		borderColor: Colors.transparent,
		paddingHorizontal: 5,
		width:(Metrics.WIDTH * 0.865),
		height: (Metrics.HEIGHT * 0.055),
		alignSelf: 'flex-start',
		justifyContent: 'center'
	},

	searchText: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		fontSize:Fonts.moderateScale(16),
		color: Colors.snow,
	},

	searchIcon: {
		fontSize:Fonts.moderateScale(20),
		color: '#2e3453'
	},

	countryListBg: {
		marginVertical: (Metrics.HEIGHT*0.025)
	},

	imageListBg: {
		marginVertical: (Metrics.HEIGHT*0.01)
	}

});

export default styles;
