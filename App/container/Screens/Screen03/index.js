import React, { Component } from "react";
import {
  View,
  BackHandler,
  Image,
  ListView,
  TouchableOpacity
} from "react-native";
import { Container } from "native-base";
import Images from "../../Themes/Images";
import styles from "./styles";
import MyHeader from "../../../components/Header";

export default class Screen03 extends Component {
  static navigationOptions = {
    header: null
  };

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
      that.props.navigation.navigate("Home");
      //Alert.alert("Back Pressed");
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
        <Image source={rowData.brandIcon} style={styles.brandIcon} />
      </TouchableOpacity>
    );
  }

  render() {
    const title = "ListView Example";
    const { navigation } = this.props;
    let isBack = true;

    var that = this;

    return (
      <Container style={styles.container}>
        <MyHeader navigation={navigation} title={title} isBack={isBack} />
        <View style={styles.containMainBg}>
          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            scrollEnabled
            pageSize={4}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </Container>
    );
  }
}
