
import { Platform, StyleSheet, I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: Colors.snow,
  },

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
    width:30,
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

  container: {
    height: (Metrics.HEIGHT),
    backgroundColor: "#36343f"
  },

  listDivider: {
    marginLeft: (Metrics.WIDTH * 0.03),
    height: 0.8,
    backgroundColor: "#29282e",
    marginTop: (Metrics.HEIGHT * 0.01),
    marginBottom: (Metrics.HEIGHT * 0.01)
  },

  headerBg: {
    marginBottom: (Metrics.HEIGHT * 0.02),
    backgroundColor: "#312f38",
    ...Platform.select({
      ios: {
        height: (Metrics.HEIGHT * 0.17),
      },
      android: {
        height: (Metrics.HEIGHT * 0.21),
			}
    }),

  },

  searchBarBg: {
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: "#222127",
    marginLeft: (Metrics.WIDTH * 0.04),
    marginRight: (Metrics.WIDTH * 0.04),
    ...Platform.select({
      ios: {
        marginTop:(Metrics.HEIGHT * 0.05),
      },
      android: {
        marginTop:(Metrics.HEIGHT * 0.06),
			}
    }),
    paddingLeft: (Metrics.WIDTH * 0.03),
    paddingRight: (Metrics.WIDTH * 0.03),
    paddingTop: (Metrics.WIDTH * 0.01),
    paddingBottom: (Metrics.WIDTH * 0.01),
    alignItems: 'center'
  },

  headerDivider: {
    height: 1,
    backgroundColor: "#29282e",
    marginTop: (Metrics.HEIGHT * 0.01)
  },

  headerTitleBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: (Metrics.HEIGHT * 0.03),
    marginLeft: (Metrics.WIDTH * 0.04),
    marginRight: (Metrics.WIDTH * 0.04)
  },

  headerTitleTxt: {
    color:"#6b6a70",
    fontSize: Fonts.moderateScale(13),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  listBg: {
    flexDirection: 'column',
  },

  menuListItem: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH * 0.04),
    marginRight: (Metrics.WIDTH * 0.04),
    justifyContent: 'space-between',
    alignItems:'center'
  },

  nameProfileBg: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  nameTxt: {
    color: "#fff",
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(14),
    marginLeft: (Metrics.WIDTH * 0.03)
  },

  onlineStatusIcon: {
    width: (Metrics.WIDTH * 0.022),
    height: (Metrics.WIDTH * 0.022),
    borderRadius: (Metrics.WIDTH * 0.011),
    backgroundColor:"#39b54a"
  },

  onlineDeviceImg: {
    width: (Metrics.WIDTH * 0.03),
    height: (Metrics.WIDTH * 0.05),
    resizeMode: 'contain'
  },

  recentUserBg: {
    backgroundColor: "#312f38",
    marginTop: (Metrics.WIDTH * 0.03),
    marginBottom: (Metrics.HEIGHT * 0.012)
  },

  recentlyTxt: {
    color: "#6f6e74",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    paddingLeft: I18nManager.isRTL ? 0 : (Metrics.WIDTH * 0.04),
    paddingRight: I18nManager.isRTL ? (Metrics.WIDTH * 0.04) : 0,
    textAlign: 'left',
    ...Platform.select({
      ios: {
        paddingTop: (Metrics.WIDTH * 0.04),
        paddingBottom: (Metrics.WIDTH * 0.02),
      },
      android: {
        paddingTop: (Metrics.WIDTH * 0.045),
        paddingBottom: (Metrics.WIDTH * 0.02),
			}
    }),
  },

  listRecentBg: {
    flexDirection: 'column',
    paddingBottom: (Metrics.WIDTH * 0.02)
  },

  timeTxt: {
    color: "#737179",
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  searchInput: {
    color: "#6d6d71",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    width: (Metrics.WIDTH * 0.6),
    marginLeft: (Metrics.WIDTH * 0.02),
    textAlignVertical: 'top',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: 5,
        paddingBottom: 0
			}
    }),
  },

  profileImg: {
    width: (Metrics.WIDTH * 0.1),
    height: (Metrics.WIDTH * 0.1),
    resizeMode: 'contain'
  }

});

export default styles;
