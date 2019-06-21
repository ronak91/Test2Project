
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
    backgroundColor: Colors.snow,
  },

  menuListItem: {
    marginLeft: (Metrics.WIDTH * 0.03),
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
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

  imgBg: {
    height: (Metrics.HEIGHT),
    backgroundColor: 'grey'
  },

  imgContainer: {
    height: (Metrics.HEIGHT),
  },

  listProfileContainer: {
    height: (Metrics.HEIGHT * 0.90),
    backgroundColor: "#202022"
  },

  profileDataBg: {
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT * 0.12),
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH * 0.1)
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
    color: Colors.snow
  },

  addressTxt: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#a9a9a9",
    textAlign: 'left'
  },

  nameAddressTxt: {
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH * 0.03)
  },

  menuListBg: {
    marginTop: (Metrics.HEIGHT * 0.12),
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
    height: (Metrics.HEIGHT * 0.1),
    backgroundColor: "#19191a",
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: (Metrics.WIDTH * 0.02),
    paddingRight: (Metrics.WIDTH * 0.05)
  },

  bottomImageDataBg: {
    flexDirection: 'row',
    alignItems:'center'
  },

  bottomImage: {
    width: (Metrics.WIDTH * 0.12),
    height:(Metrics.WIDTH * 0.12),
    borderRadius: (Metrics.WIDTH * 0.06),
    borderWidth: 1,
    borderColor: Colors.snow
  },

  bottomDataBg: {
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH * 0.03)
  },

  imagineDragonTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  bottomNameTxt: {
    color: "#919191",
    fontSize: Fonts.moderateScale(13),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'left'
  },

  playMusicImgBg: {
    width: (Metrics.WIDTH * 0.08),
    height: (Metrics.WIDTH * 0.08),
    borderRadius: (Metrics.WIDTH * 0.04),
    borderWidth:1,
    borderColor: Colors.snow,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },

  playMusicImg: {
    width: (Metrics.WIDTH * 0.04),
    height: (Metrics.WIDTH * 0.04),
    resizeMode: 'contain'
  },

  scrollBg: {
    height:(Metrics.HEIGHT * 0.62)
  }

});

export default styles;
