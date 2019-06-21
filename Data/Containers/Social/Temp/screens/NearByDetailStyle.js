
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
    backgroundColor: "transparent",
    flexDirection: 'column'
  },

  header: {
    backgroundColor: '#fa6b7b',
    height: 60,
    width: theme.WIDTH,
    flexDirection: 'row',
    borderBottomColor: '#fa6b7b',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
},

  downArrowIcon: {
    width: 12,
    height: 15,
    resizeMode: 'cover'
  },

  optionIcon: {
    width: 4,
    height: 15,
    resizeMode: 'contain'
  },

  shadowBg: {
    width: theme.WIDTH,
    height: (theme.HEIGHT) * 0.85,
    bottom: 0,
    position:'absolute',
    resizeMode: 'cover'
  },

  profileImage: {
    width: (theme.WIDTH) * 0.14,
    height: (theme.WIDTH) * 0.14,
    borderRadius: (theme.WIDTH) * 0.07,
    borderColor: "#FFFFFF",
    borderWidth: 1
  },

  likeIcon: {
    width: 35,
    height: 30,
    marginTop: -5,
    resizeMode: 'contain'
  },

  nameTxt: {
    fontSize: moderateScale(20),
    color: "#FFFFFF",
    fontFamily: "SFUIDisplay-Regular",
    backgroundColor: 'transparent'
  },

  watchIcon: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    marginTop: 8
  },

  watchDistanceTxt: {
    fontSize: moderateScale(16),
    color: "#FFFFFF",
    fontFamily: "SFUIDisplay-Regular",
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginTop: 4
  },

  mapPin: {
    width: 10,
    height: 15,
    marginLeft: 25,
    backgroundColor: 'transparent',
    marginTop: 6,
    resizeMode: 'cover'
  },

  albumIcon: {
    width: 24,
    height: 24,
  },

  galleryImgTxt: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
    fontFamily: "SFUIDisplay-Regular",
    marginLeft: 8
  }

});

export default styles;
