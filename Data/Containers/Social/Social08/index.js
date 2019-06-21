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
  Header,
  Input
} from "native-base";
import Swiper from "react-native-swiper";
// Screen Styles
import styles from "./styles";
const { width, height } = Dimensions.get("window");
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Images, Metrics } from "../../../Themes/";

/**
 *  Profile Screen
 */
export default class Social08 extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Social");
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

    var that = this;

    const postImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/timeline_image_one_seight.png";
    const postImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/timeline_image_two_seight.png";
    const profileImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/timeline_profile_one_seight.png";
    const profileImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/timeline_profile_two_seight.png";

    var data = [
      {
        id: 1,
        name: "Johnie Cornwall",
        profileImage: { uri: profileImageOne },
        postImage: { uri: postImageOne },
        time: "8 mins",
        likeCount: 12,
        commentCount: 35
      },
      {
        id: 2,
        name: "Michal Lampley",
        profileImage: { uri: profileImageTwo },
        postImage: { uri: postImageTwo },
        time: "12 mins",
        likeCount: 12,
        commentCount: 35
      },
      {
        id: 3,
        name: "Johnie Cornwall",
        profileImage: { uri: profileImageOne },
        postImage: { uri: postImageOne },
        time: "8 mins",
        likeCount: 12,
        commentCount: 35
      },
      {
        id: 4,
        name: "Michal Lampley",
        profileImage: { uri: profileImageTwo },
        postImage: { uri: postImageTwo },
        time: "12 mins",
        likeCount: 12,
        commentCount: 35
      }
    ];

    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => that.props.navigation.navigate("Social")}
            >
              {I18nManager.isRTL ? (
                <MaterialIcons name="chevron-right" size={25} color="white" />
              ) : (
                <MaterialIcons name="chevron-left" size={25} color="white" />
              )}
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
        <Content>
          <View style={styles.searchViewBg}>
            <View style={styles.searchView}>
              <Ionicons
                name="ios-search"
                size={20}
                color="#8e8e93"
                style={{ marginLeft: 10 }}
              />
              <Input
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#8e8e93"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#8e8e93"
              />
            </View>
          </View>
          {/*<View style={styles.searchViewBg}>
            <View style={styles.searchView}>
              <Image
                source={Images.searchGreyIcon}
                style={{
                  width: 14,
                  height: 14,
                  resizeMode: "contain",
                  alignSelf: "center"
                }}
              />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>*/}
          <View
            style={styles.listMainView}
            animation="zoomInUp"
            duration={1100}
            delay={1400}
          >
            {data.map((item, index) => {
              return (
                <View
                  style={
                    index === data.length - 1 ? styles.lastRowBg : styles.rowBg
                  }
                  key={index}
                >
                  {item.postImage == "" ? null : (
                    <Image style={styles.postDescImg} source={item.postImage} />
                  )}
                  <View style={styles.postInfoView}>
                    <Image
                      style={styles.profileImg}
                      source={item.profileImage}
                    />
                    <View style={styles.postNameTimeView}>
                      <Text style={styles.rowNameTxt}>{item.name}</Text>
                      <Text style={styles.rowTimeTxt}>{item.time}</Text>
                    </View>
                    <View
                      style={[
                        styles.likeCommentView,
                        { width: Metrics.WIDTH * 0.16 }
                      ]}
                    >
                      <TouchableOpacity onPress={() => alert("Like")}>
                        <FontAwesome name="heart" size={18} color="#d4d4d4" />
                      </TouchableOpacity>
                      <Text style={styles.likeCommentText}>
                        {item.likeCount}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.likeCommentView,
                        { width: Metrics.WIDTH * 0.1 }
                      ]}
                    >
                      <TouchableOpacity onPress={() => alert("Comment")}>
                        <Image
                          style={styles.likeCommentImage}
                          source={Images.comments}
                        />
                      </TouchableOpacity>
                      <Text style={styles.likeCommentText}>
                        {item.commentCount}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}
