import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};
import images from '../../../utils/images';

const TabIcon = (props) => {
  var myTabIcon = []
  if(props.title == 'Nearby'){
    myTabIcon.push(<View style={{alignItems: 'center',marginTop: 10,marginBottom: 10}} key={1}>
    <Image source={(props.focused ? images.nearByActiveIcon : images.nearByIcon)} style={{height: 20,width: 12, justifyContent: 'center'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: 5}}>{props.title}</Text>
    </View>)
  }
  else if(props.title == 'Message'){
    myTabIcon.push(<View key={2} style={{alignItems: 'center', marginTop:10,marginBottom: 10}}>
    <Image source={(props.focused ? images.messageActiveIcon : images.messageIcon)} style={{height: 18,width: 19, justifyContent: 'center'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: 5}}>{props.title}</Text>
    </View>)
  }
  else if(props.title == 'Discovery'){
    myTabIcon.push(<View key={3} style={{alignItems: 'center', marginTop: 10,marginBottom: 10}}>
    <Image source={(props.focused ? images.discoveryActiveIcon : images.discoveryIcon)} style={{height: 18,width: 18, justifyContent: 'center'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: 5}}>{props.title}</Text>
    </View>)
  } else if(props.title == 'Favorite'){
    myTabIcon.push(<View key={3} style={{alignItems: 'center', marginTop: 10,marginBottom: 10}}>
    <Image source={(props.focused ? images.favouriteActiveIcon : images.favouriteIcon)} style={{height: 18,width: 21, justifyContent: 'center'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: 5}}>{props.title}</Text>
    </View>)
  } else if(props.title == 'Profile'){
    myTabIcon.push(<View key={3} style={{alignItems: 'center', marginTop: 10,marginBottom: 10}}>
    <Image source={(props.focused ? images.profileActiveIcon : images.profileIcon)} style={{height: 18,width: 18, justifyContent: 'center'}}/>
    <Text style={{color: props.focused ? '#ff7354' : 'grey',marginTop: 5}}>{props.title}</Text>
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
