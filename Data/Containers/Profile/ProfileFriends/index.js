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
  ScrollView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Header,
  Left,
  Body,
  Title,
  Content,
  List,
  ListItem
} from "native-base";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Metrics, Colors } from "../../../Themes/";
// Screen Styles
import styles from "./styles";

const profileImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/user_image_p4.png";
const profilePicOne =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentynine.png";
const profilePicTwo =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentynine.png";
const profilePicThree =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentynine.png";

export default class ProfileFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowed: true,
      selectedLots: 3
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }

  onImagePress(id) {
    this.setState({
      selectedLots: id
    });

    if (id > 1) {
      const offsetX = id * (Metrics.WIDTH * 0.05);
      this.refs.imageList.scrollTo({ x: offsetX });
    } else {
      const offsetX = Metrics.WIDTH * 0;
      this.refs.imageList.scrollTo({ x: offsetX });
    }
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var dataContainer = [
      {
        id: 1,
        name: "Kristan Eppinger",
        post: "Graphic design",
        followers: 144,
        following: 1021,
        likes: 507,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor",
        profilePicOne:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentynine.png",
        profilePicTwo:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentynine.png",
        profilePicThree:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentynine.png",
        friendProfile:
          "https://antiqueruby.aliansoftware.net//Images/profile/snap_user1__p28.png",
        noOfPhoto: 114
      },
      {
        id: 2,
        name: "Johnie Cornwall",
        post: "Graphic design",
        followers: 1434,
        following: 1121,
        likes: 4507,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
        profilePicOne:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentynine.png",
        profilePicTwo:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentynine.png",
        profilePicThree:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentynine.png",
        friendProfile:
          "https://antiqueruby.aliansoftware.net//Images/profile/snap_user2_ptwentynine_p28.png",
        noOfPhoto: 145
      },
      {
        id: 3,
        name: "Kristan Eppinger",
        post: "Graphic design",
        followers: 1479,
        following: 1246,
        likes: 834,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor",
        profilePicOne:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentynine.png",
        profilePicTwo:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentynine.png",
        profilePicThree:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentynine.png",
        friendProfile:
          "https://antiqueruby.aliansoftware.net//Images/profile/snap_user3_ptwentynine_p28.png",
        noOfPhoto: 91
      },
      {
        id: 4,
        name: "Johnie Cornwall",
        post: "Graphic design",
        followers: 574,
        following: 5656,
        likes: 5051,
        status:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor",
        profilePicOne:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentynine.png",
        profilePicTwo:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentynine.png",
        profilePicThree:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentynine.png",
        friendProfile:
          "https://antiqueruby.aliansoftware.net//Images/profile/snap_user4_ptwentynine_p28.png",
        noOfPhoto: 60
      },
      {
        id: 5,
        name: "Kristan Eppinger",
        post: "Graphic design",
        followers: 95,
        following: 601,
        likes: 452,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profilePicOne:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentynine.png",
        profilePicTwo:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentynine.png",
        profilePicThree:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentynine.png",
        friendProfile:
          "https://antiqueruby.aliansoftware.net//Images/profile/snap_user5_ptwentynine_p28.png",
        noOfPhoto: 179
      },
      {
        id: 6,
        name: "Johnie Cornwall",
        post: "Graphic design",
        followers: 1434,
        following: 1121,
        likes: 4507,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        profilePicOne:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_one_ptwentynine.png",
        profilePicTwo:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_two_ptwentynine.png",
        profilePicThree:
          "https://antiqueruby.aliansoftware.net//Images/profile/ic_photos_three_ptwentynine.png",
        friendProfile:
          "https://antiqueruby.aliansoftware.net//Images/profile/snap_user6_ptwentynine_p28.png",
        noOfPhoto: 225
      }
    ];

    return (
      <Container style={{ backgroundColor: "#2d324f" }}>
        <Header
          androidStatusBarColor={Colors.transparent}
          style={styles.header}
        >
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
            <Button transparent />
          </Right>
        </Header>
        <View style={styles.slidesec}>
          <View style={styles.imageContainerSize}>
            <ScrollView
              horizontal={true}
              ref="imageList"
              showsHorizontalScrollIndicator={false}
              style={styles.scrollImage}
            >
              {dataContainer.map((item, index) => {
                return (
                  <View key={index} style={{ alignItems: "center" }}>
                    <TouchableOpacity
                      style={styles.imageContainer}
                      onPress={() => this.onImagePress(item.id)}
                    >
                      <Image
                        source={{ uri: item.friendProfile }}
                        style={
                          this.state.selectedLots == item.id
                            ? styles.activeImage
                            : styles.normalImage
                        }
                      />
                    </TouchableOpacity>
                    {this.state.selectedLots == item.id ? (
                      <View style={styles.indicatorStyle}>
                        <Ionicons
                          name="md-arrow-dropup"
                          size={35}
                          color="white"
                        />
                      </View>
                    ) : null}
                  </View>
                );
              })}
            </ScrollView>
          </View>
          {dataContainer.map((item, index) => {
            return (
              <View key={index}>
                {item.id == this.state.selectedLots ? (
                  <View style={styles.slideMain}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.post}>{item.post}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ isFollowed: !this.state.isFollowed })
                      }
                      style={
                        this.state.isFollowed
                          ? styles.followActive
                          : styles.followNormal
                      }
                    >
                      <Text
                        style={
                          this.state.isFollowed
                            ? styles.followTextActive
                            : styles.followTextNormal
                        }
                      >
                        FOLLOW
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.followContainer}>
                      <View style={styles.followSec}>
                        <Text style={styles.followCount}>{item.followers}</Text>
                        <Text style={styles.followText}>Followers</Text>
                      </View>
                      <View style={styles.followSec}>
                        <Text style={styles.followCount}>{item.following}</Text>
                        <Text style={styles.followText}>Following</Text>
                      </View>
                      <View style={styles.followSec}>
                        <Text style={styles.followCount}>{item.likes}</Text>
                        <Text style={styles.followText}>Likes</Text>
                      </View>
                    </View>
                    <Text numberOfLines={4} style={styles.status}>
                      {item.status}
                    </Text>
                    <View style={styles.photoContainer}>
                      <Image
                        source={{ uri: item.profilePicOne }}
                        style={styles.imageLarge}
                      />
                      <View style={styles.rightImageContainer}>
                        <Image
                          source={{ uri: item.profilePicTwo }}
                          style={styles.imageMedium}
                        />
                        <View style={styles.imageBottomContainer}>
                          <Image
                            source={{ uri: item.profilePicThree }}
                            style={styles.imageSmall}
                          />
                          <TouchableOpacity
                            onPress={() => alert("See More Photos")}
                            style={styles.moreImage}
                          >
                            <Text style={styles.noOfImage}>
                              +{item.noOfPhoto}
                            </Text>
                            <Text style={styles.photoText}>Photos</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      </Container>
    );
  }
}
