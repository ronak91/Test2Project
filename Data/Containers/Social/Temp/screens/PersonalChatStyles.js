
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
  			paddingTop: 5,
  		},
  		android: {
        paddingTop: 5,
      }
  	}),
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

  headerTitle: {
    color: theme.HEADER_TITLE_COLOR,
    fontFamily: 'SFUIDisplay-Bold',
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
    fontSize : 17,
    letterSpacing:0.7
  },

  content: {
    backgroundColor: 'white',
    paddingTop: (theme.HEIGHT*0.04),
  },

  rowMain: {
    marginHorizontal:(theme.WIDTH * 0.03),
  },

  iconSize: {
    width: (theme.HEIGHT * 0.03),
    fontSize: 30,
    color: 'white'
  },

  iconSizeFooter: {
    height: (theme.HEIGHT * 0.04),
    width: (theme.HEIGHT * 0.04),
    resizeMode: 'contain'
  },

  footerStyle: {
    borderTopWidth: 1,
    borderColor:'#848d99',
    backgroundColor: 'white'
  },

  footerLeft: {
    flex:0.6,
    alignItems: 'center'
  },

  footerLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  messageBox: {
    height:(theme.HEIGHT * 0.045),
    width:(theme.WIDTH * 0.69),
    borderWidth: 1,
    borderColor: '#c7c7cc',
    borderRadius: 4
  },

  footerRight: {
    flex:0.6,
    alignItems: 'center'
  },

  footerRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rightChatMain: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginRight: (theme.WIDTH * 0.03),
    marginLeft: (theme.WIDTH * 0.07)
  },

  leftChatMain: {
    flexDirection: 'row',
    marginRight: (theme.WIDTH * 0.25)
  },

  rightChatBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: (theme.HEIGHT*0.012),
    paddingHorizontal: (theme.WIDTH * 0.05),
    borderRadius: 16,
    marginRight: (theme.HEIGHT*0.028),
    zIndex:10
  },

  leftChatBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: (theme.HEIGHT*0.012),
    paddingHorizontal: (theme.WIDTH * 0.05),
    backgroundColor:'#e5e5ea',
    borderRadius: 16,
    zIndex:10
  },

  rightIndicatorMain: {
    alignSelf: 'flex-end',
    height:(theme.HEIGHT*0.025),
    width:(theme.HEIGHT*0.025),
    position: 'absolute',
    right:0,
    flexDirection: 'row'
  },

  leftIndicatorMain: {
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },

  rightIndicator: {
    alignSelf: 'flex-end',
    resizeMode:'contain',
    height:(theme.HEIGHT*0.025),
    width:(theme.HEIGHT*0.025),
    marginRight: (theme.HEIGHT*0.019),
    position: 'absolute',
    zIndex:5,
    right:0,
    bottom:1
  },

  leftIndicator: {
    resizeMode:'contain',
    height:(theme.HEIGHT*0.025),
    width:(theme.HEIGHT*0.025),
    marginLeft: (Platform.OS == 'ios')?(theme.HEIGHT*0.036):(theme.HEIGHT*0.0365),
    position: 'absolute',
    zIndex:5,
    bottom:1
  },

  profile: {
    resizeMode:'cover',
    height:(theme.HEIGHT*0.04),
    width:(theme.HEIGHT*0.04),
    borderRadius:(theme.HEIGHT*0.02),
    margin: 1
  },

});

export default styles;
