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
  Header,
  Body,
  Right,
  Left,
  Title,
  Icon,
  ListItem,
  Content
} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
// Screen Styles
import styles from "./styles";
import { View } from "react-native-animatable";
import Tablist from "./Tablist.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";
/**
 *  Profile Screen
 */
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const profileImage =
  "https://antiqueruby.aliansoftware.net/Images/profile/profile_image.jpg";

export default class ProfileMusic extends Component {
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

  _renderRow(rowData) {
    return (
      <View style={styles.rowMain}>
        <ImageBackground source={rowData.cardBgImage} style={styles.imageBG}>
          <View style={styles.cardContent}>
            <FontAwesome
              name="heart"
              size={17}
              style={{ alignSelf: "center" }}
              color="white"
            />
            <Text style={styles.likeCountText}>{rowData.likeCount}</Text>
            <Right>
              <View style={styles.profileContainer}>
                {rowData.likeUserImages.map((item, index) => {
                  return (
                    <View key={index} style={styles.imgview}>
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
      indicatorStyle={{ backgroundColor: "#0691ce" }}
      style={{ backgroundColor: "#383d5a" }}
    />
  );

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          {/* Take up the space */}
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon
                name={
                  I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"
                }
                style={{ color: "#fff" }}
              />
            </TouchableOpacity>
          </Left>

          {/* Title */}
          <Body style={styles.body}>
            <Title style={styles.headerTitle}>Profiles</Title>
          </Body>

          {/* Right Icon */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Settings")}>
              <Ionicons name="ios-settings" size={20} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.profile}>
          <Image source={{ uri: profileImage }} style={styles.userimg} />
          <Text style={styles.name}>Johnie Cornwall</Text>
          <Text style={styles.address}>
            1201 Westlake Avenue, Suite 205 Seattle, WA 98121 USA
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.followTxtBg}
              onPress={() => alert("FOLLOWING")}
            >
              <Text style={styles.followTxt}>FOLLOWING</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.followTxtBgtrans}
              onPress={() => alert("MESSAGE")}
            >
              <Text style={styles.followTxt}>MESSAGE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={"#383d5a"}
          tabBarActiveTextColor={"#FFFFFF"}
          tabBarInactiveTextColor={"#fff8"}
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
