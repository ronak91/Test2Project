import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  ImageBackground,
  BackHandler,
  I18nManager,
  ListView,
  ScrollView,
  AsyncStorage
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Left,
  Body,
  Title,
  Content,
  Spinner
} from "native-base";
import NetInfo from "@react-native-community/netinfo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Swiper from "react-native-swiper";
import Globals from "../Globals";

// Screen Styles
import styles from "./styles";
import { Images, Metrics, Fonts, Colors } from "../../../../Themes/";

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });
var dataSourceObjects = [];
var tempData = [];
var featureData = [];

function handleFirstConnectivityChange(isConnected) {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
}

export default class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      donecategoryCall: false,
      donefeatureCall: false,
      internetConnection: false,
      FeaturedBlog: [],
      dataSource: ds.cloneWithRows(dataSourceObjects)
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }

  componentWillMount() {
    this.setState({ isLoading: true });

    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("FirstScreen");
      return true;
    });

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    setTimeout(() => {
      try {
        this._getCategory();
        this._getFeatureBlog();
      } catch (error) {
        this.setState({
          isLoading: false,
          internetConnection: false
        });
      }
    }, 1000);
  }

  // Time Calculation
  _dateConvert = receivedTimeStamp => {
    // Date Formate "2018-07-17T21:00:17"
    var timeAgo = " ";
    var timeMonth = " ";
    const TimeStamp = receivedTimeStamp.split(" ")[0];
    const Year = TimeStamp.split("-")[0];
    const Month = TimeStamp.split("-")[1];
    const Day = TimeStamp.split("-")[2];
    if (Month == "01" || Month == "1") {
      timeMonth = "January";
    } else if (Month == "02" || Month == "2") {
      timeMonth = "February";
    } else if (Month == "03" || Month == "3") {
      timeMonth = "March";
    } else if (Month == "04" || Month == "4") {
      timeMonth = "April";
    } else if (Month == "05" || Month == "5") {
      timeMonth = "May";
    } else if (Month == "06" || Month == "6") {
      timeMonth = "June";
    } else if (Month == "07" || Month == "7") {
      timeMonth = "July";
    } else if (Month == "08" || Month == "8") {
      timeMonth = "August";
    } else if (Month == "09" || Month == "9") {
      timeMonth = "September";
    } else if (Month == "10") {
      timeMonth = "October";
    } else if (Month == "11") {
      timeMonth = "November";
    } else if (Month == "12") {
      timeMonth = "December";
    }
    timeAgo = Day + " " + timeMonth; //+ " " + Year;  '// uncomment it if you want to add year
    //  console.log(timeAgo);
    return timeAgo;
  };
  // Time Calculation

  _getFeatureBlog() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    const config = {
      method: "GET"
    };

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ isLoading: true });
        fetch(
          Globals.SITE_URL + "get_tag_posts/?id=" + Globals.FEATURED_TAG_ID,
          config
        ) //"get_category_posts/?id="+categoryid,config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            tempData = [];
            featureData = [];
            var i;
            var categoryID = "";
            var categoryName = "";
            var isFeatured = false;
            var featureCount = 0;

            if (responseJson.posts.length != 0) {
              console.log(responseJson.posts.length);

              for (i = 0; i < responseJson.posts.length; i++) {
                try {
                  try {
                    categoryID = responseJson.posts[i].categories[0].id;
                    categoryName = responseJson.posts[i].categories[0].title;
                  } catch (error) {
                    categoryID = "";
                  }

                  if (responseJson.posts[i].tags.length > 1) {
                    for (
                      var j = 0;
                      j < responseJson.posts[i].tags.length;
                      j++
                    ) {
                      if (responseJson.posts[i].tags[j].title == "Featured") {
                        tempData.push({
                          id: responseJson.posts[i].id,
                          title: responseJson.posts[i].title,
                          categoryName: categoryName,
                          isFeatured: true,
                          content: responseJson.posts[i].content,
                          excerpt: responseJson.posts[i].excerpt,
                          date: responseJson.posts[i].date,
                          img: responseJson.posts[i].thumbnail_images.full.url,
                          author: responseJson.posts[i].author.name,
                          bgColor: "#92dcff"
                        });
                      }
                    }
                  } else {
                    if (responseJson.posts[i].tags[0].title == "Featured") {
                      tempData.push({
                        id: responseJson.posts[i].id,
                        title: responseJson.posts[i].title,
                        categoryName: categoryName,
                        isFeatured: true,
                        content: responseJson.posts[i].content,
                        excerpt: responseJson.posts[i].excerpt,
                        date: responseJson.posts[i].date,
                        img: responseJson.posts[i].thumbnail_images.full.url,
                        author: responseJson.posts[i].author.name,
                        bgColor: "#92dcff"
                      });
                    }
                  }
                } catch (error) {}
              }

              for (var j = 0; j < tempData.length; j++) {
                catName = "";
                lasttitle = "";

                // Change "&amp;" to "&" for Title
                var SampleText = tempData[j].title.toString();
                resultArray = SampleText.split(" ");
                for (var i = 0; i < resultArray.length; i++) {
                  var NewText = "";
                  var changeText = resultArray[i].toString();
                  NewText = changeText.replace("&amp;", "&");
                  lasttitle = `${lasttitle} ${NewText}`;
                }

                // Change "&amp;" to "&" for Category Name
                var SampleText1 = tempData[j].categoryName.toString();
                catArray1 = SampleText1.split(" ");
                for (var i = 0; i < catArray1.length; i++) {
                  var NewText1 = "";
                  var changeText1 = catArray1[i].toString();
                  NewText1 = changeText1.replace("&amp;", "&");
                  catName = `${catName} ${NewText1}`;
                }

                console.log(tempData);

                if (j < Globals.FEATURED_BLOG_COUNT) {
                  if (tempData[j].isFeatured == true) {
                    featureData.push({
                      index: featureCount,
                      id: tempData[j].id,
                      title: lasttitle,
                      categoryName: catName,
                      excerpt: tempData[j].excerpt,
                      content: tempData[j].content,
                      date: tempData[j].date,
                      bgColor: "#92dcff"
                    });
                    featureCount++;
                  }
                }
              }
            }

            console.log(featureData);

            this.setState({
              donefeatureCall: true,
              internetConnection: true,
              isLoading: false
            });
          })
          .catch(error => {
            this.setState({
              internetConnection: false,
              isLoading: false
            });
          });
      } else {
        this.setState({
          isLoading: false,
          internetConnection: false
        });
        //alert("please check your Internet");
      }
    });
  }

  _getCategory() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    const config = {
      method: "GET"
    };

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ isLoading: true });

        console.log(Globals.SITE_URL + "get_category_index/");
        fetch(Globals.SITE_URL + "get_category_index/", config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            dataSourceObjects = [];
            var exCategory = Globals.EXCLUDE_CARTEGORY;

            for (var i = 0; i < responseJson.categories.length; i++) {
              if (
                responseJson.categories[i].title == "Fashion &amp; Lifestyle"
              ) {
                title = "Fashion & Lifestyle";
              } else {
                title = responseJson.categories[i].title;
              }
              var isMatch = false;
              if (responseJson.categories[i].post_count != 0) {
                isMatch = false;
                for (var k = 0; k < exCategory.length; k++) {
                  if (exCategory[k] == responseJson.categories[i].id) {
                    isMatch = true;
                  }
                }
                if (!isMatch) {
                  dataSourceObjects.push({
                    index: i,
                    id: responseJson.categories[i].id,
                    title: title,
                    url: responseJson.categories[i].url,
                    description: responseJson.categories[i].description
                  });
                }
              }
            }
            this.setState({
              dataSource: ds.cloneWithRows(dataSourceObjects),
              donecategoryCall: true,
              internetConnection: true,
              isLoading: false
            });
          })
          .catch(error => {
            console.error(error);
            this.setState({
              isLoading: false,
              internetConnection: false
            });
          });
      } else {
        //alert("please check your Internet");
        this.setState({
          isLoading: false,
          internetConnection: false
        });
      }
    });
  }

  _handleNavigation(id, categoryName) {
    var cat_id = id.toString();
    AsyncStorage.multiSet([["CatID", cat_id], ["CatNAME", categoryName]]);

    console.log(cat_id);
    this.props.navigation.navigate("Category", {
      CatID: cat_id,
      CatNAME: categoryName
    });
  }

  _PostDetailsNavigation(post_id) {
    var postID = post_id.toString();
    AsyncStorage.multiSet([["postID", postID], ["arriveFrom", "categoryList"]]);
    this.props.navigation.navigate("CategoryDetail");
  }

  _renderRow(rowData) {
    return (
      <TouchableOpacity
        style={styles.rowMain}
        onPress={() => this._handleNavigation(rowData.id, rowData.title)}
      >
        <ImageBackground
          style={styles.imagebg}
          source={
            rowData.url == "" ? Images.No_image_found : { uri: rowData.url }
          }
        >
          <View
            style={[styles.imagebg, { backgroundColor: "rgba(0,0,0,0.6)" }]}
          >
            <Text style={styles.catName}>{rowData.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }
    var that = this;

    const { navigation } = this.props;

    return (
      <ImageBackground source={Images.categoryBgg} style={styles.imageBG}>
        <Header androidStatusBarColor={"transparent"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <MaterialIcons name={"menu"} size={35} color="white" />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Blogs</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("FirstScreen")}
              style={styles.backArrow}
            >
              {I18nManager.isRTL ? (
                <Ionicons
                  name="ios-arrow-round-forward-outline"
                  size={30}
                  color="#fff"
                />
              ) : (
                <Ionicons
                  name="ios-arrow-round-back-outline"
                  size={30}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </Right>
        </Header>

        <Content style={{ width: Metrics.WIDTH }}>
          {this.state.isLoading ? (
            <View style={styles.imageOverlay}>
              <Spinner color="black" />
            </View>
          ) : this.state.internetConnection == true ? (
            <View>
              {this.state.donecategoryCall == true ? (
                <View>
                  <View style={styles.featuredTextView}>
                    <Text style={styles.featuredText}>Featured Blog</Text>
                  </View>
                  <View style={styles.swiperView}>
                    {this.state.donefeatureCall == true ? (
                      <Swiper
                        horizontal={true}
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={2.5}
                        paginationStyle={styles.pagination}
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={styles.activeDot} />}
                      >
                        {featureData.map((item, index) => {
                          return (
                            <TouchableOpacity
                              key={index}
                              onPress={() =>
                                this._PostDetailsNavigation(item.id)
                              }
                            >
                              <View style={styles.swiperTextView} key={index}>
                                <Text
                                  style={[
                                    styles.swiperCategoryName,
                                    { paddingBottom: Metrics.HEIGHT * 0.018 }
                                  ]}
                                >
                                  {item.categoryName}
                                </Text>
                                <Text
                                  style={styles.swiperCategoryDes}
                                  numberOfLines={4}
                                >
                                  {item.title}
                                </Text>
                                <Text
                                  style={[
                                    styles.swiperCategoryName,
                                    { paddingTop: Metrics.HEIGHT * 0.06 }
                                  ]}
                                >
                                  {this._dateConvert(item.date)}
                                </Text>
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                      </Swiper>
                    ) : (
                      <View style={styles.imageOverlay}>
                        <Spinner color="black" />
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      paddingTop: Metrics.HEIGHT * 0.05
                    }}
                  >
                    <ListView
                      contentContainerStyle={styles.listContent}
                      scrollEnabled={false}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow.bind(this)}
                      enableEmptySections
                      showsVerticalScrollIndicator={false}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          ) : (
            <View
              style={{
                height: Metrics.HEIGHT,
                width: Metrics.WIDTH,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent"
              }}
            >
              <Text style={styles.noInternetText}>No Internet Connection</Text>
              <TouchableOpacity
                style={{ marginTop: Metrics.HEIGHT * 0.03 }}
                onPress={() => this._getCategory()}
              >
                <Text style={styles.ReloadText}>Reload</Text>
              </TouchableOpacity>
            </View>
          )}
        </Content>
      </ImageBackground>
    );
  }
}
