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

export default class App extends Component<{}> {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Home");
      return true;
    });
  }

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }
    let pic = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/background_sfourteen.png"
    };

    return (
      <ImageBackground source={pic} style={styles.screenBg}>
        <Container style={styles.container}>
          <View style={styles.overlay}>
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
                <Text style={styles.textTitle}>Sign In</Text>
              </Body>
              <Right style={styles.right} />
            </Header>

            <Text style={styles.headertext}>
              Connect and discovery our Awesome UI Kit
            </Text>
            <Text style={styles.desctext}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </Text>

            <Form style={styles.form}>
              <Item rounded style={styles.item}>
                <Input
                  placeholderTextColor="#929597"
                  placeholder="john_doe@gmail.com"
                  style={styles.inputemail}
                />
              </Item>
              <TouchableOpacity
                info
                style={styles.btnget}
                onPress={() => alert("Get Started")}
              >
                <Text autoCapitalize="words" style={styles.buttongettext}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </Form>
          </View>
        </Container>
      </ImageBackground>
    );
  }
}
