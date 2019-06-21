import React from 'react';
import PropTypes from 'prop-types';
import { Text,View,Image,StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors,Images } from '../../../Themes/';

const styles = StyleSheet.create({
  tabItemBg: {
    alignItems: 'center',
    marginTop: (Metrics.WIDTH * 0.035),
    marginBottom: (Metrics.WIDTH * 0.035),
  },

  tabIcon: {
    justifyContent: 'center',
    resizeMode: 'contain'
  },

});


const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};


const TabIcon = (props) => {
  var myTabIcon = []
  if(props.title == 'Nearby'){
    myTabIcon.push(<View style={styles.tabItemBg} key={1}>
    <Image source={(props.focused ? Images.nearByActiveIcon : Images.nearByIcon)} style={[{height: (Metrics.WIDTH * 0.052),width: (Metrics.WIDTH * 0.03),marginTop: -2},styles.tabIcon]}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: (Metrics.WIDTH * 0.008),fontSize: Fonts.moderateScale(13)}}>{props.title}</Text>
    </View>)
  }
  else if(props.title == 'Message'){
    myTabIcon.push(<View key={2} style={styles.tabItemBg}>
    <Image source={(props.focused ? Images.messageActiveIcon : Images.messageIcon)} style={[{height: (Metrics.WIDTH * 0.045),width: (Metrics.WIDTH * 0.05)},styles.tabIcon]}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: (Metrics.WIDTH * 0.008),fontSize: Fonts.moderateScale(13)}}>{props.title}</Text>
    </View>)
  }
  else if(props.title == 'Discovery'){
    myTabIcon.push(<View key={3} style={styles.tabItemBg}>
    <Image source={(props.focused ? Images.discoveryActiveIcon : Images.discoveryIcon)} style={{height: (Metrics.WIDTH * 0.045),width: (Metrics.WIDTH * 0.045), justifyContent: 'center',resizeMode: 'contain'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: (Metrics.WIDTH * 0.008),fontSize: Fonts.moderateScale(13)}}>{props.title}</Text>
    </View>)
  } else if(props.title == 'Favorite'){
    myTabIcon.push(<View key={3} style={styles.tabItemBg}>
    <Image source={(props.focused ? Images.favouriteActiveIcon : Images.favouriteIcon)} style={{height: (Metrics.WIDTH * 0.046),width: (Metrics.WIDTH * 0.046), justifyContent: 'center',resizeMode: 'contain'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: (Metrics.WIDTH * 0.008),fontSize: Fonts.moderateScale(13)}}>{props.title}</Text>
    </View>)
  } else if(props.title == 'Profile'){
    myTabIcon.push(<View key={3} style={styles.tabItemBg}>
    <Image source={(props.focused ? Images.profileActiveIcon : Images.profileIcon)} style={{height: (Metrics.WIDTH * 0.045),width: (Metrics.WIDTH * 0.045), justifyContent: 'center',resizeMode: 'contain'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: (Metrics.WIDTH * 0.008),fontSize: Fonts.moderateScale(13)}}>{props.title}</Text>
    </View>)
  } else {
    myTabIcon.push(<View key={4} style={{alignItems: 'center'}}>
    <Image style={{width:25,height:25}} source={Images.gflagicon}/>
    <Text style={{color: props.focused ? '#ff7354' : 'yellow'}}>{props.title}</Text>
    </View>)
  }

  return myTabIcon
};

TabIcon.propTypes = propTypes;

export default TabIcon;
