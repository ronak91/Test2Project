import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: '#e6e6e6',
    flexDirection: 'column'
  },

  header: {
		backgroundColor: '#e6e6e6',
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.03),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},
  backArrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
	left: {
		flex: 0.5,
		backgroundColor: Colors.transparent,
	},

	menuIconWhite: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: Colors.transparent
	},

	textTitle: {
		color: '#363636',
		fontSize: Fonts.moderateScale(17),
		marginTop: (Metrics.HEIGHT * 0.001),
		alignSelf: 'center',
		fontFamily: Fonts.type.sfuiDisplaySemibold,
	},

	right: {
		flex: 0.5
	},

  settingIcon: {
  	height:(Metrics.HEIGHT*0.03),
  	width:(Metrics.HEIGHT*0.03),
  	resizeMode: 'contain'
  },

  profileHeaderMain: {
  	backgroundColor: Colors.transparent,
    ...Platform.select({
      ios:{
        height:(Metrics.HEIGHT * 0.4),
      },
      android:{
        height:(Metrics.HEIGHT * 0.42),
      }
    }),
  	alignItems: 'center',
  },

  profileImageSec: {
  	justifyContent: 'center',
  	alignItems: 'center',
  	flexDirection: 'row',
  	paddingTop: (Metrics.HEIGHT * 0.03)
  },

  profileImage: {
  	height:(Metrics.HEIGHT * 0.14),
  	width:(Metrics.HEIGHT * 0.14),
  	marginHorizontal: (Metrics.WIDTH * 0.08),
  	borderRadius: (Metrics.HEIGHT * 0.07),
  	borderWidth: 2.5,
  	borderColor: Colors.snow,
  	resizeMode: 'cover'
  },

  name:{
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(18),
    color: '#252525',
    marginTop:(Metrics.HEIGHT * 0.018)
  },

  address:{
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color:'#969696',
    textAlign: 'center',
    marginVertical: (Metrics.HEIGHT * 0.005),
    marginHorizontal: (Metrics.HEIGHT * 0.1)
  },

  fbTwitterGoogleView:{
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.08,
    marginTop: (Metrics.HEIGHT) * 0.015,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    flexDirection: 'row',
  },

  fbView:{
    justifyContent:'center',
    alignItems:'center',
    width: (Metrics.HEIGHT) * 0.05,
    height: (Metrics.HEIGHT) * 0.05,
    borderRadius: (Metrics.HEIGHT) * 0.025,
    backgroundColor:'#0691ce',
    marginRight: (Metrics.HEIGHT) * 0.015
  },

  googleImg:{
    height: (Metrics.HEIGHT) * 0.022,
    width: (Metrics.WIDTH) * 0.050,
    resizeMode: 'contain'
  },

  tabNameView:{
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },

  label: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#0691ce",
    paddingLeft: (Metrics.WIDTH) * 0.045,
  },

  normalLabel: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#d2d2d2",
    paddingLeft:(Metrics.WIDTH) * 0.045,
  },

  indicator:{
    backgroundColor: "#0691ce",
    width: (Metrics.WIDTH) * 0.15,
    marginLeft: (Metrics.WIDTH) * 0.055
  },

  tabBg:{
    backgroundColor: Colors.transparent,

  },

  container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
  },







  mains: {
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    flexDirection: 'column',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.10,
    height: (Metrics.WIDTH) * 0.10,
    borderRadius: (Metrics.WIDTH) * 0.05
  },

  nameTxt: {
      color: "#363636",
      fontSize: Fonts.moderateScale(14),
      fontFamily: Fonts.type.sfuiDisplayMedium,
      textAlign: 'left'
  },

  designationTxt: {
      color: "#b7b7b7",
      fontSize: Fonts.moderateScale(12),
      marginTop: (Metrics.HEIGHT) * 0.002,
      textAlign: 'left'
  },

  mainRow:{
    flexDirection: 'row',
    margin: (Metrics.HEIGHT) * 0.015,

    alignItems: 'center'
  },

  nameDesignationMainView:{
    marginLeft: (Metrics.WIDTH) * 0.045,
    flexDirection: 'column'
  },

  nameDesignationView:{
    flexDirection:'column',
    justifyContent:'center'
  },

  dividerHorizontal:{
    width: (Metrics.WIDTH) * 0.95,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor:'#e6e6e6',
    justifyContent:'center',
    alignSelf:'center'
  },
  listContent: {
    backgroundColor: 'white'
  },

});

export default styles;
