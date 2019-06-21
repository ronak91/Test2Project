import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import AccordianMenu from './AccordianMenu';
import styles from './styles';
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class ControlPanel extends Component {
  render() {
    var data = [
      {
        title: 'Home, Light & Construction',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Health & Beauty',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Gifts, Sports & Toys',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Electronics',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Bags, Shoes & Accessories',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Auto & Transportation',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          }, 
        ],
      },
    ]
    return (
      <View>
        <View style={styles.menuListSec}>
          <ScrollView>
            {
              data.map((menu,value)=>{
                return (
                  <AccordianMenu title={menu.title} bgColors={menu.color} submenuList={menu.details} menuIcon={menu.micon} key={"menuview_" + (value)}>
                  </AccordianMenu>
                );
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}
