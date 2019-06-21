import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  AsyncStorage,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  ImageBackground,
  ScrollView,
  I18nManager,
  BackHandler,
  ListView
} from "react-native";
import {
  Header,
  Button,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  top,
  Left,
  Right,
  Title,
  Body
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Styles
import styles from "./styles";
import { Metrics, Images, Fonts } from "../../../../Themes/";

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: "true"
    };
  }

  componentWillUnmount() {
    console.log("false");
    AsyncStorage.multiSet([["FirstBlog", "false"]]);
  }

  _handleNavigation() {
    this.props.navigation.navigate("DrawerClose");
  }

  _moveToFavorites() {
    AsyncStorage.multiSet([["FirstBlog", "true"]]);
    this.props.navigation.navigate("Favorite");
  }

  _moveToSearch() {
    AsyncStorage.multiSet([["FirstBlog", "true"]]);
    this.props.navigation.navigate("Search");
  }

  render() {
    const { activeMenuImage } = this.state;
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#0e1130", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <ImageBackground
        source={Images.blogDrawerBg}
        style={{
          height: Metrics.HEIGHT
        }}
      >
        <Content>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              paddingTop: Metrics.HEIGHT * 0.09
            }}
            onPress={() => this._handleNavigation()}
          >
            <FontAwesome
              name="home"
              size={20}
              color="white"
              style={styles.menuIcon}
            />
            <Text style={styles.menuItemTxt}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._moveToFavorites()}
            style={{ flexDirection: "row", paddingTop: Metrics.HEIGHT * 0.03 }}
          >
            <FontAwesome
              name="heart"
              size={20}
              color="white"
              style={styles.menuIcon}
            />
            <Text style={styles.menuItemTxt}>Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._moveToSearch()}
            style={{ flexDirection: "row", paddingTop: Metrics.HEIGHT * 0.03 }}
          >
            <FontAwesome
              name="search"
              size={20}
              color="white"
              style={styles.menuIcon}
            />
            <Text style={styles.menuItemTxt}>Search</Text>
          </TouchableOpacity>
        </Content>
      </ImageBackground>
    );
  }
}
