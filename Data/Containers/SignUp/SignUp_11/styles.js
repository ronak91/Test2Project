
import { Platform, StyleSheet, Dimensions ,I18nManager} from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

logosec:{
		height: (Metrics.HEIGHT*0.27),
		backgroundColor:'transparent'
},
backArrow: {
	marginTop: 25,
	marginLeft: 15,
	width: 30,
	alignItems: 'center',
},
backicon:{

	color:'white',
	backgroundColor: 'transparent',

			...I18nManager.isRTL ?
	    ({
				alignItems:'flex-start',
	    })
	      :
	    ({
				alignItems:'flex-end',
	    }),
},
slidesec:{
	height: (Metrics.HEIGHT*0.65),
	backgroundColor:'transparent'
},
mainbg:{
	width:Metrics.WIDTH,
	height:Metrics.HEIGHT
},
tcview:{
	flexDirection: 'row',
	width: (Metrics.WIDTH),
	justifyContent: 'center'
},
txtinput:{
	color:'white'
},
inputgroup:{
	backgroundColor:'transparent'
},
and:{
	color: "white",
	fontSize: 12,
	fontFamily: 'SFUIDisplay-Regular'
},
tcmain:{
	marginTop:Metrics.HEIGHT*0.07
},

logo:{
	height:Metrics.HEIGHT*0.13,
	width:Metrics.WIDTH*0.30,
	justifyContent: 'center',
	alignSelf: 'center',
	backgroundColor: 'transparent'
},
btnsec:{
	height: (Metrics.HEIGHT*0.08),
	backgroundColor:'#4cd964',
	alignItems: 'center',
	justifyContent: 'center'
},
btntxt:{
	fontSize:20,
	justifyContent: 'center',
	color:'white',
	backgroundColor: 'transparent'
},

txtsec:{
	borderColor:'#79bedd',
	backgroundColor: 'transparent',
	width: Metrics.WIDTH*0.88,
	alignSelf: 'center',
	justifyContent: 'center',
},
textPolicyDescription:{
	color: "white",
	fontSize: 12,
	fontFamily: "SFUIDisplay-Regular",
	alignSelf: 'center'
},

textTermsCondition:{
	color: Colors.skyblue,
	fontSize: 12,
	fontFamily: "SFUIDisplay-Semibold",
}


});

export default styles;
