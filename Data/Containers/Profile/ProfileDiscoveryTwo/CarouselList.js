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
  ListView
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Header,
  Left,
  Body,
  Title
} from "native-base";
import RNSwiper from "./RNSwiper";
import LinearGradient from "react-native-linear-gradient";
import styles from "./CarouselListStyle";
import { Images, Fonts, Metrics, Colors } from "../../../Themes/";
const activeindicator = 0;

export default class CarouselList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: ""
    };

    const dataObjects = [{ flag: true }, { flag: false }, { flag: false }];
    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      activeindicator: 0
    };
  }

  onSwipeUp(index) {
    //parameter returned is the index of active child
    console.log("first");
    console.log(index);
  }

  onSwipeDown(index) {
    //parameter returned is the index of active child
    console.log("second");
    console.log(index);
  }

  onSwipeLeft(index) {
    //parameter returned is the index of active child
    console.log("third");
    this.setState({ activeindicator: this.state.activeindicator + 1 });
    console.log(index);
  }
  onSwipeRight(index) {
    //parameter returned is the index of active child
    console.log("forth");
    this.setState({ activeindicator: this.state.activeindicator - 1 });
    console.log(index);
  }

  onPress(index) {
    //parameter returned is the index of active child
    console.log("Third");
    console.log(index);
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var data = [
      {
        id: 1,
        image: Images.ic_background_ptwentyseven,
        profileImg: {
          uri:
            "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pten.jpg"
        },
        name: "Johnie Cornwall",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        flag: true
      },
      {
        id: 2,
        image: Images.ic_background_ptwentyseven,
        profileImg: {
          uri:
            "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pten.jpg"
        },
        name: "Johnie Cornwall",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 3,
        image: Images.ic_background_ptwentyseven,
        profileImg: {
          uri:
            "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pten.jpg"
        },
        name: "Johnie Cornwall",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 4,
        image: Images.ic_background_ptwentyseven,
        profileImg: {
          uri:
            "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pten.jpg"
        },
        name: "Johnie Cornwall",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    return (
      <Container style={{ backgroundColor: "#2d324f" }}>
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={styles.slidesec}>
            <RNSwiper
              minimumScale={0.9}
              minimumOpacity={0.5}
              overlap={0}
              cardWidth={Metrics.WIDTH * 0.8}
              duration={100}
              swipeThreshold={100}
              onSwipeUp={this.onSwipeUp}
              onSwipeDown={this.onSwipeDown}
              onSwipeRight={() => this.onSwipeRight()}
              onSwipeLeft={() => this.onSwipeLeft()}
              onPress={this.onPress}
              swiperDetails={data}
            >
              {data.map((item, index) => {
                return (
                  <View style={styles.slide} key={index}>
                    <Image source={item.image} style={styles.sliderImage} />
                    <Image source={item.profileImg} style={styles.profileImg} />
                    <Text style={styles.nameTxt}>{item.name}</Text>
                    <Text style={styles.designationTxt}>
                      {item.designation}
                    </Text>
                    <View style={styles.descriptionBg}>
                      <Text numberOfLines={4} style={styles.descriptionTxt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut quis urna ultrices, egestas ex in, accumsan turpis.
                        Donec feugiat eu leo vitae faucibus.
                      </Text>
                      <LinearGradient
                        locations={[0.5, 1]}
                        colors={["transparent", "#0004"]}
                        style={styles.shadowBg}
                      />
                    </View>
                    <View style={styles.btnSec}>
                      <TouchableOpacity
                        style={styles.followingBG}
                        onPress={() => alert("FOLLOWING")}
                      >
                        <Text style={styles.followingTxt}>FOLLOWING</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.messageBg}
                        onPress={() => alert("MESSAGE")}
                      >
                        <Text style={styles.messageTxt}>MESSAGE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </RNSwiper>
          </View>
        </View>
      </Container>
    );
  }
}
