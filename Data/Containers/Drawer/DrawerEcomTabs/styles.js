
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },

  header: {
    backgroundColor: Colors.snow,
    height: (Metrics.HEIGHT * 0.1),
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomColor: Colors.snow,
    justifyContent: 'space-between',
    paddingTop: (Metrics.HEIGHT * 0.045),
},

  titleTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  filterTxt: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow,
  },

  navigationItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  tabIcon: {
    height: (Metrics.HEIGHT * 0.03),
    width: (Metrics.HEIGHT * 0.03),
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  activeTabText: {
    fontSize: Fonts.moderateScale(12),
    color:'#00bff3'
  },

  normalTabText: {
    fontSize: Fonts.moderateScale(12),
    color:'#929292'
  },

  searchInput: {
    color: "#a0a0a0",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    width: (Metrics.WIDTH * 0.75),
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

  searchIcon: {
    marginLeft: (Metrics.WIDTH) * 0.02
  },

  cartImgBg: {
    width:(Metrics.WIDTH * 0.15),
    marginBottom: (Metrics.HEIGHT * 0.01),
    alignItems: 'center',
    justifyContent: 'center'
  },

  cartImage: {
    width: Metrics.WIDTH * 0.075,
    height: Metrics.WIDTH * 0.075,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  searcgBarBg: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Metrics.WIDTH * 0.82,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    marginLeft: (Metrics.WIDTH * 0.03),
    marginBottom: (Metrics.HEIGHT * 0.01)
  },

  footerTabBg: {
    backgroundColor: Colors.snow
  }

});

export default styles;
