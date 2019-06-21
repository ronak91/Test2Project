import React, { Component } from "react";
import {
  TouchableHighlight,
  Dimensions,
  Image,
  View,
  StatusBar,
  Platform,
  Keyboard,
  TouchableOpacity,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Text,
  Content,
  Button,
  Input,
  Body,
  Header,
  Left,
  Right,
  Title,
  Item,
  Label
} from "native-base";
// Screen Styles
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class App extends Component<{}> {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("SignUp");
      return true;
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ""
    };
  }

  _onPressSignUp = () => {
    alert("Continue");
  };

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor={"transparent"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="grey"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title style={styles.title}>Sign Up</Title>
          </Body>
          <Right style={styles.right} />
        </Header>

        <Content bounces={false}>
          <View style={styles.pageContent}>
            <Text style={styles.darkTextStyle}>YOUR PHONE NUMBER , PLEASE</Text>
            <Input
              style={styles.textInputStyle}
              value={this.state.phoneNumber}
              editable={true}
              keyboardType="numeric"
              placeholderTextColor="#b7b7b7"
              placeholder="Phone Number"
              textAlign={I18nManager.isRTL ? "center" : "center"}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />
            <TouchableHighlight info>
              <Button style={styles.buttonStyle} onPress={this._onPressSignUp}>
                <Text style={styles.buttonText}>CONTINUE</Text>
              </Button>
            </TouchableHighlight>

            <Text style={styles.lightTextStyle}>
              You’ll receive an SMS to verify identity, but we’ll never spam{" "}
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
