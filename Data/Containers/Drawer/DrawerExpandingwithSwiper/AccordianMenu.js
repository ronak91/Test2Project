import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, I18nManager} from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';

export default  class AccordionMenu extends Component{
    constructor(props){
        super(props);
        this.state = { expanded : false };
    }
    toggle(){
        this.setState({
            expanded : !this.state.expanded
        });
    }
    render(){
      var mainbg = ''
      var arrowIcon = ''
        if(this.state.expanded){
          mainbg = '#21243a'
          arrowIcon = 'ios-arrow-down-outline'
        } else {
          mainbg = '#292d48'
          arrowIcon = I18nManager.isRTL ? 'ios-arrow-back-outline' : 'ios-arrow-forward-outline'
        }
        return (
            <View style={[styles.container,{backgroundColor: mainbg}]}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity
                        onPress={this.toggle.bind(this)}
                        underlayColor="transparent">
                        <View style={styles.titleCollapse}>
                          <View style={styles.headerTitle}>
                            <Text style={styles.Header}>{this.props.title}</Text>
                            <Ionicons name={arrowIcon} size={20} color='#54576d' />
                          </View>
                        </View>
                    </TouchableOpacity>
                </View>

               {
                   this.state.expanded && (
                     <View style={styles.body}>
                       <Text style={styles.sampleText}>CHOOSE A CATEGORIE</Text>
                        <View style={styles.bodyText}>
                          <View style={styles.wrapperSwiper}>
                              <Swiper
                                showsButtons={false}
                                autoplay={false}
                                autoplayTimeout={2.5}
                                activeDot={<View style={styles.activeDot}></View>}
                                dot={<View style={styles.dot}></View>}>

                                {
                                    this.props.submenuList.map((submenuTitle,value)=>{
                                    return (
                                      <View key={"submenuview_" + (value)} >
                                        <View>
                                          <View style={styles.submenuRow}>
                                            <View style={[styles.swcatSec,{backgroundColor: '#f8d411'}]}>
                                              <MaterialCommunityIcons name='sofa' color='#fff' size={18}/>
                                            </View>
                                            <View style={[styles.swcatSec,{backgroundColor: '#6f26fa'}]}>
                                              <FontAwesome name='building' color='#fff' size={18}/>
                                            </View>
                                            <View style={[styles.swcatSec,{backgroundColor: '#f23d5c'}]}>
                                              <MaterialCommunityIcons name='glassdoor' color='#fff' size={18}/>
                                            </View>
                                            <View style={[styles.swcatSec,{backgroundColor: '#2874fb'}]}>
                                              <MaterialCommunityIcons name='fan' color='#fff' size={18}/>
                                            </View>
                                          </View>
                                          <View style={styles.submenuRow}>
                                            <View style={[styles.swcatSec,{backgroundColor: '#ff308e'}]}>
                                              <FontAwesome name='bed' color='#fff' size={18}/>
                                            </View>
                                            <View style={[styles.swcatSec,{backgroundColor: '#20cbf3'}]}>
                                              <Entypo name='tv' color='#fff' size={18}/>
                                            </View>
                                            <View style={[styles.swcatSec,{backgroundColor: '#fa9301'}]}>
                                              <FontAwesome name='bathtub' color='#fff' size={18}/>
                                            </View>
                                            <View style={[styles.swcatSec,{backgroundColor: '#49cc5c'}]}>
                                              <Entypo name='light-bulb' color='#fff' size={18}/>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    )
                                  })
                                }

                              </Swiper>
                            </View>
                        </View>
                     </View>)
               }

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
      backgroundColor: '#292d48',
      // marginTop: 20,
      // overflow: 'hidden',
    },
    titleContainer : {
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 0.5,
      borderColor: '#1a1d2e',
    },
    titleCollapse:{
      flexDirection: 'row',
    },
    headerTitle:{
      width: (Metrics.WIDTH),
      flexDirection: 'row',
      padding: 7,
      paddingLeft: 15,
      alignItems: 'center',
    },
    Header: {
        width: Metrics.WIDTH * 0.90,
        paddingTop : 10,
        paddingBottom : 10,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    },
    body: {
        paddingLeft: 15,
        paddingRight: 5,
        paddingTop  : 0,
        width: (Metrics.WIDTH * 0.90),
    },
    bodyText:{
      // backgroundColor: 'grey',
      // paddingLeft: Metrics.WIDTH * 0.15
      // color: '#4A4A4A',
      // fontSize: 16,
    },
    wrapperSwiper:{
      width: (Metrics.WIDTH * 0.90),
      height: (Metrics.WIDTH * 0.55),
      marginTop: 10,
    },
    dot:{
    	backgroundColor:'#4d5061',
    	width:  7,
    	height: 7,
    	borderRadius: 5,
    	marginLeft: 2,
    	marginRight: 2,
    },

    activeDot:{
    	backgroundColor:'#fff',
    	width:  7,
    	height: 7,
    	borderRadius: 5,
    	marginLeft: 2,
    	marginRight: 2,
    },
    submenuRow:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    swcatSec:{
       width: Metrics.WIDTH * 0.18,
       height: Metrics.WIDTH * 0.18,
       borderRadius: Metrics.WIDTH * 0.09,
       borderColor: 'transparent',
       marginTop: 10,
       marginLeft: 6,
       marginRight: 6,
       borderWidth: 1,
       justifyContent: 'center',
       alignItems: 'center'
    },
    sampleText:{
      color: '#495078',
      fontFamily: Fonts.type.sfuiDisplayLight,
      fontSize: 10,
      marginTop: 10
    },
});
