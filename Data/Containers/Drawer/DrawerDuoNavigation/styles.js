
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  headerSec: {
    backgroundColor: "#2d324f",
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.045),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
  },

	left: {
		flex: 0.5,
  },

	backArrow: {
		justifyContent: 'center',
		alignItems: 'center'
  },

	body: {
		flex: 3,
		alignItems: 'center',
  },

	textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

	right: {
    flex: 0.5,
  },

  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#2d324f",
  },

  menuListItem: {
    marginLeft: (Metrics.WIDTH * 0.03),
    color: "#2d324f",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  menuIcon: {
    width: (Metrics.WIDTH * 0.06),
    height: (Metrics.WIDTH * 0.06),
    resizeMode: 'contain'
  },

  container: {
    height: (Metrics.HEIGHT),
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },

  imgContainer: {
    height: (Metrics.HEIGHT),
    backgroundColor: Colors.snow
  },

  listProfileContainer: {
    height: (Metrics.HEIGHT * 0.85),
    backgroundColor: Colors.snow
  },

  profileDataBg: {
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT * 0.1),
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH * 0.1),
    backgroundColor: Colors.transparent
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.16,
    height: (Metrics.WIDTH) * 0.16,
    borderRadius: (Metrics.WIDTH) * 0.08,
    borderColor: Colors.snow,
    borderWidth: 2,
    resizeMode: 'cover'
  },

  nameTxt: {
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    color: "#2d324f"
  },

  addressTxt: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#919cae",
    textAlign: 'left'
  },

  nameAddressTxt: {
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH * 0.03)
  },

  menuListBg: {
    marginTop: (Metrics.HEIGHT * 0.1),
    marginLeft: (Metrics.WIDTH * 0.12),
    backgroundColor: Colors.transparent
  },

  menuListItemBg: {
    flexDirection:'row',
    marginTop: (Metrics.HEIGHT * 0.04),
    alignItems: 'center'
  },

  bottomViewBg: {
    flexDirection: 'row',
    height: (Metrics.HEIGHT * 0.15),
    backgroundColor: Colors.transparent,
    paddingLeft: (Metrics.WIDTH * 0.12),
    paddingTop: (Metrics.WIDTH * 0.04),
  },

  logoutImage: {
    width: (Metrics.WIDTH * 0.05),
    height: (Metrics.HEIGHT * 0.06),
    resizeMode: 'contain'
  },

  scrollBg: {
    height:(Metrics.HEIGHT * 0.65),
    backgroundColor: Colors.transparent
  },

  rowCountText:{
   color:Colors.snow,
   fontSize: Fonts.moderateScale(12),
   backgroundColor: Colors.transparent,
   textAlign: 'center',
   fontFamily: Fonts.type.sfuiDisplayRegular,
   paddingLeft: (Metrics.HEIGHT * 0.015),
   paddingRight: (Metrics.HEIGHT * 0.015),
 },

 rowCountBg:
 {
    backgroundColor: '#00bff3',
    borderRadius: 20,
    marginLeft:(Metrics.HEIGHT * 0.025),
    justifyContent: 'center',
    alignItems: 'center',
    height: (Metrics.HEIGHT) * 0.028
 },

});

export default styles;
