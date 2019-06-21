import React, { Component } from "react";
import {
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  AsyncStorage,
  I18nManager
} from "react-native";
import {
  Container,
  Text,
  Header,
  Content,
  Form,
  Item,
  Button,
  Input,
  CheckBox,
  Left,
  Body,
  Icon,
  Title,
  Right
} from "native-base";
import styles from "./styles";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class ControlPanel extends Component {
  _handlePress(text) {
    alert(text);
  }

  render() {
    const profileImgUri =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.jpg";
    return (
      <Container style={{ backgroundColor: "#6857cf" }}>
        <Header style={styles.headerModal}>
          <TouchableOpacity
            onPress={this.props.closeDrawer}
            style={{
              backgroundColor: Colors.transparent,
              width: Metrics.WIDTH,
              paddingLeft: Metrics.WIDTH * 0.06
            }}
          >
            {I18nManager.isRTL ? (
              <Icon
                name="md-arrow-round-forward"
                style={{
                  color: "white",
                  height: Metrics.HEIGHT * 0.1,
                  width: Metrics.HEIGHT * 0.1
                }}
              />
            ) : (
              <Icon name="md-arrow-round-back" style={{ color: "white" }} />
            )}
          </TouchableOpacity>
        </Header>

        <Content>
          <View style={styles.mainview}>
            <TouchableOpacity
              onPress={() => this._handlePress("Home")}
              style={styles.listrow}
            >
              <Text style={styles.rowtxt}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this._handlePress("Articles")}
              style={styles.listrow}
            >
              <Text style={styles.rowtxt}>Articles</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this._handlePress("Message")}
              style={styles.listrow}
            >
              <Text style={styles.rowtxt}>Message</Text>
              <View style={styles.badgeview}>
                <Text style={styles.badgetext}>10</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this._handlePress("Activity")}
              style={styles.listrow}
            >
              <Text style={styles.rowtxt}>Activity</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this._handlePress("Favourite")}
              style={styles.listrow}
            >
              <Text style={styles.rowtxt}>Favourite</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this._handlePress("Friends")}
              style={styles.listrow}
            >
              <Text style={styles.rowtxt}>Friends</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this._handlePress("Logout")}
              style={styles.listrow}
            >
              <Text style={styles.rowtxt}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Content>
        <View style={styles.userInfoView}>
          <View style={styles.profileView}>
            <Image source={{ uri: profileImgUri }} style={styles.userpic} />
          </View>
          <View style={styles.nameAddressView}>
            <Text style={styles.name}>John</Text>
            <Text style={styles.address}>Seattle, USA</Text>
          </View>
          <TouchableOpacity
            style={styles.notiView}
            onPress={() => alert("Notification")}
          >
            <Image source={Images.bellnoti} style={styles.notiIcon} />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
