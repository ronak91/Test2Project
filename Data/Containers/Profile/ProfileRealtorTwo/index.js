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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
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
const cardBgOne =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_one_ptwo.png";
const cardBgTwo =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_two_ptwo.png";
const cardBgThree =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_three_ptwo.png";
const cardBgFour =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_four_ptwo.png";
const cardBgFive =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_five_ptwo.jpg";
const cardBgSix =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_six_ptwo.jpg";
const profileImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_18.png";

export default class ProfileRealtorTwo extends Component {
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
        cardBgImage: { uri: cardBgOne },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australia",
        name: "Johnie",
        time: "8 mins"
      },
      {
        id: 2,
        cardBgImage: { uri: cardBgTwo },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "30 mins"
      },
      {
        id: 3,
        cardBgImage: { uri: cardBgThree },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australia",
        name: "Johnie",
        time: "27 mins"
      },
      {
        id: 4,
        cardBgImage: { uri: cardBgFour },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "56 mins"
      },
      {
        id: 5,
        cardBgImage: { uri: cardBgFive },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australia",
        name: "Johnie",
        time: "5 mins"
      },
      {
        id: 6,
        cardBgImage: { uri: cardBgSix },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "19 mins"
      },
      {
        id: 5,
        cardBgImage: { uri: cardBgFive },
        profileImage: { uri: profileImage },
        title: "Home in Torquay by My Architech",
        addrss: "Torquay,Australia",
        name: "Johnie",
        time: "5 mins"
      },
      {
        id: 6,
        cardBgImage: { uri: cardBgSix },
        profileImage: { uri: profileImage },
        title: "Modern House by Maraya Interior",
        addrss: "Ojai,California",
        name: "Tim Droney",
        time: "19 mins"
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
        <Image source={rowData.cardBgImage} style={styles.cardBgImage} />
        <View style={styles.cardContent}>
          <Text style={styles.titleTxt}>{rowData.title}</Text>
          <View style={styles.addressBg}>
            <Ionicons
              name="ios-pin"
              size={16}
              color="grey"
              style={{
                justifyContent: "center",
                backgroundColor: "transparent",
                alignItems: "center",
                alignSelf: "center"
              }}
            />
            <Text style={styles.addressTxt}>{rowData.addrss}</Text>
          </View>
          <View style={styles.dividerHorizontal} />
          <View style={styles.profileBg}>
            <Image source={rowData.profileImage} style={styles.profileImg} />
            <View style={styles.nameTimeBg}>
              <Text style={styles.nameTxt}>{rowData.name}</Text>
              <Text style={styles.timeTxt}>{rowData.time}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    if (Platform.OS === "android") {
      StatusBar.setBarStyle("dark-content", true);
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var that = this;

    var data = [
      {
        id: 1,
        profileImage: { uri: profileImg },
        name: "Johnie",
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
      <Container style={styles.mains}>
        <Header androidStatusBarColor={"#FFFFFF"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => that.props.navigation.navigate("Profile")}
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
        <Content style={styles.content}>
          <View style={styles.proimg}>
            <Image style={styles.profileImgs} source={{ uri: profileImg }} />
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
          <Text style={styles.nameTxts}>Johnie Cornwall</Text>
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
        </Content>

        <View style={styles.dividerGrey} />
        <Container style={styles.main}>
          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}
          />
        </Container>
      </Container>
    );
  }
}
