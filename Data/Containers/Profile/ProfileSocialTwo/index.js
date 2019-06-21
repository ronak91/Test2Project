import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  I18nManager,
  ListView
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Title,
  Icon,
  Header
} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import LinearGradient from "react-native-linear-gradient";
// Screen Styles
import styles from "./styles";
import { View } from "react-native-animatable";
import Tablist from "./Tablist.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import { Fonts, Metrics, Colors } from "../../../Themes/";
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const FriendsRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const FollowersRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const FollowingRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const LikesRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const profileImageTwo =
  "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_02_p11.png";
const profileImageThree =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_suggested_user_two_profile_nine.png";
const profileImageFour =
  "https://antiqueruby.aliansoftware.net//Images/profile/profile_4_11.png";
const profileImageFive =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_profile_dfourteen.png";
const profileImageSix =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_profile_drawer8.jpg";
const profileImageSeven =
  "https://antiqueruby.aliansoftware.net//Images/profile/item_pro2_p14.png";
const profileImageEight =
  "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_01_p05.png";
const profileImageNine =
  "https://antiqueruby.aliansoftware.net//Images/profile/profile_4_11.png";

const bgImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/backg_profile_11.png";
const profileImg =
  "https://antiqueruby.aliansoftware.net//Images/profile/user_image_p08.png";

export default class ProfileSocialTwo extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }
  constructor(props) {
    super(props);

    const profileDetails = [
      {
        id: 1,
        profileImage: { uri: profileImg },
        name: "Johnie Cornwall",
        designation: "Senior Design Director"
      },
      {
        id: 2,
        profileImage: { uri: profileImageTwo },
        name: "Renaldo Rozman",
        designation: "Lead 3D Artist"
      },
      {
        id: 3,
        profileImage: { uri: profileImageThree },
        name: "Argelia Bee",
        designation: "Copywriter"
      },
      {
        id: 4,
        profileImage: { uri: profileImageFour },
        name: "Kimiko Hoyle",
        designation: "Marketing & Creative Services"
      },
      {
        id: 5,
        profileImage: { uri: profileImageFive },
        name: "Argelia Bee",
        designation: "Copywriter"
      },
      {
        id: 6,
        profileImage: { uri: profileImageSix },
        name: "Johnie Cornwall",
        designation: "Copywriter"
      },
      {
        id: 7,
        profileImage: { uri: profileImageSeven },
        name: "Tim Droney",
        designation: "Copywriter"
      },
      {
        id: 8,
        profileImage: { uri: profileImg },
        name: "Johnie Cornwall",
        designation: "Senior Design Director"
      },
      {
        id: 9,
        profileImage: { uri: profileImageTwo },
        name: "Renaldo Rozman",
        designation: "Lead 3D Artist"
      },
      {
        id: 10,
        profileImage: { uri: profileImageThree },
        name: "Argelia Bee",
        designation: "Copywriter"
      },
      {
        id: 11,
        profileImage: { uri: profileImageFour },
        name: "Kimiko Hoyle",
        designation: "Marketing & Creative Services"
      },
      {
        id: 12,
        profileImage: { uri: profileImageFive },
        name: "Argelia Bee",
        designation: "Copywriter"
      },
      {
        id: 13,
        profileImage: { uri: profileImageSix },
        name: "Johnie Cornwall",
        designation: "Copywriter"
      },
      {
        id: 14,
        profileImage: { uri: profileImageSeven },
        name: "Tim Droney",
        designation: "Copywriter"
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(profileDetails)
    };
  }

  _renderProfileDetailRow(rowData) {
    return (
      <View style={styles.rowdetail}>
        <Image source={rowData.profileImage} style={styles.profileImg} />
        <View style={styles.names}>
          <View style={styles.prodetail}>
            <Text style={styles.nameTxt}>{rowData.name}</Text>
            <Text style={styles.designationTxt}>{rowData.designation}</Text>
          </View>
        </View>
        <Right>
          <View style={styles.followbtn}>
            <Text style={styles.txtfollow}>Follow</Text>
          </View>
        </Right>
      </View>
    );
  }

  _renderTitle = ({ route }) => {
    return (
      <View>
        <Text style={styles.countTxt}>{route.count}</Text>
        <Text style={styles.labelTxt}>{route.label}</Text>
      </View>
    );
  };

  _getLabelText = ({ route }) => route.count;

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      renderLabel={this._renderTitle}
      indicatorStyle={{ backgroundColor: "#0691ce" }}
      style={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        elevation: 0,
        borderBottomWidth: 1,
        borderColor: "#f2f2f2"
      }}
    />
  );

  _renderScene = SceneMap({
    friends: FriendsRoute,
    followers: FollowersRoute,
    following: FollowingRoute,
    likes: LikesRoute
  });

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.mains}>
        <ImageBackground style={styles.imgContainer} source={{ uri: bgImage }}>
          <LinearGradient
            locations={[0.1, 1]}
            colors={["transparent", "black"]}
            style={styles.gred}
          >
            <LinearGradient
              locations={[0.5, 2.5]}
              colors={["transparent", "black"]}
              style={styles.gredTop}
            >
              <Header
                androidStatusBarColor={"transparent"}
                style={styles.header}
              >
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

                <Body style={styles.body}>
                  <Title style={styles.title}>Profiles</Title>
                </Body>

                <Right style={styles.left}>
                  <Button transparent />
                </Right>
              </Header>
              <View style={styles.topview}>
                <Image
                  style={styles.profileImgs}
                  source={{ uri: profileImg }}
                />
                <Text style={styles.nameTxts}>Johnie Cornwall</Text>
                <Text style={styles.addressTxt}>
                  1201 Westlake Avenue, Suite 205 Seattle, WA 98121 USA
                </Text>
                <TouchableOpacity
                  style={styles.followBg}
                  onPress={() => alert("FOLLOWING")}
                >
                  <Text style={styles.followTxt}>FOLLOWING</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <ScrollableTabView
              initialPage={0}
              tabBarUnderlineStyle={styles.tabUnderLine}
              tabBarBackgroundColor={"white"}
              tabBarActiveTextColor={"#6f6f6f"}
              tabBarInactiveTextColor={"#6f6f6f"}
              tabBarTextStyle={styles.tabText}
              style={{
                width: Metrics.WIDTH * 0.95,
                backgroundColor: "transparent"
              }}
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
                  renderRow={this._renderProfileDetailRow.bind(this)}
                  renderSeparator={this._renderSeparator}
                  enableEmptySections
                  pageSize={4}
                />
              </View>

              <View tabLabel="Videos">
                <ListView
                  contentContainerStyle={styles.listContent}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderProfileDetailRow.bind(this)}
                  renderSeparator={this._renderSeparator}
                  enableEmptySections
                  pageSize={4}
                />
              </View>

              <View tabLabel="Events">
                <ListView
                  contentContainerStyle={styles.listContent}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderProfileDetailRow.bind(this)}
                  renderSeparator={this._renderSeparator}
                  enableEmptySections
                  pageSize={4}
                />
              </View>

              <View tabLabel="Books">
                <ListView
                  contentContainerStyle={styles.listContent}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderProfileDetailRow.bind(this)}
                  renderSeparator={this._renderSeparator}
                  enableEmptySections
                  pageSize={4}
                />
              </View>
            </ScrollableTabView>
          </LinearGradient>
        </ImageBackground>
      </Container>
    );
  }
}
