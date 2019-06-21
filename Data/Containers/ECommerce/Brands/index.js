import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  BackHandler,
  I18nManager,
  ListView
} from "react-native";
import {
  Content,
  Container,
  Right,
  Header,
  Left,
  Body,
  Title,
  Icon,
  Input
} from "native-base";
import { CachedImage } from "react-native-cached-image";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import { Images, Fonts, Metrics, Colors } from "../../../Themes/";
import CheckBox from "react-native-check-box";

export default class Brands extends Component {
  constructor(props) {
    super(props);
    const brandList = [
      {
        id: 0,
        brandIcon: Images.brandAramani,
        brandName: "Aramani"
      },
      {
        id: 1,
        brandIcon: Images.brandAvenue,
        brandName: "Avenue"
      },
      {
        id: 2,
        brandIcon: Images.brandBebe,
        brandName: "Bebe"
      },
      {
        id: 3,
        brandIcon: Images.brandColvinJeans,
        brandName: "Colvin Klein Jeans"
      },
      {
        id: 4,
        brandIcon: Images.brandDockers,
        brandName: "Dockers"
      },
      {
        id: 5,
        brandIcon: Images.brandEllamoss,
        brandName: "Ella Mass"
      },
      {
        id: 6,
        brandIcon: Images.brandFossil,
        brandName: "Fossil"
      },
      {
        id: 7,
        brandIcon: Images.brandHurley,
        brandName: "Hurley"
      },
      {
        id: 8,
        brandIcon: Images.brandKarmaLoop,
        brandName: "Karma Loop"
      },
      {
        id: 9,
        brandIcon: Images.brandLevis,
        brandName: "Levis"
      },
      {
        id: 10,
        brandIcon: Images.brandMango,
        brandName: "MANGO"
      },
      {
        id: 11,
        brandIcon: Images.brandMankind,
        brandName: "Mankind"
      },
      {
        id: 12,
        brandIcon: Images.brandMarciano,
        brandName: "Marciano"
      },
      {
        id: 13,
        brandIcon: Images.brandMiraclesuite,
        brandName: "Miraclesuit"
      },
      {
        id: 14,
        brandIcon: Images.brandWomanWithin,
        brandName: "Woman Within"
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      dataSource: ds.cloneWithRows(brandList),
      isSearch: false
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("ECommerceMenu");
      return true;
    });
  }

  _handleBrandClick(brandName) {
    alert(brandName);
  }

  _renderRow(rowData) {
    return (
      <TouchableOpacity
        style={styles.rowMain}
        onPress={() => this._handleBrandClick(rowData.brandName)}
      >
        <Image source={rowData.brandIcon} style={styles.barndIcon} />
      </TouchableOpacity>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#0e1130", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Ionicons
                name={"ios-menu"}
                size={30}
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Brands</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.setState({ isSearch: !this.state.isSearch })}
            >
              <Ionicons name={"ios-search"} size={25} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>

        {this.state.isSearch ? (
          <View style={styles.searchViewBg}>
            <View style={styles.searchView}>
              <Ionicons
                name="ios-search"
                size={20}
                color="#8e8e93"
                style={{ marginLeft: 10 }}
              />
              <Input
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#8e8e93"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"
              />
              {/*<Text style={styles.searchText}>Search</Text>*/}
            </View>
          </View>
        ) : null}

        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections
          pageSize={4}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}
