import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
  Modal,
  I18nManager,
  BackHandler
} from "react-native";
import { Container, Content, Right, Left, Body, Header } from "native-base";
import PopupDialog from "react-native-popup-dialog";
import Swiper from "react-native-swiper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Images from "../../../Themes/Images";

// Screen Styles
import styles from "./styles";

export default class WalkthroughResidence extends Component {
  state = {
    modalVisible: true
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Walkthrough");
      return true;
    });
  }

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    const logoUri =
      "https://antiqueruby.aliansoftware.net//Images/walkthrough/logo_dialog_wt_twentyfour.png";

    var data = [
      {
        id: 1,
        title: "Let's get started!",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        title: "Let's get started!",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 3,
        title: "Let's get started!",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 4,
        title: "Let's get started!",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Walkthrough")}
              style={styles.backArrow}
            >
              <Ionicons
                name={
                  I18nManager.isRTL
                    ? "ios-arrow-round-forward-outline"
                    : "ios-arrow-round-back-outline"
                }
                size={30}
                color="#ffffff"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textHome}>Home</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("search")}>
              <Ionicons name="ios-search" size={20} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.main}>
          <Text
            style={styles.textGetStarted}
            onPress={() => {
              this.toggleModal(true);
            }}
          >
            Get Started
          </Text>
        </View>

        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => null}
        >
          <View style={styles.modalStyle}>
            <View style={styles.popupBgImage}>
              <Image style={styles.shadowStyle} source={Images.bgtwentyseven} />
              <Image style={styles.logoStyle} source={{ uri: logoUri }} />
              <Swiper
                ref="swiper"
                showsButtons={false}
                autoplayTimeout={2.5}
                autoplay={true}
                activeDot={<View style={styles.activeDot} />}
                dot={<View style={styles.dot} />}
              >
                {data.map((item, index) => {
                  return (
                    <View style={styles.slider} key={index}>
                      <Text style={styles.headertext}>{item.title}</Text>
                      <Text style={styles.desctext}>{item.description}</Text>
                    </View>
                  );
                })}
              </Swiper>

              <TouchableOpacity
                style={styles.startSliderLayout}
                onPress={() => alert("Get Started")}
              >
                <Text style={styles.startSliderText}>Get Started</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => this.setState({ modalVisible: false })}
              style={styles.closeIconBg}
            >
              <FontAwesome name="close" size={15} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
      </Container>
    );
  }
}
