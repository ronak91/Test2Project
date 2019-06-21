import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  ScrollView
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Footer,
  FooterTab,
  Left,
  Body,
  Title,
  Content,
  Form,
  Label
} from "native-base";
import Swiper from "react-native-swiper";
// Screen Styles
import styles from "./tabliststyle";
const { width, height } = Dimensions.get("window");

/**
 *  Profile Screen
 */
export default class TabList extends Component {
  constructor(props) {
    super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    const dataObjects = [
      {
        id: 1,
        name: "Johnie Cornwall",
        profile:
          "https://antiqueruby.aliansoftware.net//Images/social/card_propic_01_sc12.png",
        uploadImage:
          "https://antiqueruby.aliansoftware.net//Images/social/item_profile_01_sc12.png",
        comment: "Home in Torquay by My Architect",
        location: "Torquay, Australia.",
        time: "8 mins"
      },
      {
        id: 2,
        name: "Tim Droney",
        profile:
          "https://antiqueruby.aliansoftware.net//Images/social/card_propic_02_sc12.png",
        uploadImage:
          "https://antiqueruby.aliansoftware.net//Images/social/item_profile_02_sc12.png",
        comment: "Modern House by Maraya Interior Design",
        location: "Ojai, California",
        time: "30 mins"
      },
      {
        id: 3,
        name: "Zhaoyang",
        profile:
          "https://antiqueruby.aliansoftware.net//Images/social/card_propic_03_sc12.png",
        uploadImage:
          "https://antiqueruby.aliansoftware.net//Images/social/item_03_sc12.png",
        comment: "Zhu’an Residence by Zhaoyang Architects",
        location: "Dali, China",
        time: "8 mins"
      },
      {
        id: 4,
        name: "Johnie Cornwall",
        profile:
          "https://antiqueruby.aliansoftware.net//Images/social/card_propic_04_sc12.png",
        uploadImage:
          "https://antiqueruby.aliansoftware.net//Images/social/item_04_sc12.png",
        comment: "Modern Home by DIJ Group",
        location: "Toronto, Canada",
        time: "8 mins"
      }
    ];

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  _renderRow(rowData) {
    return (
      <View style={styles.rowMain}>
        <Image source={{ uri: rowData.uploadImage }} style={styles.rowImage} />
        <View style={styles.rowConTitle}>
          <Text numberOfLines={2} style={styles.rowTitle}>
            {rowData.comment}
          </Text>
          <View style={styles.rowLocation}>
            <Image source={Images.location} style={styles.iconSize} />
            <Text numberOfLines={1} style={styles.locationText}>
              {rowData.location}
            </Text>
          </View>
        </View>
        <View style={styles.rowdevider} />
        <View style={styles.rowProfile}>
          <Image source={{ uri: rowData.profile }} style={styles.rowProImage} />
          <View style={styles.subRow}>
            <Text numberOfLines={1} style={styles.profileName}>
              {rowData.name}
            </Text>
            <Text style={styles.timeText}>{rowData.time}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.tabcontain}>
        <Content style={styles.slidesec}>
          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}
          />
        </Content>
      </Container>
    );
  }
}
