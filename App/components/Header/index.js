import React, { Component } from "react";
import {
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  I18nManager
} from "react-native";
import { Container, Right, Left, Body, Header } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import colors from "../../container/Themes/Colors";

export default class MyHeader extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    var that = this;
  }

  render() {
    StatusBar.setBarStyle("dark-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBarStyle(colors.backgrey, true);
      StatusBar.setBackgroundColor(colors.backgrey, true);
      StatusBar.setTranslucent(true);
    }
    var that = this;

    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.left}>
            {this.props.isBack ? (
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.goBack()}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="#6f6f6f"
                />
              </TouchableOpacity>
            ) : null}
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>{this.props.title}</Text>
          </Body>
          <Right style={styles.right} />
        </Header>
      </Container>
    );
  }
}
