import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, I18nManager} from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

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

        return (
            <View style={[styles.container,{backgroundColor: this.props.bgColors}]}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity
                        onPress={this.toggle.bind(this)}
                        underlayColor="transparent">
                        <View style={styles.titleCollapse}>
                          <View style={styles.headerTitle}>
                            <Image source={this.props.menuIcon} style={{width: 28, height: 24,}}/>
                            <Text style={styles.Header}>{this.props.title}</Text>
                          </View>
                        </View>
                    </TouchableOpacity>
                </View>

               {
                   this.state.expanded && (
                     <View style={styles.body}>
                        <View style={styles.bodyText}>
                          {
                            this.props.submenuList.map((submenuTitle,value)=>{
                              return (
                                <TouchableWithoutFeedback onPress={()=>alert(submenuTitle.submenu)}>
                                  <Text key={"submenuview_" + (value)} style={styles.Header}>{submenuTitle.submenu}</Text>
                                </TouchableWithoutFeedback>
                              )
                            })
                          }
                        </View>
                     </View>)
               }

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      // marginTop: 20,
      // overflow: 'hidden',
    },
    titleContainer : {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    titleCollapse:{
      flexDirection: 'row',
    },
    headerTitle:{
      width: (Metrics.WIDTH),
      flexDirection: 'row',
      padding: 8,
      alignItems: 'center',
    },
    Header: {
        width: Metrics.WIDTH,
        paddingTop : 10,
        paddingLeft: I18nManager.isRTL ? 0 : 7,
        paddingRight: I18nManager.isRTL ? 7 : 0,
        paddingBottom : 10,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    },
    body: {
        paddingLeft: 25,
        paddingRight: 5,
        paddingTop  : 0,
        width: (Metrics.WIDTH),
    },
    bodyText:{
      // backgroundColor: 'grey',
      paddingLeft: Metrics.WIDTH * 0.15
      // color: '#4A4A4A',
      // fontSize: 16,
    },
});
