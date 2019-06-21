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
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
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
  Footer,
  Icon,
  Header,
  Left,
  Right,
  Title
} from "native-base";
// Screen Styles
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fonts, Metrics, Colors } from "../../../Themes/";
export default class App extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("SignUp");
      return true;
    });
  }
  state = {
    modalVisible: false,
    checked: false
  };
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
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body} />
          <Right style={styles.right} />
        </Header>
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
              onPress={() => alert("Login")}
            >
              <Text autoCapitalize="words" style={styles.loginbutton}>
                Login
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              info
              style={styles.buttonsignup}
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text autoCapitalize="words" style={styles.signupbutton}>
                Sign Up
              </Text>
            </TouchableHighlight>
          </Form>
        </Container>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.View2}>
            <View style={styles.view3}>
              <View style={styles.view4}>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Ionicons name="md-close" size={30} color="black" />
                </TouchableHighlight>
              </View>

              <Text style={styles.dialogtitle}>Sign Up</Text>

              <Item rounded style={styles.itemname}>
                <Input
                  placeholderTextColor={Colors.greys}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Full Name"
                  style={styles.inputname}
                />
              </Item>

              <Item rounded style={styles.itemname}>
                <Input
                  placeholderTextColor={Colors.greys}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Email"
                  keyboardType="email-address"
                  style={styles.inputname}
                />
              </Item>

              <Item rounded style={styles.itemname}>
                <Input
                  placeholderTextColor={Colors.greys}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.inputname}
                />
              </Item>

              <Item rounded style={styles.itemname}>
                <Input
                  placeholderTextColor={Colors.greys}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  style={styles.inputname}
                />
              </Item>

              <TouchableOpacity
                style={styles.buttondialogsignup}
                onPress={() => alert("Sign Up")}
              >
                <Text autoCapitalize="words" style={styles.btntxt}>
                  Sign Up
                </Text>
              </TouchableOpacity>

              {/*<View style={styles.txtBg}>*/}
                <Text autoCapitalize="words" style={styles.terms}>
                  Clicking Sign Up means that you agree to the
                </Text>

                <View style={{flexDirection: "row",width: Metrics.WIDTH * 0.60, alignItems: "center",alignSelf: "center"}}>
                <TouchableOpacity onPress={() => alert("Terms & Condition")}>
                  <Text style={styles.termstwo}>
                    Terms & Conditions
                  </Text>
                </TouchableOpacity>
                <Text style={styles.termsthree}> and</Text>
                <TouchableOpacity onPress={() => alert("Privacy Policy")}>
                  <Text style={styles.termstwo}> Privacy Policy.</Text>
                </TouchableOpacity>
                </View>


              {/*</View>*/}

            </View>
          </View>
        </Modal>
      </ImageBackground>
    );
  }
}
