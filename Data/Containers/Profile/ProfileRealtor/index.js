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
  Icon
} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
// Screen Styles
import styles from "./styles";
import Tablist from "./Tablist.js";
import Swiper from "react-native-swiper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native-animatable";
import { Images } from "../../../Themes";
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const NewsRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const VideoRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const EventRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const BooksRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);

const headerBg =
  "https://antiqueruby.aliansoftware.net//Images/profile/backg_top_p05.png";
const ProfileImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/profile_image.jpg";

export default class ProfileRealtor extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      // that.props.navigation.navigate('Home')
      that.props.navigation.navigate("Profile");
      return true;
    });
  }
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

  _getLabelText = ({ route }) => route.title;

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      pressLabelColor="#FFFFFF"
      getLabelText={this._getLabelText}
      tabBarSelectedButtonColor="#FFFFFF"
      tabBarButtonColor="#9c9ead"
      labelStyle={styles.label}
      indicatorStyle={styles.indicatorstyles}
      style={styles.tabbarstyle}
    />
  );

  _renderScene = SceneMap({
    News: NewsRoute,
    videos: VideoRoute,
    events: EventRoute,
    books: BooksRoute
  });
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
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <ImageBackground
          source={{ uri: headerBg }}
          style={styles.titleBarStyle}
        >
          <TouchableOpacity
            style={styles.backicon}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Icon
              name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"}
              style={styles.backArrow2}
            />
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <View style={styles.profileBodySec}>
              <Image
                source={{ uri: ProfileImage }}
                style={styles.profileImage}
              />
              <View style={styles.profileDetail}>
                <Text style={styles.names}>Johnie Cornwall</Text>
                <Text style={styles.email}>johnie_cornwall@gmail.com</Text>
              </View>
            </View>
            <TouchableOpacity
              style={
                this.state.isFavorite
                  ? styles.activeButton
                  : styles.normalButton
              }
              onPress={() =>
                this.setState({ isFavorite: !this.state.isFavorite })
              }
            >
              <Icon name="ios-heart" style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={"#383d5a"}
          tabBarActiveTextColor={"white"}
          tabBarInactiveTextColor={"#9c9ead"}
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
