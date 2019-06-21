
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#2d324f',
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH
	},
	backArrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	header: {
		backgroundColor: '#2d324f',
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
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
		height: (Metrics.HEIGHT*0.75),
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.15),
		borderTopWidth: 0,
		bottom: 0,
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(23),
		width :(Metrics.WIDTH) * .85,
		color:Colors.snow,
		marginTop: (Metrics.HEIGHT * 0.02),
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(12),
		width :(Metrics.WIDTH) * 0.75,
		color:Colors.snow,
		marginTop:(Metrics.HEIGHT * 0.03)
	},

	dataStyle:{
		backgroundColor: Colors.snow,
		borderRadius: 4,
		height: (Metrics.HEIGHT * 0.325),
		width: (Metrics.WIDTH * 0.36),
		margin: (Metrics.WIDTH * 0.015),
		elevation: 5,
		shadowColor: Colors.black,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			height: 5,
			width: 5
		},
		alignItems: 'center',
	},

	dataImage:{
		height: (Metrics.HEIGHT * 0.25),
		width: (Metrics.WIDTH * 0.36),
		borderRadius: 4,
		resizeMode: 'cover'
	},

	dataText:{
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(20),
		color: '#6f6f6f',
	},

	continueBg: {
		backgroundColor:'#4cd964',
		width:(Metrics.WIDTH *0.5),
		...Platform.select({
        ios: {
          height: (Metrics.HEIGHT *0.065),
        },
        android: {
          height: (Metrics.HEIGHT *0.068),
        }
    }),
		alignSelf: 'center',
		justifyContent: 'center'
	},

	continueTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(18),
		color: Colors.snow
	},

	imgTitleBg: {
		height: (Metrics.HEIGHT * 0.08),
		width: (Metrics.WIDTH * 0.36),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.snow,
		position: 'absolute',
		bottom:0,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4
	},

	chBoxBg: {
		width: (Metrics.WIDTH * 0.25),
		alignItems: 'flex-end',
		position: 'absolute',
		marginTop: (Metrics.HEIGHT * 0.01)
	},

	chBox: {
		height: 18,
		width: 18,
		borderRadius: 9,
	},

	listItem: {
		height:(Metrics.HEIGHT*0.43)
	},

	listBg: {
		marginVertical: (Metrics.HEIGHT * 0.07)
	}

});

export default styles;
