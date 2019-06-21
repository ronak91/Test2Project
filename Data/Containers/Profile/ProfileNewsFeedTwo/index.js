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
  FlatList,
  BackHandler,
  TouchableHighlight,
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
import Tablist from "./Tablist.js";

import Swiper from "react-native-swiper";
// Screen Styles
import styles from "./styles";
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Images, Metrics } from "../../../Themes/";
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
const profileImageOne =
  "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
const profileImageTwo =
  "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
const profileImageThree =
  "https://antiqueruby.aliansoftware.net//Images/social/ic_suggested_user_three_sone.png";
const profileImageFour =
  "https://antiqueruby.aliansoftware.net//Images/social/ic_user_one_row_sone.png";
const postImageUri =
  "https://antiqueruby.aliansoftware.net//Images/social/ic_post_sone.png";

export default class ProfileNewsFeedTwo extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }

  constructor(props) {
    super(props);

    const dataObjects = [
      {
        id: 1,
        name: "Johnie Cornwall",
        postImage: "",
        profileImage: { uri: profileImageTwo },
        time: "8 mins",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        name: "Calandra Herwig",
        postImage: { uri: postImageUri },
        profileImage: { uri: profileImageFour },
        time: "15 mins",
        description:
          "Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien."
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  _renderLabel = ({ route }) => {
    return (
      <View style={styles.tabNameView}>
        <Text
          style={
            route.id == this.state.index ? styles.label : styles.normalLabel
          }
        >
          {route.title}
        </Text>
        {route.id == 3 ? null : <View style={styles.tabVerticalDivider} />}
      </View>
    );
  };

  _getLabelText = ({ route }) => route.title;

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      getLabelText={this._getLabelText}
      tabBarButtonColor="#D2D2D2"
      renderLabel={this._renderLabel}
      indicatorStyle={styles.indicator}
      style={styles.tabBg}
    />
  );

  _renderScene = SceneMap({
    news: NewsRoute,
    videos: VideoRoute,
    events: EventRoute,
    books: BooksRoute
  });
  _renderRow(rowData) {
    return (
      <Content>
        <View style={styles.rowMainView}>
          <View style={styles.rowBg}>
            <View style={styles.rowHeaderView}>
              <Image style={styles.profileImg} source={rowData.profileImage} />
              <View style={styles.rowHeaderNameView}>
                <Text style={styles.rowNameTxt}>{rowData.name}</Text>
                <Text style={styles.rowTimeTxt}>{rowData.time}</Text>
              </View>

              <Right style={styles.moreIcon}>
                <TouchableOpacity onPress={() => alert("More")}>
                  <Ionicons name="ios-more" size={25} color="#d4d4d4" />
                </TouchableOpacity>
              </Right>
            </View>
            <View style={styles.dividerHorizontal} />
            <View style={styles.rowDescriptionView}>
              <Text style={styles.rowDescTxt}>{rowData.description}</Text>
            </View>
            {rowData.postImage == "" ? null : (
              <Image style={styles.postDescImage} source={rowData.postImage} />
            )}
            <View style={styles.dividerHorizontal} />
            <View style={styles.likeCommentShareView}>
              <TouchableOpacity
                style={styles.likeView}
                onPress={() => alert("Like")}
              >
                <TouchableOpacity onPress={() => alert("Like")}>
                  <FontAwesome name="heart" size={18} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.likeCommentShareText}>Like</Text>
                <Right>
                  <View style={styles.dividerVertical} />
                </Right>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.commentView}
                onPress={() => alert("Comment")}
              >
                <TouchableOpacity onPress={() => alert("Comment")}>
                  <Image
                    style={styles.likeCommentShareImage}
                    source={Images.comments}
                  />
                </TouchableOpacity>
                <Text style={styles.likeCommentShareText}>Comment</Text>
                <Right>
                  <View style={styles.dividerVertical} />
                </Right>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareView}
                onPress={() => alert("Share")}
              >
                <TouchableOpacity onPress={() => alert("Share")}>
                  <MaterialIcons name="share" size={18} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.likeCommentShareText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    );
  }

  render() {
    if (Platform.OS === "android") {
      StatusBar.setBarStyle("dark-content", true);
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var that = this;

    const profileBg =
      "https://antiqueruby.aliansoftware.net//Images/profile/backg_profile_14.png";
    const profileImg =
      "https://antiqueruby.aliansoftware.net/Images//profile//ic_profile_pic_pnineteen.jpg";

    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => that.props.navigation.navigate("Profile")}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={28}
                color="#363636"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Profiles</Text>
          </Body>
          <Right style={styles.right} />
        </Header>

        <View style={styles.imgView}>
          <Image source={{ uri: profileBg }} style={styles.backgroundImg} />

          <View style={styles.contentView}>
            <View style={styles.profileView}>
              <Image style={styles.profileImgs} source={{ uri: profileImg }} />
              <TouchableOpacity
                style={styles.cameraIcon}
                onPress={() => alert("Edit Profile Picture")}
              >
                <Image
                  source={Images.blueCameraIcon}
                  style={styles.cameraIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.nameTxt}>Johnie Cornwall</Text>
            <Text style={styles.designtaionTxt}>Graphic Design</Text>

            <View style={styles.followerFollwingLikeBg}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.countLabelBg}>
                  <Text style={styles.countTxt}>1434</Text>
                  <Text style={styles.labelTxt}>Followers</Text>
                </View>
                <View style={styles.divideVertical} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.countLabelBg}>
                  <Text style={styles.countTxt}>1121</Text>
                  <Text style={styles.labelTxt}>Following</Text>
                </View>
                <View style={styles.divideVertical} />
              </View>
              <View style={styles.countLabelBg}>
                <Text style={styles.countTxt}>4507</Text>
                <Text style={styles.labelTxt}>Likes</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: "#0691ce" }}
          tabBarBackgroundColor={"white"}
          tabBarActiveTextColor={"#0691ce"}
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
