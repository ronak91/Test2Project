import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class ControlPanel extends Component {
  render() {
    const ProfileImage =
      "https://antiqueruby.aliansoftware.net/Images/profile/profile_image.jpg";
    return (
      <Container style={styles.menuContainer}>
        <View style={{ backgroundColor: "#11142a", flex: 1 }}>
          <Header androidStatusBarColor={"#11142a"} style={styles.headerMenu}>
            <Left style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.rowiconBg}
                onPress={() => alert("Search")}
              >
                <Image source={Images.search} style={styles.rowicon} />
              </TouchableOpacity>
            </Left>

            <Body style={{ flex: 2, alignItems: "center" }} />

            <Right style={{ flex: 1 }} transparent />
          </Header>

          <View style={{ backgroundColor: "#292c40", height: 0.3 }} />

          <Content>
            <View style={styles.menumainview}>
              <TouchableOpacity onPress={() => alert("Home")}>
                <View style={styles.listrow}>
                  <Ionicons name="md-home" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Home</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Articles")}>
                <View style={styles.listrow}>
                  <MaterialCommunityIcons
                    name="file-outline"
                    color="#ffffff"
                    size={20}
                  />
                  <Text style={styles.rowtxt}>Articles</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert("Message")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="bubbles" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Message</Text>
                  <View style={styles.notiCountSec}>
                    <Text style={styles.notiCount}>10</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert("Activity")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="bell" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Activity</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert("Favourite")}>
                <View style={styles.listrow}>
                  <FontAwesome name="star" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Favourite</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert("Friends")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="people" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Friends</Text>
                  <View style={styles.notiCountSec}>
                    <Text style={styles.notiCount}>15</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert("Logout")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="logout" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Content>

          <View style={styles.profileContainer}>
            <View style={styles.profileBody}>
              <Image
                source={{ uri: ProfileImage }}
                style={styles.profileImage}
              />
              <View style={styles.profileDetail}>
                <View style={styles.profileDetailStyle}>
                  <Text style={styles.name}>Jhon</Text>
                  <TouchableOpacity onPress={() => alert("Settings")}>
                    <Image source={Images.setting} style={styles.rowicon} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.place}>Seattle, USA</Text>
              </View>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
