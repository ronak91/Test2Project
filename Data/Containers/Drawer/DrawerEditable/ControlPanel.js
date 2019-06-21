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
  TextInput,
  ListView,
  ScrollView,
  Modal
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
  Body,
  Label,
  Input
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import styles from "./styles";
export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modalVisible: false,
      modalDeleteVisible: false,
      itemName: "",
      SimapleArray: [],
      deleteItemId: ""
    };
  }

  onCheckBoxPress(id) {
    let tmp = this.state.SimapleArray;

    if (tmp.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);
    } else {
      tmp.push(id);
    }

    this.setState({
      SimapleArray: tmp
    });
    
  }

  _handleClick() {
    var txt = this.state.itemName;
    this.setState({ mytext: this.state.itemName });
    if (txt.length != 0 && txt.trim() != "") {
      this.state.SimapleArray.push({
        id: this.state.cou,
        title: this.state.itemName
      });
      this.setState({
        cou: this.state.count + 1,
        itemName: ""
      });
      this.toggleModals(false);
    }

    // alert(this.state.SimapleArray.toString());
  }

  _handleAddCancleClick() {
    this.setState({ modalVisible: false });
    this.setState({ itemName: "" });
  }

  toggleModals(visible) {
    this.setState({ modalVisible: visible });
  }

  toggleDeleteModal(visible, id) {
    this.setState({ deleteItemId: id });
    this.setState({ modalDeleteVisible: visible });
  }

  _renderDeleteItem(index, visible) {
    var newData = this.state.SimapleArray.slice(); //copy array
    newData.splice(index, 1); //remove element
    for (var i = 0; i < newData.length; i++) {
      newData[i].index = i;
    }
    this.setState({ SimapleArray: newData });
    this.setState({ modalDeleteVisible: visible });
  }

  render() {
    const ProfileImage =
      "https://antiqueruby.aliansoftware.net//Images/profile/profile_image.jpg";
    return (
      <Container style={styles.mainview}>
        <View style={styles.filterHeader}>
          <Text style={styles.filter}>FILTER</Text>
          <View style={styles.filterIcon}>
            <Ionicons
              name="ios-options-outline"
              color={"white"}
              size={Fonts.moderateScale(18)}
            />
          </View>
        </View>

        <ScrollView>
          <View style={styles.listContent}>
            {this.state.SimapleArray.map((item, index) => {
              return (
                <View style={styles.rowMain} key={index}>
                  <Text style={styles.listItem}>{item.title}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleDeleteModal(true, item.id);
                    }}
                    style={{ flexDirection: "row" }}
                  >
                    <View style={styles.rowVerticalDivider} />
                    <Ionicons name="ios-close" color={"#fff4"} size={25} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.bottomView}>
          <View style={styles.bottomViewBg} />

          <TouchableOpacity
            onPress={() => {
              this.toggleModals(true);
            }}
            style={styles.addView}
          >
            <Text style={styles.addText}>Add</Text>
            <MaterialIcons
              name="add"
              color={"white"}
              size={Fonts.moderateScale(22)}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "column",
              height: Metrics.HEIGHT,
              width: Metrics.WIDTH
            }}
          >
            <Modal
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.state.modalVisible(false);
              }}
            >
              <View style={styles.modalView}>
                <View style={styles.modal}>
                  <Text style={styles.addItemTitle}> Add Item </Text>

                  <View style={styles.addItemBg}>
                    <TextInput
                      style={styles.inputEmail}
                      editable={true}
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Enter Item Name.."
                      placeholderTextColor="#22a7f0"
                      value={this.state.itemName}
                      underlineColorAndroid="transparent"
                      onChangeText={text => this.setState({ itemName: text })}
                    />
                  </View>

                  <View style={styles.dialogHorizontalDivider} />

                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => this._handleClick()}>
                      <Text style={styles.buttonBg}>ADD</Text>
                    </TouchableOpacity>

                    <View style={styles.dialogVerticalDivider} />

                    <TouchableOpacity
                      onPress={() => {
                        this._handleAddCancleClick();
                      }}
                    >
                      <Text style={styles.buttonBg}>CANCEL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View
            style={{
              flexDirection: "column",
              height: Metrics.HEIGHT,
              width: Metrics.WIDTH
            }}
          >
            <Modal
              transparent={true}
              visible={this.state.modalDeleteVisible}
              onRequestClose={() => {
                this.state.modalDeleteVisible(false);
              }}
            >
              <View style={styles.modalView}>
                <View style={styles.modal}>
                  <Text style={styles.addItemTitle}> Delete Confirmation </Text>

                  <Text style={styles.deleteText}>
                    Are you sure, you want to delete this item?
                  </Text>

                  <View style={styles.dialogHorizontalDivider} />

                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() =>
                        this._renderDeleteItem(this.state.deleteItemId, false)
                      }
                    >
                      <Text style={styles.buttonBg}>DELETE</Text>
                    </TouchableOpacity>

                    <View style={styles.dialogVerticalDivider} />

                    <TouchableOpacity
                      onPress={() => {
                        this.toggleDeleteModal(false, "");
                      }}
                    >
                      <Text style={styles.buttonBg}>CANCEL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.profileContainer}>
            <Image source={{ uri: ProfileImage }} style={styles.profileImage} />
            <View style={styles.profileDetail}>
              <View style={styles.profileHeader}>
                <Text style={styles.name}>Johnie Cornwall</Text>
                <TouchableOpacity onPress={() => alert("Settings")}>
                  <Ionicons
                    name="ios-settings"
                    color={"#6c7084"}
                    size={Fonts.moderateScale(16)}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.place}>Seattle, USA</Text>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
