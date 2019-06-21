
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#DCDCDC',
		justifyContent: 'center',
		alignItems: 'center'
	},

	containTxt: {
		color: "#00bff3",
		fontSize: Fonts.moderateScale(18),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		textAlign: 'center',
		marginTop:-(Metrics.HEIGHT * 0.1)
	},

	backtxt: {
		color: "#00bff3",
		fontSize: Fonts.moderateScale(18),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		textAlign: 'center'
	},


});

export default styles;
