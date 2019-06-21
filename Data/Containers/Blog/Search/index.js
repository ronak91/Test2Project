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
  AsyncStorage,
  NetInfo
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
import Swiper from "react-native-swiper";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dropdown from "../../../Components/Dropdown/dropdown/";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Globals from '../Globals';

// Screen Styles
import styles from "./styles";
import { Images, Metrics } from "../../../Themes/";

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

const allLikedposts = [];
const likedPosts = [];
const AllPosts = [];
const blogs = [];
var rerloadlog = [];

var listViewHeight = 0;

function handleFirstConnectivityChange(isConnected) {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
}

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestBlog: [],
      isLoading: false,
      donecategoryCall: false,
      internetConnection: false,
      searchlist: false,
      CatNAME: "",
      CatID: "",
      dot_index: 0,
      paginationCount: 0,
      dataSourceBlog: ds.cloneWithRows(blogs)
    };
  }

  _handleBack() {
    newArray1 = [];
    AsyncStorage.removeItem("SmsInboxList");
    AsyncStorage.multiSet([["SmsInboxList", JSON.stringify(blogs)]]);
    this.props.navigation.navigate("CategoryList");
  }

  componentWillMount() {
    var that = this;

    AsyncStorage.multiGet(["LikedPostList", "CatID", "CatNAME","AllLikedPosts"]).then(data => {
      this.setState({
        CatID: data[1][1],
        CatNAME: data[2][1],
        blogCount: []
      });
      console.log(this.state.CatID);
      var myArray = JSON.parse(data[0][1]);
      var Alllike = JSON.parse(data[3][1]);

      console.log("getLikedPosts");
      console.log(data[0][1]);
      console.log(data[3][1]);

      var temp = [];

      for (var i = 0; i < myArray.length; i++) {
        temp.push({
          id: myArray[i].id
        });
      }
      likedPosts = temp;

      var templike = [];
      for (var i = 0; i < Alllike.length; i++) {
            templike.push({
              index: i,
              id: Alllike[i].id,
              title: Alllike[i].title,
              excerpt: Alllike[i].excerpt,
              content: Alllike[i].content,
              date: Alllike[i].date,
              img: Alllike[i].img,
              author: Alllike[i].author,
              bgColor: Alllike[i].bgColor,
              isLiked: Alllike[i].isLiked
            });
      }
      allLikedposts = templike;

    });

    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("CategoryList");
      return true;
    });
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

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }

  // Function to Get Post on Change Text
  _getSearchList() {
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
        //console.log(this.state.CatID);
        //var categoryid = this.state.CatID.toString();
        //console.log(categoryid);
        fetch(Globals.SITE_URL+"get_search_results/?search="+this.state.searchText,config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            // console.log(responseJson.posts.length);
            dataSourceObjects = [];
            tempData = [];
            var i;
            var categoryID = "";

            if(responseJson.status == "error"){
                dataSourceObjects = [];
            }
            else {

            //  catID: responseJson.posts[i].categories[0].id,
              for (i = 0; i < responseJson.posts.length; i++) {
                tempData.push({
                  id: responseJson.posts[i].id,
                  title: responseJson.posts[i].title,
                  content: responseJson.posts[i].content,
                  excerpt: responseJson.posts[i].excerpt,
                  date: responseJson.posts[i].date,
                  img: responseJson.posts[i].thumbnail,
                  author: responseJson.posts[i].author.name,
                  bgColor: "#92dcff"
                });
              }

              for (var j = 0; j < tempData.length; j++) {
                var isLiked = false;
                lasttitle = "";

                var SampleText = tempData[j].title.toString();
                resultArray = SampleText.split(" ");
                for (var i = 0; i < resultArray.length; i++) {
                  var NewText = "";
                  var changeText = resultArray[i].toString();
                  NewText = changeText.replace("&amp;", "&");
                  lasttitle = `${lasttitle} ${NewText}`;
                }

                if (likedPosts.length != 0) {
                  for (var i = 0; i < likedPosts.length; i++) {
                    if (likedPosts[i].id == tempData[j].id) {
                      console.log(likedPosts[i].id);
                      console.log(tempData[j].id);
                      isLiked = true;
                    }
                  }
                } else {
                  isLiked: false;
                }

                dataSourceObjects.push({
                  index: j,
                  id: tempData[j].id,
                  title: lasttitle,
                  excerpt: tempData[j].excerpt,
                  content: tempData[j].content,
                  date: tempData[j].date,
                  img: tempData[j].img,
                  author: tempData[j].author,
                  bgColor: "#92dcff",
                  isLiked: isLiked
                });
              }
            }

            rerloadlog = dataSourceObjects;
            console.log(dataSourceObjects);

            this.setState({
              dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
              doneApiCall: true,
              internetConnection: true,
              isLoading: false,
              searchlist: true,
            });
            if (tempData.length == 0) {
              this.setState({
                searchlist: false
              });
            }
          })
          .catch(error => {
            this.setState({
              isLoading: false,
              internetConnection: false
            });
            //console.error(error);
          });
      } else {
        this.setState({
          isLoading: false,
          internetConnection: false
        });
      }
    });
  }

  onContentSize(contentWidth, contentHeight) {
    listViewHeight = contentHeight;
  }

  _handleNavigation(post_id) {
    var postID = post_id.toString();
    AsyncStorage.multiSet([
      ["postID", postID],
      ["arriveFrom", "search"]
    ]);
    this.props.navigation.navigate("CategoryDetail");
  }

  _backArrowfun() {
    myArray = [];
    AsyncStorage.removeItem("SmsInboxList");
    this.props.navigation.navigate("CategoryList");
  }

  _renderRowBlog(rowData) {
    return (
      <View>
        {rowData.index % 2 === 0 ? (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: '#92dcff' }]}
            onPress={() => this._handleNavigation(rowData.id)}>
            <ImageBackground
              source={rowData.img == undefined ?Images.No_image_found:{ uri: rowData.img }}
              style={styles.evenOddImgBg}>
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <Image style={styles.likeBtn} source={Images.heart_selected}/>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <Image style={styles.likeBtn} source={Images.heart_unselected}/>
                </TouchableOpacity>
              )}

            </ImageBackground>

            <View style={styles.evenReadMoreBg}>
              <View>
                  <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}>
                    <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                      {rowData.title}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.dateReadMoreTxt}>
                    {this._dateConvert(rowData.date)}
                  </Text>
                  <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}>
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {rowData.title}
                  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.readMoreTxtBg}
                    onPress={() => this._handleNavigation(rowData.id)}>
                    <Text style={styles.readMoreTxt}>Read More</Text>
                    {I18nManager.isRTL ? (
                      <Image
                        source={Images.readMoreLeftArrow}
                        style={styles.readMoreArrow}
                      />
                    ) : (
                      <Image
                        source={Images.readMoreArrow}
                        style={styles.readMoreArrow}
                      />
                    )}
                  </TouchableOpacity>
              </View>
              {/* Author Name
              <Text numberOfLines={1} style={styles.titleAuthorNameTxt1}>
                {"Auther Name : "}{rowData.author}
              </Text>
              */}
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: '#baff88' }]}
            onPress={() => this._handleNavigation(rowData.id)}>
            <View style={styles.oddReadMoreBg}>
               <View>
                    <TouchableOpacity
                    onPress={() => this._handleNavigation(rowData.id)}>
                        <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                          {rowData.title}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.dateReadMoreTxt}>
                      {this._dateConvert(rowData.date)}
                    </Text>
                    <TouchableOpacity
                    onPress={() => this._handleNavigation(rowData.id)}>
                        <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                          {rowData.title}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.readMoreTxtBg}
                      onPress={() => this._handleNavigation(rowData.id)}>
                      <Text style={styles.readMoreTxt}>Read More</Text>
                      {I18nManager.isRTL ? (
                        <Image
                          source={Images.readMoreLeftArrow}
                          style={styles.readMoreArrow}
                        />
                      ) : (
                        <Image
                          source={Images.readMoreArrow}
                          style={styles.readMoreArrow}
                        />
                      )}
                    </TouchableOpacity>
                </View>
                {/* Author Name
                <Text numberOfLines={1} style={styles.titleAuthorNameTxt}>
                  {"Auther Name : "}{rowData.author}
                </Text>
                */}
            </View>
            <ImageBackground
              source={rowData.img == undefined ?Images.No_image_found:{ uri: rowData.img }}
              style={styles.evenOddImgBg}>
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
                >
                  <Image style={styles.likeBtn} source={Images.heart_selected}/>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
                >
                  <Image style={styles.likeBtn} source={Images.heart_unselected}/>
                </TouchableOpacity>
              )}
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  swipeRight() {
    this.refs.swiper.scrollBy(1);
    // if (I18nManager.isRTL) {
    //   this.refs.swiper.scrollBy(-1);
    // } else {
    //   this.refs.swiper.scrollBy(1);
    // }
    if (this.state.paginationCount == 9) {
      this.setState({ paginationCount: 0 });
    } else {
      this.setState({ paginationCount: this.state.paginationCount + 1 });
    }
  }

  swipeLeft() {
    // if (I18nManager.isRTL) {
    this.refs.swiper.scrollBy(-1);
    // } else {
    //   this.refs.swiper.scrollBy(-1);
    // }

    // this.setState({ paginationCount: this.state.paginationCount - 1 });
    if (this.state.paginationCount == 0) {
      this.setState({ paginationCount: 9 });
    } else {
      this.setState({ paginationCount: this.state.paginationCount - 1 });
    }
  }

  // Function to Get Post on Change Text
  onChangeText = (newText) => {
    // insert your logic here
    console.log(newText);
    this.setState({
      searchText: newText,
    });

    this._getSearchList();
  }

  backArrowfun() {
    myArray = [];
    AsyncStorage.removeItem("SmsInboxList");
    this.props.navigation.navigate("CategoryList");
  }

  render() {
    // console.log("dataSourceblog==");
    // console.log(" " + this.state.dataSourceBlog.getRowCount());
    const { blogCount } = this.state;
    StatusBar.setBarStyle("light-content", true);
    var that = this;

    return (
      <View style={styles.mainView}>
      <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
        <Left style={styles.left}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => this.backArrowfun()}
          >
            <Ionicons
              name={
                I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"
              }
              size={35}
              color="white"
              style={{ paddingRight: 10 }}
            />
          </TouchableOpacity>
        </Left>

        <Body style={styles.body}>
          <Text style={styles.textTitle}>Search</Text>
        </Body>

        <Right style={styles.right} transparent />
      </Header>
        <Content>
          <View style={styles.searchViewBg}>
            <View style={styles.searchBg}>
              <Input
                style={styles.searchInput}
                placeholder="Search for News"
                placeholderTextColor="#555567"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"
                onChangeText={this.onChangeText}
                value={this.state.searchText}
                ref={comp => { this.textInputRef = comp; }}
              />
              <EvilIcons name={"search"} size={24} color="#8e8e93" />
            </View>
            <View style={styles.searchYellowBlog} />
          </View>

          <View style={{ marginTop:2 }}>
            {this.state.isLoading ? (
              <View style={styles.imageOverlay}>
                <Spinner color="black" />
              </View>
            ) : this.state.internetConnection == true ? (
              <View>
                {this.state.doneApiCall == true ? (
                  <View>
                    <Text style={styles.blogTxt}>Blogs</Text>
                    {this.state.searchlist == true ? (
                        <ListView
                          ref="listView"
                          dataSource={this.state.dataSourceBlog}
                          renderRow={this._renderRowBlog.bind(this)}
                          onContentSizeChange={this.onContentSize}
                          scrollEnabled={false}
                          enableEmptySections
                          pageSize={4}
                        />
                      ) : (
                        <View
                          style={{
                            height: Metrics.HEIGHT*0.25,
                            width: Metrics.WIDTH,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "transparent"
                          }}>
                          <Text style={styles.noInternetText}>No Data Found</Text>
                        </View>
                      )}
                  </View>
                ) : null }
              </View>
            ) : null }
          </View>
        </Content>
      </View>
    );
  }

  // Like/Dislike Function
  onLikeClick(listId) {
    var temp = [];
    var temp1 = [];
    var templikePosts = [];
    var templikePosts1 = [];
    temp = likedPosts;
    temp1 = likedPosts;
    templikePosts = allLikedposts;
    templikePosts1 = allLikedposts;
    var ismatch = false;

    if (temp.length != 0) {
      ismatch = false;

      for (var t = 0; t < temp.length; t++) {
        if (temp[t].id == listId) {
          console.log("ID Removed");
          var toRemove = listId;
          console.log(toRemove);
          var index = temp1.indexOf(toRemove);
          temp1.splice(t, 1);
          ismatch = true;
          break;
        }
      }

      for (var o = 0; o < templikePosts.length; o++) {
        if (templikePosts[o].id == listId) {
          console.log("ID Removed");
          var toRemove = listId;
          console.log(toRemove);
          var index = templikePosts1.indexOf(toRemove);
          templikePosts1.splice(t, 1);
          break;
        }
      }

      if (ismatch == false) {
        console.log("ID Added");
        temp1.push({
          id: listId
        });
        for (var k = 0; k < dataSourceObjects.length; k++) {
               if (dataSourceObjects[k].id == listId) {
                      templikePosts1.push({
                        index: k,
                        id: dataSourceObjects[k].id,
                        title: dataSourceObjects[k].title,
                        excerpt: dataSourceObjects[k].excerpt,
                        content: dataSourceObjects[k].content,
                        date: dataSourceObjects[k].date,
                        img: dataSourceObjects[k].img,
                        author: dataSourceObjects[k].author,
                        bgColor: dataSourceObjects[k].bgColor,
                        isLiked: dataSourceObjects[k].isLiked
                      });
               }
           }
       }
    } else {
      console.log("ID Added");
      temp1.push({
        id: listId
      });

      console.log(templikePosts1);

      for (var k = 0; k < dataSourceObjects.length; k++) {
             if (dataSourceObjects[k].id == listId) {
                    templikePosts1.push({
                      index: k,
                      id: dataSourceObjects[k].id,
                      title: dataSourceObjects[k].title,
                      excerpt: dataSourceObjects[k].excerpt,
                      content: dataSourceObjects[k].content,
                      date: dataSourceObjects[k].date,
                      img: dataSourceObjects[k].img,
                      author: dataSourceObjects[k].author,
                      bgColor: dataSourceObjects[k].bgColor,
                      isLiked: dataSourceObjects[k].isLiked
                    });
             }
         }
    }

    console.log(temp1);

    for (var i = 0; i < dataSourceObjects.length; i++) {
      if (dataSourceObjects[i].id == listId) {
        if (dataSourceObjects[i].isLiked) {
          dataSourceObjects[i].isLiked = false;
        } else {
          dataSourceObjects[i].isLiked = true;
        }
      }
    }

    console.log(dataSourceObjects);

    this.setState({
      dataSourceBlog: ds.cloneWithRows(dataSourceObjects)
    });

    AsyncStorage.multiSet([["LikedPostList", JSON.stringify(temp1)]]);
    AsyncStorage.multiSet([["AllLikedPosts", JSON.stringify(templikePosts1)]]);

    //}
  }

}
