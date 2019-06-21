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
  ListView
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
// Styles
import styles from "./styles";

const itemImageOne =
  "https://antiqueruby.aliansoftware.net//Images/drawer/ic_drawer_item1_dseventeen.png";
const itemImageTwo =
  "https://antiqueruby.aliansoftware.net//Images/drawer/ic_drawer_item2_dseventeen.png";
const itemImageThree =
  "https://antiqueruby.aliansoftware.net//Images/drawer/ic_drawer_item3_dseventeen.png";
const itemImageFour =
  "https://antiqueruby.aliansoftware.net//Images/drawer/ic_drawer_item4_dseventeen.png";

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    const dataObjects = [
      {
        title: "First Title",
        prices: "$220",
        itemImage: { uri: itemImageOne }
      },
      {
        title: "Second Title",
        prices: "$453",
        itemImage: { uri: itemImageTwo }
      },
      {
        title: "Third Title",
        prices: "$323",
        itemImage: { uri: itemImageThree }
      },
      {
        title: "Fourth Title",
        prices: "$427",
        itemImage: { uri: itemImageFour }
      },
      {
        title: "Fifth Title",
        prices: "$786",
        itemImage: { uri: itemImageOne }
      },
      {
        title: "Sixth Title",
        prices: "$124",
        itemImage: { uri: itemImageTwo }
      },
      {
        title: "Seventh Title",
        prices: "$678",
        itemImage: { uri: itemImageThree }
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  _renderRow(rowData) {
    return (
      <View style={styles.itemBg}>
        <View style={styles.rowBg}>
          <Image source={rowData.itemImage} style={styles.itemImage} />
          <View style={styles.itemNamePriceBg}>
            <Text style={styles.itemTitleTxt}>{rowData.title}</Text>
            <Text style={styles.itemPriceTxt}>{rowData.prices}</Text>
          </View>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => alert("Delete Item")}
          >
            <Icon name="ios-close-outline" />
          </TouchableOpacity>
        </View>
        <View style={styles.listDivider} />
      </View>
    );
  }

  _handlePress(screenName) {
    var tempVar = "";
    this.setState({ activeMenu: screenName, activeMenuImage: tempVar });
    this.props.navigation.navigate(screenName);
  }

  render() {
    const { activeMenuImage } = this.state;
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    const profileImgUri =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.jpg";

    return (
      <Container style={styles.sideBarContainer}>
        <View>
          <Header style={styles.headerD}>
            <Left style={styles.leftD}>
              <Text style={styles.myCartTxt}>My Cart</Text>
            </Left>
            <Body />
            <Right style={styles.rightD}>
              <View style={styles.itemCountBg}>
                <Text style={styles.countTxt}>4 items</Text>
              </View>
            </Right>
          </Header>
          <View style={styles.mainview}>
            <View style={styles.listBg}>
              <ListView
                contentContainerStyle={{ backgroundColor: "transparent" }}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderFooter={this._renderFooter}
                enableEmptySections
                pageSize={15}
              />
            </View>
            <View style={styles.bottomViewBg} />
            <View style={styles.subTotalBg}>
              <Text style={styles.subTotalTxt}>SUBTOTAL</Text>
              <Text style={styles.subTotalTxt}>$1387</Text>
            </View>
            <View style={styles.bottomDivider} />
          </View>
          <TouchableOpacity onPress={() => alert("Checkout")}>
            <View style={styles.checkoutBg}>
              <Text style={styles.checkoutTxt}>Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
