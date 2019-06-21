import React, { Component } from "react";
import {
  AsyncStorage,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  ImageBackground
} from "react-native";
import {
  Header,
  Button,
  Text,
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
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import styles from "./styles";

export default class ControlPanel extends Component {
  render() {
    const ProfileImage =
      "https://antiqueruby.aliansoftware.net//Images/profile/profile_image.jpg";
    const DrawerBackGround =
      "https://antiqueruby.aliansoftware.net//Images/drawer/ic_drawer8_bg.jpg";
    return (
      <Container style={{ backgroundColor: "#0e1130" }}>
        <ImageBackground
          source={{ uri: DrawerBackGround }}
          style={{ height: Metrics.HEIGHT }}
        >
          <Image source={{ uri: ProfileImage }} style={styles.profileImage} />
          <Content style={styles.mainview}>
            <TouchableOpacity
              style={styles.listrow}
              onPress={() => alert("Home")}
            >
              <Text style={styles.rowtxt}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listrow}
              onPress={() => alert("Articles")}
            >
              <Text style={styles.rowtxt}>Articles</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listrow}
              onPress={() => alert("Message")}
            >
              <Text style={styles.rowtxt}>Message</Text>
              <View style={styles.rowCountBg}>
                <Text style={styles.rowCountText}>128</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listrow}
              onPress={() => alert("Activity")}
            >
              <Text style={styles.rowtxt}>Activity</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listrow}
              onPress={() => alert("Favorite")}
            >
              <Text style={styles.rowtxt}>Favorite</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listrow}
              onPress={() => alert("Friends")}
            >
              <Text style={styles.rowtxt}>Friends</Text>
            </TouchableOpacity>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
