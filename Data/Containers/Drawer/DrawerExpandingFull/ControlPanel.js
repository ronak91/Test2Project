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
        title: 'Dairy Products',
        color: '#241445',
        micon: Images.Dairy,
        details: [
          {
            submenu: 'Butter',
          },
          {
            submenu: 'Sour Cream',
          },
          {
            submenu: 'Cheese Cream',
          },
          {
            submenu: 'Yogurt',
          },
          {
            submenu: 'Parmesan',
          },
        ],
      },
      {
        title: 'Meat',
        color: '#20cbf3',
        micon: Images.Meat,
        details: [
          {
            submenu: 'Bacon',
          },
          {
            submenu: 'Ham',
          },
          {
            submenu: 'Hot dogs',
          },
          {
            submenu: 'Jamon',
          },
        ],
      },
      {
        title: 'Fruits',
        color: '#fa9301',
        micon: Images.Fruit,
        details: [
          {
            submenu: 'Apple',
          },
          {
            submenu: 'Pomegranate',
          },
          {
            submenu: 'Lichee',
          },
        ],
      },
      {
        title: 'Vegetables',
        color: '#49cc5c',
        micon: Images.Vagitable,
        details: [
          {
            submenu: 'Tomato',
          },
          {
            submenu: 'Carrot',
          },
          {
            submenu: 'Cabbage',
          },
          {
            submenu: 'Chilly',
          },
        ],
      },
      {
        title: 'Fish',
        color: '#6f26fa',
        micon: Images.Fish,
        details: [
          {
            submenu: 'Shark',
          },
          {
            submenu: 'Pollock',
          },
          {
            submenu: 'llish',
          },
          {
            submenu: 'Brill',
          },
        ],
      },
      {
        title: 'Breads & Pastries',
        color: '#f8d411',
        micon: Images.BreadAndPastries,
        details: [
          {
            submenu: 'Bun',
          },
          {
            submenu: 'Poppy seed roll',
          },
          {
            submenu: 'Muffins',
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
