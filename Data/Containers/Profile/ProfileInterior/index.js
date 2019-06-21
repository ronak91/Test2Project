import React, { Component } from "react";
import {
  Text,
  ListView,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
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
  Header,
  Title,
  Icon
} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
// Screen Styles
import styles from "./styles";
import Tablist from "./Tablist.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native-animatable";
import Swiper from "react-native-swiper";

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";

/**
 *  Profile Screen
 */
const profileBg =
  "https://antiqueruby.aliansoftware.net//Images/profile/collapse_toolbar_image_ptwo.png";
const cardBgOne =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_one_ptwo.png";
const cardBgTwo =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_two_ptwo.png";
const cardBgThree =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_three_ptwo.png";
const cardBgFour =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_four_ptwo.png";
const cardBgFive =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_five_ptwo.jpg";
const cardBgSix =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_six_ptwo.jpg";
const profileImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_18.png";

export default class ProfileInterior extends Component {
  constructor(props) {
    super(props);

    const dataObjects = [
      {
        id: 1,
        cardBgImage: { uri: cardBgOne },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australia",
        name: "Johnie Corn",
        time: "8 mins"
      },
      {
        id: 2,
        cardBgImage: { uri: cardBgTwo },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "30 mins"
      },
      {
        id: 3,
        cardBgImage: { uri: cardBgThree },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australiajk",
        name: "Johnie Corn",
        time: "27 mins"
      },
      {
        id: 4,
        cardBgImage: { uri: cardBgFour },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "56 mins"
      },
      {
        id: 5,
        cardBgImage: { uri: cardBgFive },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australia",
        name: "Johnie Corn",
        time: "5 mins"
      },
      {
        id: 6,
        cardBgImage: { uri: cardBgSix },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "19 mins"
      },
      {
        id: 5,
        cardBgImage: { uri: cardBgFive },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australia",
        name: "Johnie Corn",
        time: "5 mins"
      },
      {
        id: 6,
        cardBgImage: { uri: cardBgSix },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "19 mins"
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
      // that.props.navigation.navigate('Home')
      that.props.navigation.navigate("Profile");
      return true;
    });
  }

  _renderRow(rowData) {
    return (
      <View style={styles.rowMain}>
        <Image source={rowData.cardBgImage} style={styles.cardBgImage} />
        <View style={styles.cardContent}>
          <Text style={styles.titleTxt}>{rowData.title}</Text>
          <View style={styles.addressBg}>
            <Ionicons
              name="ios-pin"
              size={16}
              color="grey"
              style={{
                justifyContent: "center",
                backgroundColor: "transparent",
                alignItems: "center",
                alignSelf: "center"
              }}
            />
            <Text style={styles.addressTxt}>{rowData.addrss}</Text>
          </View>
          <View style={styles.dividerHorizontal} />
          <View style={styles.profileBg}>
            <Image source={rowData.profileImage} style={styles.profileImg} />
            <View style={styles.nameTimeBg}>
              <Text style={styles.nameTxt}>{rowData.name}</Text>
              <Text style={styles.timeTxt}>{rowData.time}</Text>
            </View>
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

    const imageUri =
      "https://antiqueruby.aliansoftware.net//Images/profile/ic_bg_profile_one.png";
    const profileImgUri =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.jpg";

    return (
      <Container style={styles.main}>
        <ImageBackground style={styles.mainimg} source={{ uri: profileBg }}>
          <Header androidStatusBarColor={"transparent"} style={styles.header}>
            {/* Take up the space */}
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </Left>

            {/* Title */}
            <Body style={styles.body}>
              <Title style={styles.title}>Profiles</Title>
            </Body>

            {/* Right Icon */}
            <Right style={styles.left}>
              <TouchableOpacity onPress={() => alert("Settings")}>
                <Ionicons name="ios-settings" size={20} color="white" />
              </TouchableOpacity>
            </Right>
          </Header>
          <Image source={{ uri: profileImgUri }} style={styles.userimg} />
        </ImageBackground>
        <View style={styles.userinfo}>
          <View style={styles.followerFollowingBg}>
            <Text style={styles.followerFollowingCountTxt}>14k</Text>
            <Text style={styles.followerFollowingTxt}>Followers</Text>
          </View>
          <View style={styles.followerFollowingBg}>
            <Text style={styles.followerFollowingCountTxt}>11k</Text>
            <Text style={styles.followerFollowingTxt}>Following</Text>
          </View>
        </View>
        <Text style={styles.nameTxts}>Johnie Cornwall</Text>
        <Text style={styles.designationTxt}>Graphic Design</Text>
        <TouchableOpacity
          style={styles.followTxtBg}
          onPress={() => alert("FOLLOW")}
        >
          <Text style={styles.followTxt}>FOLLOW</Text>
        </TouchableOpacity>
        {/*<View style={styles.dividerHorizontal}></View>*/}
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={"transparent"}
          tabBarActiveTextColor={"#6f6f6f"}
          tabBarInactiveTextColor={"#6f6f6f"}
          tabBarTextStyle={styles.tabText}
          renderTabBar={() => (
            <ScrollableTabBar
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0,
                shadowRadius: 0,
                elevation: 0,
                borderWidth: 0,
                borderColor: "transparent"
              }}
            />
          )}
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
