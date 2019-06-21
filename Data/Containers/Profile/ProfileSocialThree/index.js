import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// Screen Styles
import styles from "./styles";
/**
 *  Profile Screen
 */
const profileImg =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pnineteen.jpg";
const profileImgTwo =
  "https://antiqueruby.aliansoftware.net/Images/profile/profile_4_11.png";
const galleryImagOne =
  "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_one_ptwelve.png";
const galleryImgTwo =
  "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_two_ptwelve.png";
const galleryImgThree =
  "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_three_ptwelve.png";
export default class ProfileSocialThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }

  render() {
    if (Platform.OS === "android") {
      StatusBar.setBarStyle("dark-content", true);
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var data = [
      {
        id: 1,
        profileImage: { uri: profileImg },
        name: "Johnie Cornwall",
        designation: "Senior Design Director"
      },
      {
        id: 2,
        profileImage: { uri: profileImgTwo },
        name: "Renaldo Rozman",
        designation: "Graphic Design"
      }
    ];

    return (
      <Container style={styles.main}>
        <Header androidStatusBarColor={"#FFFFFF"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="black"
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
        <Content>
          <View style={styles.proimg}>
            <Image style={styles.profileImg} source={{ uri: profileImg }} />
            <TouchableOpacity
              style={styles.cameraIcon}
              onPress={() => alert("Edit Profile Picture")}
            >
              <SimpleLineIcons
                name="camera"
                size={18}
                color="white"
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "center"
                }}
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
          <View style={styles.dividerGrey} />
          <View style={styles.photosview}>
            <View style={styles.photodHeader}>
              <Text style={styles.photosFriendsTxt}>Photos</Text>
              <TouchableOpacity
                style={styles.imgsview}
                onPress={() => alert("See More Photos..")}
              >
                <Text style={styles.photosFriendsCountTxt}>36</Text>
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-left" : "angle-right"}
                  size={20}
                  color="#d6d6d6"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.myimg}>
              <Image
                style={styles.galleryImg}
                source={{ uri: galleryImagOne }}
              />
              <View style={styles.img} />
              <Image
                style={styles.galleryImg}
                source={{ uri: galleryImgTwo }}
              />
              <View style={styles.img} />
              <Image
                style={styles.galleryImg}
                source={{ uri: galleryImgThree }}
              />
            </View>
          </View>
          <View style={styles.dividerGrey} />
          <View style={styles.friendsview}>
            <View style={styles.imgview}>
              <Text style={styles.photosFriendsTxt}>Friends</Text>
              <TouchableOpacity
                style={styles.frdscount}
                onPress={() => alert("See List of Friends..")}
              >
                <Text style={styles.photosFriendsCountTxt}>139</Text>
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-left" : "angle-right"}
                  size={20}
                  color="#d6d6d6"
                />
              </TouchableOpacity>
            </View>
            {data.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.frdsview}>
                    <Image style={styles.frdsimg} source={item.profileImage} />
                    <View style={styles.frdsinfo}>
                      <Text style={styles.rowNameTxt}>{item.name}</Text>
                      <Text style={styles.rowDesignationTxt}>
                        {item.designation}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      index === data.length - 1
                        ? null
                        : styles.dividerHorizontal
                    }
                  />
                </View>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}
