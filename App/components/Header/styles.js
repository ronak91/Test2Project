
import { Platform, StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../container/Themes/Metrics';
import Colors from '../../container/Themes/Colors';
import Fonts from '../../container/Themes/Fonts';

const styles = StyleSheet.create({
	header: {
    backgroundColor: Colors.backgrey,
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop: Fonts.moderateScale(20)
			}
    }),
		elevation: 0
  },
	left: {
		flex: 0.5,
		backgroundColor: 'transparent',
  },
	backArrow: {
		width: 30,
		justifyContent: 'center',
		alignItems: 'center'
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	textTitle: {
    color: "#000",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
//    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
	right: {
    flex: 0.5
  },
	containMainBg: {
    backgroundColor: '#fff',
    height: (Metrics.HEIGHT * 0.85),
    width: (Metrics.WIDTH * 0.92),
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		bottom:15,
  },
});


export default styles;