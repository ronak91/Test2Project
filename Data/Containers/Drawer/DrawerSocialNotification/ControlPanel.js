import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { Container, Header, Content, Item, Input, Icon } from "native-base";
import styles from "./styles";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class ControlPanel extends Component {
  render() {
    const profileImgUri =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.jpg";
    return (
      <Container style={styles.menuContainer}>
        <View style={styles.userProfiles}>
          <View style={styles.userProfilestyleSec}>
            <TouchableOpacity onPress={() => alert("Notification")}>
              <FontAwesome name="bell" size={14} color="#595b6a" />
            </TouchableOpacity>

            <Image
              source={{ uri: profileImgUri }}
              style={styles.userImageStyle}
            />
            <TouchableOpacity onPress={() => alert("Settings")}>
              <SimpleLineIcons name="settings" color="#595b6a" size={14} />
            </TouchableOpacity>
          </View>
          <View style={styles.userDetailsStyle}>
            <Text style={styles.userDetailsText}>John</Text>
            <Text style={styles.userDetailsText}>Seattle, USA</Text>
          </View>
        </View>
        <Content style={styles.menucontrolPanel}>
          <View style={styles.menumainview}>
            <TouchableOpacity onPress={() => alert("Home")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Articles")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Articles</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert("Message")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Message</Text>
                <View style={styles.notiCountSec}>
                  <Text style={styles.notiCount}>10</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert("Activity")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Activity</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert("Favourite")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Favourite</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert("Friends")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Friends</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
        <TouchableOpacity
          onPress={() => alert("Logout")}
          style={styles.menumainview}
        >
          <View style={styles.listrow}>
            <Text style={styles.rowtxt}>Logout</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}
