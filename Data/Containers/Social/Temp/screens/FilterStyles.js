
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import images from '../../../../utils/images';
import theme from '../../../../utils/theme';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({

  header: {
    backgroundColor: 'transparent',
  	height: 65,
  	width: theme.WIDTH,
  	flexDirection: 'row',
  	...Platform.select({
  		ios: {
  			paddingTop: 15,
  		},
  		android: {
        paddingTop: 15,
      }
  	}),
  },

  headerBG: {
    height: 65,
    width: theme.WIDTH,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftMsg: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: 'white'
  },

  body: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    flex: 1.1,
    alignItems: 'center',
    marginRight: (theme.WIDTH * 0.02),
    paddingTop: (Platform.OS === 'ios')? 5 : 0,
  },

  content: {
    backgroundColor: '#f2f2f2',
    height: (theme.HEIGHT)
  },

  iconSize: {
    width: (theme.HEIGHT * 0.03),
    fontSize: 30,
    color: 'white'
  },

  styleGradient: {
    height: (theme.HEIGHT * 0.038),
    width: (theme.WIDTH * 0.48),
    borderRadius: (theme.HEIGHT * 0.02),
  },

  leftBtnRadius: {
    borderTopLeftRadius: (theme.HEIGHT * 0.02),
    borderBottomLeftRadius: (theme.HEIGHT * 0.02),
  },

  rightBtnRadius: {
    borderTopRightRadius: (theme.HEIGHT * 0.02),
    borderBottomRightRadius: (theme.HEIGHT * 0.02),
  },

  segmentTabSec: {
    height: (theme.HEIGHT * 0.038),
    width: (theme.WIDTH * 0.48),
    borderRadius: (theme.HEIGHT * 0.02),
    backgroundColor: 'transparent',
  },

  selectedSegmentTab: {
    height: (theme.HEIGHT * 0.038),
    width: (theme.WIDTH * 0.16),
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'visible'
  },

  segmentTab: {
    height: (theme.HEIGHT * 0.038),
    width: (theme.WIDTH * 0.16),
    backgroundColor: '#e6e6e6',
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'hidden'
  },

  activeTab: {
    fontSize: 12,
    fontFamily: 'SFUIDisplay-Regular',
    color: 'white'
  },

  normalTab: {
    fontSize: 12,
    fontFamily: 'SFUIDisplay-Regular',
    color: '#666666'
  },

  listHeader: {
    width:(theme.WIDTH),
    height:(theme.HEIGHT*0.065),
    marginLeft:(theme.WIDTH*0.05),
    alignItems:'flex-start',
    justifyContent:'center'
  },

  listHeaderText: {
    color:'#9f9f9f',
    fontFamily:'SFUIDisplay-Regular',
    fontSize:18
  },

  listMain: {
    backgroundColor: 'white',
    paddingLeft: (theme.WIDTH*0.005)
  },

  listGenderMain: {
    justifyContent: 'space-between',
    height:(theme.HEIGHT*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 0.5
  },

  listTitle: {
    color:'#4c4c4c',
    fontFamily:'SFUIDisplay-Regular',
    fontSize:18
  },

  listAgeMain: {
    justifyContent: 'space-between',
    height:(theme.HEIGHT*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 1
  },

  listAgeRight: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listRightText: {
    color:'#a5a5a5',
    fontFamily:'SFUIDisplay-Regular',
    fontSize:18
  },

  arrowForword: {
    color:'#c7c7cc',
    paddingLeft: (theme.WIDTH*0.02),
    fontSize: 30
  },

  markerStyle: {
    height:(theme.HEIGHT*0.035),
    width: (theme.HEIGHT*0.035),
    backgroundColor:'#f87362',
    borderWidth: 0.5,
    borderColor: '#fa6982'
  },

  containerStyle: {
    alignSelf: 'center',
    height:5
  },

  trackStyle: {
    height: (theme.HEIGHT*0.005),
    borderRadius: 4
  },

  listDistanceMain: {
    justifyContent: 'space-between',
    height:(theme.HEIGHT*0.08),
    borderColor: 'transparent'
  },

  listDistanceRight: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  arrowBack: {
    color:'#c7c7cc',
    paddingRight: (theme.WIDTH*0.02),
    fontSize: 30
  },
});

export default styles;
