import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Header
} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
// Screen Styles
import styles from "./styles";
import { View } from "react-native-animatable";
import Tablist from "./Tablist.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";

/**
 *  Social14 Screen
 */
export default class Social14 extends Component {
  constructor(props) {
    super(props);

    const cardImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/card_01_sc14.png";
    const cardImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/card_02_sc14.png";
    const cardImageThree =
      "https://antiqueruby.aliansoftware.net//Images/social/card_03_sc14.png";
    const cardImageFour =
      "https://antiqueruby.aliansoftware.net//Images/social/card_04_sc14.png";
    const cardImageFive =
      "https://antiqueruby.aliansoftware.net//Images/social/card_05_sc14.png";
    const cardImageSix =
      "https://antiqueruby.aliansoftware.net//Images/social/card_06_sc14.png";
    const profileImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
    const profileImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
    const profileImageThree =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_suggested_user_three_sone.png";

    const dataObjects = [
      {
        id: 1,
        cardBgImage: { uri: cardImageOne },
        likeCount: 12,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } },
          { img: { uri: profileImageThree } }
        ]
      },
      {
        id: 2,
        cardBgImage: { uri: cardImageTwo },
        likeCount: 1,
        likeUserImages: [{ img: { uri: profileImageThree } }]
      },
      {
        id: 3,
        cardBgImage: { uri: cardImageThree },
        likeCount: 1,
        likeUserImages: [{ img: { uri: profileImageTwo } }]
      },
      {
        id: 4,
        cardBgImage: { uri: cardImageFour },
        likeCount: 2,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } }
        ]
      },
      {
        id: 5,
        cardBgImage: { uri: cardImageFive },
        likeCount: 2,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } }
        ]
      },
      {
        id: 6,
        cardBgImage: { uri: cardImageSix },
        likeCount: 5,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } },
          { img: { uri: profileImageThree } }
        ]
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Social");
      return true;
    });
  }

  _renderRow(rowData) {
    return (
      <View style={styles.rowMain}>
        <ImageBackground source={rowData.cardBgImage} style={styles.imageBG}>
          <View style={styles.cardContent}>
            <TouchableOpacity
              style={styles.likeImage}
              onPress={() => alert("Like")}
            >
              <FontAwesome name="heart" size={16} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.likeCountText}>{rowData.likeCount}</Text>
            <Right>
              <View style={styles.profileContainer}>
                {rowData.likeUserImages.map((item, index) => {
                  return (
                    <View key={index} style={styles.profileImgView}>
                      <Image style={styles.profileImg} source={item.img} />
                    </View>
                  );
                })}
              </View>
            </Right>
          </View>
        </ImageBackground>
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    var that = this;
    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => that.props.navigation.navigate("Social")}
            >
              <View style={styles.menuBtnView}>
                {I18nManager.isRTL ? (
                  <MaterialIcons name="chevron-right" size={25} color="white" />
                ) : (
                  <MaterialIcons name="chevron-left" size={25} color="white" />
                )}

                <View style={styles.alertRed} />
              </View>
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Timeline</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Search")}>
              <Ionicons name="ios-search" size={25} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={"#383d5a"}
          tabBarActiveTextColor={"white"}
          tabBarInactiveTextColor={"rgba(255,255,255,0.4)"}
          tabBarTextStyle={styles.tabText}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <View tabLabel="Photos">
            <ListView
              contentContainerStyle={styles.listContent}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>

          <View tabLabel="Videos">
            <ListView
              contentContainerStyle={styles.listContent}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>

          <View tabLabel="Events">
            <ListView
              contentContainerStyle={styles.listContent}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>

          <View tabLabel="Books">
            <ListView
              contentContainerStyle={styles.listContent}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>
        </ScrollableTabView>
      </Container>
    );
  }
}
