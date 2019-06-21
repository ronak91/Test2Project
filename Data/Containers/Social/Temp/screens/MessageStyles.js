
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import images from '../../../../utils/images';
import theme from '../../../../utils/theme';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({

  main: {
    height: theme.HEIGHT,
    width: theme.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  titleTxt: {
    fontSize: moderateScale(20),
    fontFamily: "SFUIDisplay-Semibold",
    color: 'red',
    alignSelf: 'center',
    marginTop: 100
  },

  header: {
    backgroundColor: 'transparent',
  	height: 65,
  	width: theme.WIDTH,
  	flexDirection: 'row',
  	...Platform.select({
  		ios: {
  			paddingTop: 5,
  		},
  		android: {
        paddingTop: 5,
      }
  	}),
  },

  left: {
    flex: 1,
  },

  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: theme.HEADER_TITLE_COLOR,
    fontFamily: 'SFUIDisplay-Bold',
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
    fontSize : 17,
    letterSpacing:0.7
  },

  content: {
    backgroundColor: 'white',
  },

  rowMain: {
    marginLeft:(theme.WIDTH * 0.08),
  },

  listContent: {
    height:(theme.HEIGHT*0.095),
    marginVertical: (theme.HEIGHT*0.01),
    flexDirection: 'row'
  },

  profile: {
    height: (theme.HEIGHT*0.07),
    width: (theme.HEIGHT*0.07),
    borderRadius: (theme.HEIGHT*0.035),
    marginRight: (theme.WIDTH*0.03),
    alignSelf: 'center'
  },

  subRow: {
    width:(theme.WIDTH*0.73)
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerText: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 17,
    color: 'black'
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  time: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: '#8f8f94',
    marginRight: (theme.WIDTH*0.02)
  },

  arrowForward: {
    fontSize: 22,
    color:'#c7c7cc'
  },

  recentMsg: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: '#8f8f94',
    marginTop: (Platform.OS === 'ios')?(theme.HEIGHT*0.003):0
  },

  iconSize: {
    height: (theme.HEIGHT * 0.035),
    width: (theme.HEIGHT * 0.035),
    resizeMode: 'contain'
  },

  swipeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height:(theme.HEIGHT * 0.12)
  },

  separatorStyle: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }

});

export default styles;
