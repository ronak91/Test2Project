import React, { Component } from "react";
import {
  TouchableHighlight,
  Modal,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Text,
  Content,
  Form,
  Item,
  Button,
  Input,
  CheckBox,
  Body,
  Header,
  Left,
  Right,
  Title
} from "native-base";
// Screen Styles
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default class App extends Component<{}> {
  state = {
    modalVisible: false,
    checked: false
  };

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Home");
      return true;
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }
    let pic = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/homescreensthirteen.png"
    };

    let logo13 = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_logo_mountifysthirteen.png"
    };
    return (
      <ImageBackground source={pic} style={styles.screenBg}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle} />
          </Body>
          <Right style={styles.right} />
        </Header>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.modelMain}>
            <View style={styles.modelCenter}>
              <View style={styles.close}>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <EvilIcons name="close" size={30} color="grey" />
                </TouchableHighlight>
              </View>

              <Text style={styles.txtsingIn}>Sign In</Text>

              <Item regular style={styles.item}>
                <Input
                  placeholder="Email"
                  keyboardType="email-address"
                  style={styles.input}
                />
              </Item>

              <Item regular style={styles.item}>
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input}
                />
              </Item>

              <View style={styles.rememView}>
                <CheckBox
                  checked={this.state.checked}
                  color={"#4cd964"}
                  onPress={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                />
                <Text style={styles.remem}>Remember me</Text>
                <TouchableOpacity onPress={() => alert("Forgot Password")}>
                  <Text style={styles.forgot}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                info
                style={styles.buttondialogsignup}
                onPress={() => alert("Sign Up")}
              >
                <Text autoCapitalize="words" style={styles.modelSignUp}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Container style={styles.container}>
          <Image source={logo13} style={styles.logostyle} />

          <Text style={styles.headertext}>
            Connect and discovery our Awesome UI Kit
          </Text>
          <Text style={styles.desctext}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </Text>

          <Form style={styles.form}>
            <TouchableHighlight
              info
              style={styles.buttonlogin}
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text autoCapitalize="words" style={styles.btnText}>
                Login
              </Text>
            </TouchableHighlight>
            <TouchableOpacity
              info
              style={styles.buttonsignup}
              onPress={() => alert("Sign Up")}
            >
              <Text autoCapitalize="words" style={styles.btnText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Form>
        </Container>
      </ImageBackground>
    );
  }
}
