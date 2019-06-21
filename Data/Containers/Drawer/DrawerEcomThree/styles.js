
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  headerSec: {
    backgroundColor: "#2d324f",
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
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
		alignItems: 'center'
  },

	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: Colors.transparent
  },

	textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

	right: {
    flex: 0.5
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

  container: {
    height: (Metrics.HEIGHT),
    backgroundColor: Colors.snow
  },

  listProfileContainer: {
    height: (Metrics.HEIGHT * 0.90),
    backgroundColor: Colors.transparent
  },

  profileDataBg: {
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT * 0.07),
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH * 0.08)
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.16,
    height: (Metrics.WIDTH) * 0.16,
    borderRadius: (Metrics.WIDTH) * 0.08,
    backgroundColor: Colors.transparent
  },

  nameTxt: {
    fontSize: Fonts.moderateScale(20),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    color: "#2d324f"
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
    marginLeft: (Metrics.WIDTH * 0.08),
    marginRight: (Metrics.WIDTH * 0.08),
    backgroundColor: Colors.transparent
  },

  menuListItemBg: {
    flexDirection:'row',
    marginTop: (Metrics.HEIGHT * 0.03),
    alignItems: 'center'
  },

  bottomViewBg: {
    flexDirection: 'row',
    height: (Metrics.HEIGHT * 0.1),
    backgroundColor: "#00bff3",
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.02)
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

  bottomTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  menuListDivider: {
    backgroundColor: "#ebebeb",
    height: 0.5,
    marginTop: (Metrics.HEIGHT * 0.02)
  },

  cartItemCount: {
    margin: (Metrics.WIDTH * 0.01),
    color: Colors.snow,
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  cartCountBg: {
    marginTop: -(Metrics.HEIGHT * 0.03),
    marginLeft: -(Metrics.WIDTH * 0.02),
    width: (Metrics.WIDTH * 0.05),
    height: (Metrics.WIDTH * 0.05),
    borderRadius: (Metrics.WIDTH * 0.025),
    backgroundColor: '#2d324f',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cartImage: {
    width: (Metrics.WIDTH * 0.06),
    height: (Metrics.WIDTH * 0.06),
    resizeMode: 'contain'
  },

  categoryItemCount: {
    marginLeft: (Metrics.WIDTH * 0.03),
    marginRight:(Metrics.WIDTH * 0.03),
    marginTop: (Metrics.WIDTH * 0.005),
    marginBottom: (Metrics.WIDTH * 0.005),
    color: Colors.snow,
    fontSize: Fonts.moderateScale(12)
  },

  categoryCountBg: {
    backgroundColor: "#00bff3",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  categoryRowBg: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  menuListScrollBg: {
    height:(Metrics.HEIGHT * 0.67),
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.HEIGHT * 0.06)
  }

});

export default styles;
