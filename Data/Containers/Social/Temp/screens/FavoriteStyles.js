
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
    flexDirection: 'column',
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

  searchIcon: {
    width: 17,
    height: 17,
  },

  filterTxt: {
    fontSize: moderateScale(16),
    fontFamily: "SFUIDisplay-Regular",
    color: "#FFFFFF",
  },

  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    alignContent:'flex-start',
  },

  rowMain:{
      backgroundColor:'rgba(0,0,0,0.5)',
      width: (theme.WIDTH * 0.50),
      height:205,
      alignItems:'center',
      alignItems:'flex-start',
      alignContent:'flex-start',
  },

  imgContainer: {
    width: (theme.WIDTH * 0.50),
    height:205,
  },

  shadowBg: {
    width: (theme.WIDTH * 0.50),
    height:205,
    bottom: 0,
    position:'absolute',
    resizeMode: 'cover'
  },

  profileImage: {
    width: (theme.WIDTH) * 0.08,
    height: (theme.WIDTH) * 0.08,
    borderRadius: (theme.WIDTH) * 0.04,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    marginTop: 1
  },

  likeIcon: {
    width: 19,
    height: 16,
    resizeMode: 'cover'
  },

  nameTxt: {
    fontSize: moderateScale(12),
    color: "#FFFFFF",
    fontFamily: "SFUIDisplay-Regular",
    backgroundColor: 'transparent',
    marginTop: -1
  },

  watchIcon: {
    width: 10,
    height: 10,
    backgroundColor: 'transparent',
    marginTop: 3
  },

  watchDistanceTxt: {
    fontSize: moderateScale(12),
    color: "#FFFFFF",
    fontFamily: "SFUIDisplay-Regular",
    backgroundColor: 'transparent',
    marginLeft: 3,
  },


});

export default styles;
