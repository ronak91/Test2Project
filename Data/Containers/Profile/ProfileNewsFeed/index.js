import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
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
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";
const { width, height } = Dimensions.get("window");

/**
 *  Profile Screen
 */
export default class ProfileNewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      // that.props.navigation.navigate('Home')
      if (that.state.modalVisible) {
        that.toggleModal(false);
      } else {
        that.props.navigation.navigate("Profile");
      }
      return true;
    });
  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    const imageUri =
      "https://antiqueruby.aliansoftware.net//Images/profile/ic_bg_profile_one.png";
    const profileImgUri =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.jpg";

    return (
      <Container style={styles.main}>
        <Header androidStatusBarColor={"#2d324f"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.leftbtn}
              onPress={() => alert("Menu")}
            >
              <Icon name="ios-menu" style={{ color: "#fff" }} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title style={styles.title}>News Feed</Title>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity
              style={styles.backArrow}
              style={styles.rightbtn}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon
                name={
                  I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"
                }
                style={styles.searchicon}
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => {
              this.toggleModal(true);
            }}
          >
            <Text style={styles.ShowProfileTxt}>Show Profile</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.toggleModal(!this.state.modalVisible);
            }}
          >
            <View style={styles.modalmain}>
              <View style={styles.modal}>
                <Image source={{ uri: imageUri }} style={styles.bgimage} />
                <Image
                  source={{ uri: profileImgUri }}
                  style={styles.proimage}
                />
                <View style={styles.prouser}>
                  <View style={styles.followcount}>
                    <View style={styles.followerFollowingBg}>
                      <Text style={styles.followerFollowingCountTxt}>14k</Text>
                      <Text style={styles.followerFollowingTxt}>Followers</Text>
                    </View>
                    <View style={styles.followerFollowingBg}>
                      <Text style={styles.followerFollowingCountTxt}>11k</Text>
                      <Text style={styles.followerFollowingTxt}>Following</Text>
                    </View>
                  </View>
                  <Text style={styles.nameTxt}>Johnie Cornwall</Text>
                  <Text style={styles.designationTxt}>Graphic Design</Text>
                  <TouchableOpacity
                    style={styles.followTxtBg}
                    onPress={() => alert("FOLLOW")}
                  >
                    <Text style={styles.followTxt}>FOLLOW</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.closeIconBg}
                onPress={() => this.toggleModal(false)}
              >
                <FontAwesome name="close" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </Container>
    );
  }
}
