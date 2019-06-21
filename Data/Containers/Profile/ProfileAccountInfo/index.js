import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  View,
  ListView,
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
import ReadMore from "react-native-read-more-text";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const profileImg =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pnineteen.jpg";

export default class ProfileAccountInfo extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <Header androidStatusBarColor={"#2d324f"} style={styles.header}>
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
            <TouchableOpacity onPress={() => alert("Settings")}>
              <Ionicons name="md-settings" size={22} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Image source={{ uri: profileImg }} style={styles.profileImg} />
          <Text style={styles.nameTxt}>Johnie Cornwall</Text>
          <Text style={styles.designationTxt}>Graphic Design</Text>
          <Text style={styles.descTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
            non quam sed.
          </Text>
          <TouchableOpacity
            style={styles.connectWithTwitterBg}
            onPress={() => alert("Connect with Twitter")}
          >
            <Text style={styles.connectWithTwitterFbTxt}>
              Connect with Twitter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.connectWithFacebookBg}
            onPress={() => alert("Connect with Facebook")}
          >
            <Text style={styles.connectWithTwitterFbTxt}>
              Connect with Facebook
            </Text>
          </TouchableOpacity>
          <View style={styles.dividerHorizontal} />
          <View style={styles.accountInfoBg}>
            <Text style={styles.accountInfoTxt}>ACCOUNT INFORMATION</Text>
          </View>
          <View style={styles.dividerHorizontal} />
          <View style={{ flexDirection: "column" }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Name</Text>
              <Text style={styles.infoFieldDetailTxt}>Johnie Cornwall</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Email</Text>
              <Text style={styles.infoFieldDetailTxt}>
                johnie_cornwall@gmail.com
              </Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Phone</Text>
              <Text style={styles.infoFieldDetailTxt}>+1 234 5678 900</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={styles.infoFieldBg}>
            <Text style={styles.infoFieldTitleTxt}>Address</Text>
            <Text style={styles.infoFieldDetailTxt}>
              1201 Westlake Avenue,Suite 205 Seattle, WA 98121 USA
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.viewMoreLessTxt} onPress={handlePress}>
        View more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.viewMoreLessTxt} onPress={handlePress}>
        View less
      </Text>
    );
  };
}
