import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  ListView,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  View,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  Content,
  Body,
  Header,
  Icon,
  Title
} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import Tablist from "./Tablist.js";

// Screen Styles
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Zocial from "react-native-vector-icons/Zocial";
import { Images, Colors, Fonts, Metrics } from "../../../Themes/";
import Swiper from "react-native-swiper";
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";
const profileImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/user_image_p4.png";
const bgImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/backg_profile_11.png";
const profileImg =
  "https://antiqueruby.aliansoftware.net//Images/profile/user_image_p08.png";
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
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const FirendsRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const PhotoRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const VideoRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);
const MusicRoute = () => (
  <View style={[styles.container, { backgroundColor: "transparent" }]}>
    <Tablist />
  </View>
);

export default class ProfileCollapse extends Component {
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
      <View style={{ flexDirection: "column" }}>
        <View style={styles.mainRow}>
          <Image source={rowData.profileImage} style={styles.profileImg} />
          <View style={styles.nameDesignationMainView}>
            <View style={styles.nameDesignationView}>
              <Text style={styles.nameTxt}>{rowData.name}</Text>
              <Text style={styles.designationTxt}>{rowData.designation}</Text>
            </View>
          </View>
        </View>

        <View style={styles.dividerHorizontal} />
      </View>
    );
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
    friends: FirendsRoute,
    photo: PhotoRoute,
    video: VideoRoute,
    music: MusicRoute
  });

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var that = this;

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
                size={25}
                color="#363636"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body} />
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Setting")}>
              <Image source={Images.settingBlack} style={styles.settingIcon} />
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.profileHeaderMain}>
          <View style={styles.profileImageSec}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          </View>
          <Text style={styles.name}>Johnie Cornwall</Text>
          <Text style={styles.address}>
            1201 Westlake Avenue, Suite 205 Seattle, WA 98121 USA
          </Text>

          <View style={styles.fbTwitterGoogleView}>
            <TouchableOpacity
              style={styles.fbView}
              onPress={() => alert("Facebook")}
            >
              <FontAwesome name="facebook" size={15} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.fbView}
              onPress={() => alert("Twitter")}
            >
              <FontAwesome name="twitter" size={15} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.fbView}
              onPress={() => alert("Google Plus")}
            >
              <Image source={Images.googleWhite} style={styles.googleImg} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: "#0691ce" }}
          tabBarBackgroundColor={"#f7f7f7"}
          tabBarActiveTextColor={"#0691ce"}
          tabBarInactiveTextColor={"#d9d9d9"}
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
