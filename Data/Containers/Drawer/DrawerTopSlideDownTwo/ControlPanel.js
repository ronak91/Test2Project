import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  I18nManager
} from "react-native";
import { Container, Header, Content, Item, Input, Icon } from "native-base";
import styles from "./styles";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
export default class ControlPanel extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={Images.drawerBG} style={styles.menuimageBg}>
          <View style={styles.menuClose}>
            <TouchableOpacity
              onPress={() => {
                this.props.closeDrawer();
              }}
            >
              <Ionicons
                name="ios-close"
                color="#ffffff"
                size={65}
                style={{ backgroundColor: "transparent" }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.menuListSec}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => alert("Articles")}>
                <View
                  style={[
                    styles.menuList,
                    { borderBottomWidth: 0.5, borderColor: "#53afe3" }
                  ]}
                >
                  <MaterialCommunityIcons
                    name="file-outline"
                    color="#ffffff"
                    size={30}
                  />
                  <Text style={styles.menuItemText}>Articles</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Profile")}>
                <View
                  style={[
                    styles.menuList,
                    {
                      borderLeftWidth: I18nManager.isRTL ? 0 : 0.5,
                      borderRightWidth: I18nManager.isRTL ? 0.5 : 0,
                      borderBottomWidth: 0.5,
                      borderColor: "#53afe3"
                    }
                  ]}
                >
                  <SimpleLineIcons name="user" color="#ffffff" size={30} />
                  <Text style={styles.menuItemText}>Profile</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => alert("Message")}>
                <View style={styles.menuList}>
                  <View style={styles.msgCountSec}>
                    <Text style={styles.menumsgCount}>3</Text>
                    <SimpleLineIcons name="bubbles" color="#ffffff" size={30} />
                  </View>
                  <Text style={styles.menuItemText}>Message</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Settings")}>
                <View
                  style={[
                    styles.menuList,
                    {
                      borderLeftWidth: I18nManager.isRTL ? 0 : 0.5,
                      borderRightWidth: I18nManager.isRTL ? 0.5 : 0,
                      borderColor: "#53afe3"
                    }
                  ]}
                >
                  <SimpleLineIcons name="settings" color="#ffffff" size={30} />
                  <Text style={styles.menuItemText}>Settings</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
